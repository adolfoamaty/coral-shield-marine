import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import QuoteForm from "@/components/QuoteForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Request a Quote | Coral Shield Marine",
  description: "Request a quote for underwater hull cleaning and marine maintenance in Palm Beach County. Call, text, or contact owner Benedicto Baltodano directly.",
};
export default function Contact() {
  return <div className={styles.page}><SiteHeader /><main id="main-content" tabIndex={-1}>
    <section className={styles.hero}><div className={styles.container}><Link href="/" className={styles.back}>← Back to home</Link><p className={styles.eyebrow}>LET’S TAKE CARE OF YOUR BOAT</p><h1>A clear quote.<br /><span>A personal conversation.</span></h1><p className={styles.intro}>Tell us what you need and where you’re docked. Benedicto will review your details and follow up with pricing and availability.</p></div></section>
    <section className={styles.contact}><div className={`${styles.container} ${styles.grid}`}><div><p className={styles.eyebrow}>ONE POINT OF CONTACT</p><h2>Talk directly with<br />the owner.</h2><p className={styles.body}>Have a question before requesting a quote? Call, text, or email. For recovery or entanglement inquiries, calling is the best way to discuss the situation and availability.</p><div className={styles.channels}><a href="tel:5616797240"><small>CALL BENEDICTO</small>(561) 679-7240 <span aria-hidden="true">↗</span></a><a href="sms:+15616797240"><small>SEND A TEXT</small>Text about your boat <span aria-hidden="true">↗</span></a><a href="mailto:benedicto@coralshieldmarine.com"><small>EMAIL</small>benedicto@coralshieldmarine.com <span aria-hidden="true">↗</span></a></div><div className={styles.location}><p>Based in Lake Worth, Florida</p><Link href="/#service-area">Check the Palm Beach County service area →</Link></div><div className={styles.fleet}><h3>More than one vessel?</h3><p>Tell us about your marina or fleet so we can discuss the scope.</p><a href="mailto:benedicto@coralshieldmarine.com?subject=Marina%20fleet%20quote">Ask about fleet service →</a></div></div><QuoteForm /></div></section>
    <section className={styles.next}><div className={styles.container}><p className={styles.eyebrow}>AFTER YOU REACH OUT</p><h2>Here’s what happens next.</h2><div className={styles.steps}>{[["01","We review your details","Your location, service needs, and vessel condition help us understand the work."],["02","We confirm your quote","We discuss pricing, access, and any additional work before scheduling."],["03","We arrange your service","Once the scope is agreed, we coordinate a service time and dock access."]].map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className={styles.note}>Submitting a request does not confirm an appointment. For rates and inclusions, <Link href="/pricing">view pricing</Link>.</p></div></section>
  </main><footer className={styles.footer}><div className={styles.container}><Link href="/" aria-label="Coral Shield Marine home"><Image src="/logo-white.png" alt="Coral Shield Marine" width={757} height={202} sizes="180px" /></Link><p>© {new Date().getFullYear()} Coral Shield Marine LLC</p><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div></footer></div>;
}
