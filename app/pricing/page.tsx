import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Hull Cleaning Pricing | Coral Shield Marine",
  description: "Explore Palm Beach County hull cleaning rates, anode replacement costs, and what is included. Request a vessel-specific quote from Coral Shield Marine.",
};

const included = ["Hull & waterline", "Propellers & shafts", "Trim tabs & running gear", "Anode inspection", "Photos & service notes"];
const faqs = [
  ["Which cleaning rate applies to my boat?", "Routine maintenance is for boats on a recurring 3 to 4 week schedule. Initial cleaning or heavier growth starts at the higher rate. Tell us when your boat was last cleaned and what you know about its condition so we can confirm the right service."],
  ["Are anode replacements included?", "Anode inspection is included with cleaning. Replacement parts and installation are separate charges. The listed rate is $35 for the part and $25 for installation per anode. We’ll confirm the right parts and any replacement charges with your quote."],
  ["Is the listed price my final quote?", "These are starting rates. Boat length, growth, condition, access, and the service needed help determine your quote. We’ll confirm pricing before scheduling, including any agreed additional work."],
  ["How often should my hull be cleaned?", "The routine rate is based on a 3 to 4 week recurring schedule. Your boat’s location, coating, use, and growth can affect the right interval. We’ll discuss a schedule suited to your vessel."],
  ["What if I need recovery or entanglement removal?", "Call or text (561) 679-7240 to discuss the situation. The listed dispatch fee is $150 to $300. Availability, access, conditions, and the scope of the work need to be confirmed before a dive can be scheduled."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Check() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>; }

export default function Pricing() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link href="/" className={styles.back}><span aria-hidden="true">←</span> Back to home</Link>
            <p className={styles.eyebrow}>PRICING & WHAT’S INCLUDED</p>
            <h1>Clear pricing.<br /><span>Care you can count on.</span></h1>
            <p className={styles.intro}>Know where your maintenance cost starts. We’ll confirm the right service and a quote for your boat before scheduling.</p>
            <div className={styles.heroActions}><Link href="/contact" className={styles.primary}>Request my quote <Arrow /></Link><a href="#cleaning" className={styles.textLink}>Explore the rates <span aria-hidden="true">↓</span></a></div>
          </div>
        </section>

        <section id="cleaning" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.heading}><div><p className={styles.eyebrow}>HULL & RUNNING GEAR</p><h2>The right clean.<br />For your boat’s condition.</h2></div><p>Rates are based on boat length. Choose recurring care for regular upkeep, or an initial clean when your hull needs more attention.</p></div>
            <div className={styles.rateGrid}>
              <article className={`${styles.rateCard} ${styles.routine}`}>
                <div className={styles.cardHeading}><span>01 / ROUTINE CARE</span><span className={styles.badge}>Recurring service</span></div>
                <h3>Keep your hull ready.</h3><p>Regular maintenance on a 3 to 4 week schedule.</p>
                <div className={styles.rate}><small>Starting at</small><strong>$3.00<span> / ft</span></strong></div>
                <div className={styles.example}><span>Example: 40 ft boat</span><strong>$120 per cleaning</strong></div>
                <Link href="/contact" className={styles.primary}>Request routine maintenance <Arrow /></Link>
              </article>
              <article className={styles.rateCard}>
                <div className={styles.cardHeading}><span>02 / INITIAL CLEAN</span><span className={styles.badge}>Heavy growth</span></div>
                <h3>Give your hull a fresh start.</h3><p>For a first service or more established marine growth.</p>
                <div className={styles.rate}><small>Starting at</small><strong>$5.00<span> / ft</span></strong></div>
                <div className={styles.example}><span>Example: 40 ft boat</span><strong>$200 per cleaning</strong></div>
                <Link href="/contact" className={styles.secondary}>Request an initial cleaning <Arrow /></Link>
              </article>
            </div>
            <p className={styles.note}>Examples use the starting rate only. Vessel condition and additional services may affect your quote. Anode replacement is separate.</p>
            <div className={styles.included}><h3>Included with your cleaning</h3><ul>{included.map(item => <li key={item}><Check />{item}</li>)}</ul></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.extras}`}>
          <div className={`${styles.container} ${styles.extrasGrid}`}>
            <div><p className={styles.eyebrow}>ADDITIONAL SERVICES</p><h2>A little more care.<br />Clearly priced.</h2><p className={styles.body}>Replacement anodes and recovery work are priced separately from hull cleaning. We’ll discuss what your boat needs before proceeding.</p><div className={styles.anodeExample}><span className={styles.miniLabel}>ONE ANODE, REPLACED</span><p><strong>$35</strong> part <span aria-hidden="true">+</span> <strong>$25</strong> installation</p><div><strong>$60</strong><span>Listed total per anode</span></div></div></div>
            <div className={styles.extraPanel}>
              <div className={styles.extraRow}><div><h3>Anode part</h3><p>Replacement sacrificial anode</p></div><strong>$35<span> / each</span></strong></div>
              <div className={styles.extraRow}><div><h3>Underwater installation</h3><p>Labor for each anode replaced</p></div><strong>$25<span> / each</span></strong></div>
              <div className={styles.extraRow}><div><h3>Recovery / entanglement</h3><p>Listed dispatch fee; scope confirmed separately</p></div><strong>$150–$300</strong></div>
              <div className={styles.callout}><p>Need help with a dropped item or fouled propeller?</p><a href="tel:5616797240">Call (561) 679-7240 <Arrow /></a><small>Availability and dive conditions must be confirmed.</small></div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.heading}><div><p className={styles.eyebrow}>BEFORE, DURING & AFTER</p><h2>More than a clean hull.</h2></div><p>A clear plan before the dive, care during the service, and a record of what was done.</p></div>
            <div className={styles.processGrid}>{[
              ["01", "Confirm your service", "Share your vessel details and location. We’ll discuss its condition, agree on the scope, and confirm your quote."],
              ["02", "Care for your vessel", "We assess the hull and coating, choose suitable cleaning methods, and check the condition of your anodes."],
              ["03", "Review the results", "Receive underwater photos and service notes, with recommendations for your next cleaning or replacement needs."],
            ].map(([num,title,text]) => <article key={num}><span className={styles.step}>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faq}`}>
          <div className={`${styles.container} ${styles.faqGrid}`}>
            <div><p className={styles.eyebrow}>A FEW COMMON QUESTIONS</p><h2>Before you book.</h2><p className={styles.body}>Have a question about your specific boat? You can speak directly with Benedicto.</p><a href="tel:5616797240" className={styles.textLink}>Let’s talk <Arrow /></a></div>
            <div className={styles.questions}>{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className={styles.cta}><div className={`${styles.container} ${styles.ctaInner}`}><div><p className={styles.eyebrow}>YOUR BOAT. OUR ATTENTION.</p><h2>Let’s find the right care<br />for your boat.</h2><p>Share your boat’s length, location, and last cleaning date.</p></div><div><Link href="/contact" className={styles.primary}>Request my quote <Arrow /></Link><a href="tel:5616797240">Or call (561) 679-7240</a></div></div></section>
      </main>
      <footer className={styles.footer}><div className={styles.container}><Link href="/" aria-label="Coral Shield Marine home"><Image src="/logo-white.png" alt="Coral Shield Marine" width={757} height={202} sizes="180px" /></Link><p>© {new Date().getFullYear()} Coral Shield Marine LLC</p><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div></footer>
    </div>
  );
}
