import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "@/components/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Coral Shield Marine",
  description: "Website use, quote requests, estimates, scheduling, and service arrangements for Coral Shield Marine LLC.",
};
const sections = [
  ["scope", "Scope of these terms"], ["quotes", "Quotes and published pricing"],
  ["scheduling", "Scheduling and service authorization"], ["access", "Access and safe conditions"],
  ["payment", "Payments and cancellations"], ["communications", "Communications and privacy"],
  ["use", "Website use and content"], ["limits", "Availability and legal rights"],
  ["law", "Governing law"], ["contact", "Updates and contact"],
];

export default function TermsOfService() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1} className={styles.main}><article className={styles.article}>
    <span className={styles.eyebrow}>Coral Shield Marine LLC</span>
    <h1>Terms of service</h1>
    <p className={styles.date}>Last updated: September 30, 2026</p>
    <p className={styles.intro}>These terms explain use of coralshieldmarine.com and how quote requests lead to a separately agreed service arrangement with Coral Shield Marine LLC.</p>
    <nav aria-label="Terms of service contents" className={styles.contents}><strong>On this page</strong><ul>{sections.map(([id,label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul></nav>
    <section aria-labelledby="scope"><h2 id="scope">1. Scope of these terms</h2>
      <p>These terms apply to this website and its quote-request process. Specific maintenance work is subject to the scope, price, authorization, and other conditions we agree with you before the work begins. A written service agreement, when provided, governs that work and controls if it conflicts with these website terms.</p>
      <p>Request a service only if you are at least 18 and authorized to arrange work for the vessel or property. Browsing the website or dismissing its privacy notice does not authorize work or accept a service contract.</p>
    </section>
    <section aria-labelledby="quotes"><h2 id="quotes">2. Quotes and published pricing</h2>
      <p>Published rates and examples describe the services and conditions stated on the pricing page. Your estimate depends on the requested scope, vessel size and condition, location, access, fouling, parts, and other relevant details. Requesting a quote does not confirm a booking or guarantee availability.</p>
      <p>We may need additional information or an inspection to prepare or confirm a price. We will explain the agreed scope, exclusions, and any applicable additional charges before work is authorized. If conditions require a material change in scope or price, we will seek your approval before performing the additional work.</p>
      <p>Quotes may include a stated validity period. A website correction does not retroactively change a price already agreed for authorized work.</p>
    </section>
    <section aria-labelledby="scheduling"><h2 id="scheduling">3. Scheduling and service authorization</h2>
      <p>A form success message or confirmation email acknowledges your inquiry. An appointment is confirmed only after we agree on the service details and schedule with you.</p>
      <p>Service availability depends on location, scope, access, weather, water conditions, and scheduling. Requests for recovery or entanglement assistance are subject to availability and a safety assessment. The website is not monitored as an emergency dispatch service. In an emergency involving danger to people, contact emergency services or the appropriate marine authorities.</p>
    </section>
    <section aria-labelledby="access"><h2 id="access">4. Access and safe conditions</h2>
      <p>Provide accurate vessel or property details and tell us about known damage, equipment concerns, access restrictions, and conditions relevant to the work. Arrange any required owner, marina, dock, or property permissions before the appointment.</p>
      <p>We may postpone, stop, or decline work when access is unavailable or conditions are unsafe, prohibited, or outside the agreed scope. Any rescheduling or related charges must follow the terms disclosed and agreed with you.</p>
      <p>Marine maintenance does not substitute for a marine survey, repair assessment, or certification of vessel seaworthiness. Expected results depend on the vessel and existing conditions and will be discussed for the requested service.</p>
    </section>
    <section aria-labelledby="payment"><h2 id="payment">5. Payments and cancellations</h2>
      <p>Payment timing, accepted methods, deposits, recurring service arrangements, cancellation conditions, and any applicable fees will be stated in your quote or service agreement before you commit. The website quote form does not collect payment or automatically enroll you in recurring service.</p>
      <p>Contact us promptly if you need to cancel or reschedule, or if you have a concern about completed work. Refunds and remedies depend on the agreed service terms and applicable law; these website terms do not create a blanket no-refund policy.</p>
    </section>
    <section aria-labelledby="communications"><h2 id="communications">6. Communications and privacy</h2>
      <p>By submitting a request, you ask us to respond by email, phone, or text about that request and any services you authorize. This does not enroll you in promotional campaigns. You can ask us to stop inquiry-related follow-up by contacting us. Your carrier may charge for calls, texts, or data.</p>
      <p>Our <Link href="/privacy">privacy policy</Link> explains how we handle quote details, communications, and website information.</p>
    </section>
    <section aria-labelledby="use"><h2 id="use">7. Website use and content</h2>
      <p>Use the website lawfully. Do not submit spam, impersonate someone, send malicious code, attempt unauthorized access, or interfere with the site. Submit only information you are authorized to share.</p>
      <p>Our branding, text, and original images belong to Coral Shield Marine LLC or their respective owners. You may view and share links for personal use. Other uses require permission unless allowed by law. Links to outside websites do not guarantee their content or services.</p>
    </section>
    <section aria-labelledby="limits"><h2 id="limits">8. Website availability and legal rights</h2>
      <p>We aim to keep website information accurate and the quote form available, but errors, interruptions, and delivery delays can occur. If a request fails or you do not receive a response, contact us directly. Website information is general service information and does not replace the terms of an agreed quote or service arrangement.</p>
      <p>Nothing in these website terms excludes liability or removes consumer rights that cannot lawfully be excluded. Any service-specific warranties, responsibilities, or limitations must be addressed in the applicable service agreement and remain subject to law.</p>
    </section>
    <section aria-labelledby="law"><h2 id="law">9. Governing law</h2>
      <p>Florida law governs these website terms, subject to any mandatory rights or laws that apply to you. Any court proceeding concerning these terms will be brought in a court with jurisdiction in Palm Beach County, Florida, unless applicable law requires otherwise.</p>
    </section>
    <section aria-labelledby="contact"><h2 id="contact">10. Updates and contact</h2>
      <p>We may update these website terms and will change the date above. Updates do not retroactively change an existing agreed service arrangement without your agreement or a lawful basis.</p>
      <p>For questions, contact Coral Shield Marine LLC, Palm Beach County, Florida, at <a href="mailto:benedicto@coralshieldmarine.com">benedicto@coralshieldmarine.com</a> or <a href="tel:+15616797240">(561) 679-7240</a>.</p>
    </section>
    <div className={styles.footer}><Link href="/">Back to home</Link><Link href="/privacy">Privacy policy</Link><Link href="/contact">Contact us</Link></div>
  </article></main></>;
}
