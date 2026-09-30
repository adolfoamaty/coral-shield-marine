import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Underwater Marine Services | Coral Shield Marine",
  description: "Hull cleaning, running gear care, anode replacement, underwater recovery, and waterfront cleaning in Palm Beach County. Explore Coral Shield Marine services.",
};

const services = [
  { id: "hull-cleaning", num: "01", label: "REGULAR CARE", title: "Hull cleaning", text: "Keep marine growth from building up below the waterline. We clean the hull and waterline using methods suited to your boat’s coating and condition.", points: ["Hull and waterline cleaning", "Assessment of growth and coating condition", "Recurring or initial cleaning"], rate: "Routine care from $3.00 / ft", secondary: "Initial / heavy growth from $5.00 / ft", action: "Request hull cleaning" },
  { id: "running-gear", num: "02", label: "MOVING PARTS", title: "Running gear care", text: "Marine growth on your propellers and other underwater components can affect performance. Cleaning keeps those parts free of buildup and makes their condition easier to inspect.", points: ["Propellers and shafts", "Rudders and trim tabs", "Cleaning suited to each component"], rate: "Included with hull cleaning", secondary: "Tell us about any specific running gear concerns.", action: "Discuss your running gear" },
  { id: "anodes", num: "03", label: "CORROSION PROTECTION", title: "Anode replacement", text: "Sacrificial anodes help protect underwater metal parts from corrosion. We check their condition during cleaning and discuss replacements when needed.", points: ["Anode condition inspection", "Replacement parts matched to your vessel", "Underwater installation"], rate: "$35 part + $25 installation / each", secondary: "Replacement charges are separate from cleaning.", action: "Ask about anode replacement" },
  { id: "recovery", num: "04", label: "WHEN SOMETHING GOES WRONG", title: "Recovery & entanglement removal", text: "Dropped an item near your dock or have a line caught in your running gear? Call to discuss the location and situation so we can assess the work and availability.", points: ["Dropped-item recovery inquiries", "Propeller and running gear entanglements", "Access and conditions confirmed before scheduling"], rate: "Listed dispatch fee: $150–$300", secondary: "Work scope and availability confirmed separately.", action: "Call about recovery", phone: true },
  { id: "waterfront", num: "05", label: "AROUND YOUR DOCK", title: "Dock & waterfront cleaning", text: "Marine growth affects more than your boat. Ask about cleaning for dock pilings, boat lifts, and seawall surfaces at your waterfront property.", points: ["Dock piling marine growth", "Boat lift cleaning inquiries", "Seawall surface cleaning inquiries"], rate: "Quoted for your location and scope", secondary: "Cleaning service; structural repairs are outside this scope.", action: "Discuss waterfront cleaning" },
];

export default function Services() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Link href="/" className={styles.back}>← Back to home</Link>
            <p className={styles.eyebrow}>UNDERWATER MARINE SERVICES</p>
            <h1>Your boat. Your dock.<br /><span>Care below the surface.</span></h1>
            <p className={styles.intro}>From routine hull cleaning to a specific underwater maintenance need, start with a clear scope and one person to talk to.</p>
            <div className={styles.actions}><Link href="/contact" className={styles.primary}>Discuss your service <span aria-hidden="true">↗</span></Link><Link href="/pricing" className={styles.textLink}>View pricing <span aria-hidden="true">→</span></Link></div>
          </div>
        </section>
        <nav className={styles.jumpNav} aria-label="Services on this page"><div className={styles.container}>{services.map(({id,title}) => <a href={`#${id}`} key={id}>{title}<span aria-hidden="true">↓</span></a>)}</div></nav>
        <section className={styles.catalog} aria-label="Our services"><div className={styles.container}>
          {services.map(service => <article id={service.id} className={styles.service} key={service.id}>
            <div className={styles.description}><p className={styles.eyebrow}><span>{service.num}</span> / {service.label}</p><h2>{service.title}</h2><p>{service.text}</p><ul>{service.points.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul></div>
            <div className={styles.serviceAction}><span className={styles.miniLabel}>PRICING AT A GLANCE</span><h3>{service.rate}</h3><p>{service.secondary}</p>{service.phone ? <a className={styles.primary} href="tel:5616797240">{service.action}<span aria-hidden="true">↗</span></a> : <Link className={styles.primary} href="/contact">{service.action}<span aria-hidden="true">↗</span></Link>}<Link href="/pricing" className={styles.textLink}>Full pricing & details <span aria-hidden="true">→</span></Link></div>
          </article>)}
        </div></section>
        <section className={styles.reports}><div className={`${styles.container} ${styles.reportGrid}`}><div><p className={styles.eyebrow}>PART OF YOUR CLEANING SERVICE</p><h2>See what’s happening<br />below the waterline.</h2></div><div><p>Underwater photos and service notes are included with hull cleaning. You’ll have a record of the work and any maintenance recommendations.</p><ul><li>Hull and running gear condition</li><li>Anode observations</li><li>Notes for your next service</li></ul><p className={styles.reportNote}>Photo coverage depends on underwater visibility and access.</p></div></div></section>
        <section className={styles.next}><div className={`${styles.container} ${styles.nextGrid}`}><div><p className={styles.eyebrow}>PALM BEACH COUNTY, FLORIDA</p><h2>Tell us where you’re docked.</h2><p>Based in Lake Worth, serving local marinas and private docks. We’ll confirm access and service availability for your location.</p><Link href="/#service-area" className={styles.textLink}>View the service area <span aria-hidden="true">→</span></Link></div><div className={styles.nextCard}><h3>Not sure which service you need?</h3><p>Share your vessel details and what you’ve noticed. We’ll discuss the next step.</p><Link href="/contact" className={styles.primary}>Request a quote <span aria-hidden="true">↗</span></Link><a href="tel:5616797240">Or call (561) 679-7240</a></div></div></section>
      </main>
      <footer className={styles.footer}><div className={styles.container}><Link href="/" aria-label="Coral Shield Marine home"><Image src="/logo-white.png" alt="Coral Shield Marine" width={757} height={202} sizes="180px" /></Link><p>© {new Date().getFullYear()} Coral Shield Marine LLC</p><div><SocialLinks /><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div></div></footer>
    </div>
  );
}
