export const serviceLabels = {
  general: "Not sure yet",
  "hull-cleaning": "Hull cleaning",
  "running-gear": "Running gear care",
  anodes: "Anode replacement",
  recovery: "Recovery / entanglement",
  waterfront: "Dock / waterfront cleaning",
} as const;
export type Service = keyof typeof serviceLabels;
export type ContactDetails = { boat_details: string; marina_location: string; client_name: string; phone_number: string; client_email: string; service: Service; notes: string };
export function parseContact(body: unknown): ContactDetails | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const input = body as Record<string, unknown>;
  const limits = { boat_details: 160, marina_location: 200, client_name: 120, phone_number: 40, client_email: 254, notes: 1000 };
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > limit) return null;
    fields[key] = value.trim();
  }
  const service = input.service ?? "general";
  if (typeof service !== "string" || !Object.hasOwn(serviceLabels, service)) return null;
  if (!fields.marina_location || !fields.client_name || !fields.phone_number || !fields.client_email) return null;
  if (service !== "waterfront" && !fields.boat_details) return null;
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.client_email)) return null;
  if (/[\r\n]/.test(fields.client_email) || /[\r\n]/.test(fields.boat_details)) return null;
  const digits = fields.phone_number.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return null;
  return { ...fields, service } as ContactDetails;
}
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]!));
}
