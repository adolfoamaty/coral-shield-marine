import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import PrivacyNoticeButton from "@/components/PrivacyNoticeButton";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Coral Shield Marine",
  description: "How Coral Shield Marine LLC handles quote requests, website data, browser storage, and privacy requests.",
};
const sections = [
  ["information", "Information we collect"], ["use", "How we use information"],
  ["sharing", "Providers and disclosures"], ["storage", "Cookies and browser storage"],
  ["retention", "Retention and security"], ["choices", "Your choices and requests"],
  ["children", "Children and outside links"], ["contact", "Updates and contact"],
];

export default function PrivacyPolicy() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className={styles.main}><article className={styles.article}>
    <span className={styles.eyebrow}>Coral Shield Marine LLC</span>
    <h1>Privacy policy</h1>
    <p className={styles.date}>Last updated: September 30, 2026</p>
    <p className={styles.intro}>This policy explains how Coral Shield Marine LLC handles information collected through coralshieldmarine.com and communications about our marine maintenance services in Palm Beach County, Florida.</p>
    <nav aria-label="Privacy policy contents" className={styles.contents}><strong>On this page</strong><ul>{sections.map(([id,label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul></nav>
    <section aria-labelledby="information"><h2 id="information">1. Information we collect</h2>
      <p>When you request a quote, we collect your name, email address, phone number, requested service, marina or dock location, vessel details when relevant, and any optional notes you submit. We also receive information you provide in follow-up emails, calls, or texts.</p>
      <p>Our website hosting and infrastructure providers may process technical information such as IP address, browser or device information, requested pages, timestamps, and error or security logs to deliver and protect the website.</p>
      <p>The quote form does not collect payment card information or create a customer account. Please do not include passwords, financial account details, government identification numbers, or other sensitive information in the form.</p>
    </section>
    <section aria-labelledby="use"><h2 id="use">2. How we use information</h2><ul>
      <li>Review your request, prepare estimates, and discuss service availability.</li>
      <li>Send request confirmations and communicate about your quote or services by email, phone, or text.</li>
      <li>Arrange authorized services and maintain related business records.</li>
      <li>Operate the website, investigate errors, prevent spam or misuse, and meet legal obligations.</li>
    </ul><p>Submitting a quote request does not enroll you in promotional email or text campaigns.</p></section>
    <section aria-labelledby="sharing"><h2 id="sharing">3. Providers and disclosures</h2>
      <p>We use service providers for website hosting and email delivery. Resend processes quote details to deliver your request to our business inbox and send your confirmation email. Our business email provider processes messages and replies. These providers may handle information on systems in the United States or other countries.</p>
      <p>We do not sell personal information or share it with advertisers for targeted advertising. We may disclose information when reasonably necessary to comply with law or legal process, protect people or our business, or address fraud and security incidents.</p>
      <p>If you follow a link to an outside service, that service handles information under its own policies.</p>
    </section>
    <section aria-labelledby="storage"><h2 id="storage">4. Cookies and browser storage</h2>
      <p>The current website does not use optional analytics or advertising cookies, tracking pixels, or embedded advertising. The site saves a local browser storage entry called <code>coral_privacy_notice_v1</code> to remember that you dismissed the privacy notice. It contains the dismissal status, not your quote or contact details.</p>
      <p>This browser storage is separate from a cookie. It remains until you clear it or your browser removes it. Clearing site data will make the notice appear again. If storage is blocked, you can still dismiss the notice for the current visit and use the quote form.</p>
      <p>Hosting or security infrastructure may use necessary cookies or technical logs to operate and protect the site. Dismissing the notice does not authorize optional tracking or mean that you agree to this policy.</p>
      <PrivacyNoticeButton />
      <p>If we add optional tracking tools, we will update this policy and provide any choices required before enabling them.</p>
    </section>
    <section aria-labelledby="retention"><h2 id="retention">5. Retention and security</h2>
      <p>Quote details and correspondence are handled in our business inbox and email delivery systems. We retain information as needed to respond to inquiries, provide services, maintain business records, resolve disputes, and meet legal requirements. Retention varies by record type and the requirements of our providers; we do not promise immediate deletion from backups or records we must keep.</p>
      <p>We use reasonable safeguards appropriate to the information we handle. No website, email system, or transmission method can guarantee complete security. Avoid sending sensitive information through the quote form or ordinary email.</p>
    </section>
    <section aria-labelledby="choices"><h2 id="choices">6. Your choices and privacy requests</h2>
      <p>You can choose not to submit the form and contact us directly instead. Required fields help us respond to your request; optional notes are not required.</p>
      <p>You may ask to access, correct, or delete information you have provided, or ask us to stop contacting you about an inquiry, by emailing <a href="mailto:benedicto@coralshieldmarine.com">benedicto@coralshieldmarine.com</a>. We may need to verify your identity before responding. We will handle requests consistent with applicable law and may keep information needed for legal obligations, existing services, or business records. Please do not send identification documents unless we arrange a suitable verification method.</p>
      <p>Additional rights may apply depending on where you live and which laws apply to our business. You can contact us to ask about those rights.</p>
    </section>
    <section aria-labelledby="children"><h2 id="children">7. Children and outside links</h2>
      <p>Our services and quote form are intended for adults, and the site is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has submitted information, contact us so we can investigate and remove it as appropriate.</p>
      <p>We are not responsible for the privacy practices of websites linked from our site.</p>
    </section>
    <section aria-labelledby="contact"><h2 id="contact">8. Updates and contact</h2>
      <p>We will update the date above when this policy changes. Where applicable law requires additional notice, we will provide it.</p>
      <p>For privacy questions, contact Coral Shield Marine LLC, Palm Beach County, Florida, at <a href="mailto:benedicto@coralshieldmarine.com">benedicto@coralshieldmarine.com</a> or <a href="tel:+15616797240">(561) 679-7240</a>.</p>
    </section>
    <div className={styles.footer}><Link href="/">Back to home</Link><Link href="/terms">Terms of service</Link><Link href="/contact">Contact us</Link></div>
  </article></main></>;
}
