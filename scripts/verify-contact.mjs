// Isolated route checks: Resend is replaced with a stub. No network calls or emails.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import Module from 'node:module';
import ts from 'typescript';
import { fileURLToPath } from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
function load(file, mocks = {}) {
  const filename = path.join(root, file);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const m = new Module(filename);
  m.filename = filename; m.paths = Module._nodeModulePaths(path.dirname(filename));
  const original = m.require.bind(m);
  m.require = id => Object.hasOwn(mocks, id) ? mocks[id] : original(id);
  m._compile(compiled, filename);
  return m.exports;
}
const helpers = load('lib/contact.ts');
const sent = []; let failure = '';
class ResendStub {
  constructor() { this.emails = { send: async message => {
    sent.push(message);
    if (failure === 'notification' && sent.length === 1) return { error: { message: 'test failure' } };
    if (failure === 'receipt' && sent.length === 2) throw new Error('test receipt failure');
    return { data: { id: 'mock-id' }, error: null };
  } }; }
}
const { POST } = load('app/api/contact/route.ts', { resend: { Resend: ResendStub }, '@/lib/contact': helpers });
const valid = { boat_details: '40 ft Sea Ray', marina_location: 'Test marina', client_name: 'Test owner', phone_number: '5615550123', client_email: 'test@example.com', service: 'hull-cleaning', notes: '' };
async function request(body, raw = false) {
  sent.length = 0;
  return POST(new Request('https://test.invalid/api/contact', { method: 'POST', body: raw ? body : JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }));
}
(async () => {
  const original = process.env.RESEND_API_KEY;
  try {
    delete process.env.RESEND_API_KEY;
    assert.equal((await request(valid)).status, 503);
    process.env.RESEND_API_KEY = 'test-stub-key';
    assert.equal((await request('{invalid', true)).status, 400);
    assert.equal((await request('x'.repeat(12001), true)).status, 413);
    for (const body of [null, [], {}, {...valid, client_email:'test@example.com\r\nInjected'}, {...valid, phone_number:'no number'}, {...valid, client_name:' '}, {...valid, notes:'x'.repeat(1001)}, {...valid, service:'invalid'}]) {
      assert.equal((await request(body)).status, 400);
      assert.equal(sent.length, 0);
    }
    assert.equal((await request({...valid,website:'spam'})).status, 200);
    assert.equal(sent.length, 0);
    assert.equal((await request({...valid,client_name:'<script>alert("x")</script>',notes:'<img src=x>'})).status, 200);
    assert.equal(sent.length, 2);
    assert.equal(sent[0].replyTo,valid.client_email);
    assert.ok(sent[0].html.includes('&lt;script&gt;'));
    assert.ok(!sent[0].html.includes('<script>'));
    assert.ok(sent[0].html.includes('&lt;img src=x&gt;'));
    assert.equal((await request({...valid,service:'waterfront',boat_details:''})).status, 200);
    const legacy = {...valid}; delete legacy.service; delete legacy.notes;
    assert.equal((await request(legacy)).status, 200);
    failure='notification'; assert.equal((await request(valid)).status, 502); assert.equal(sent.length,1);
    failure='receipt'; assert.equal((await request(valid)).status, 200); assert.equal(sent.length,2);
    console.log('PASS: validation, malformed/oversized payloads, honeypot, HTML escaping, reply address, waterfront and legacy submissions, provider error, receipt failure, missing key. No emails sent.');
  } finally { if (original === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = original; }
})().catch(error => { console.error(error); process.exit(1); });
