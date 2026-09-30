import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import QuoteForm from "@/components/QuoteForm";
import marina from "@/public/marina.jpg";
import styles from "./home.module.css";

function Arrow() { return <span aria-hidden="true">↗</span>; }
function Icon({ kind }: { kind: "hull" | "prop" | "shield" | "pin" | "check" }) {
  const paths = {
    hull: "M3 12l4 6h10l4-6H3Zm4 0V6h10v6M12 6V3M3 21c2-2 4 2 6 0s4 2 6 0 4 2 6 0",
    prop: "M12 12c-5 0-8-3-6-6s6-2 6 6Zm0 0c0-5 3-8 6-6s2 6-6 6Zm0 0c5 0 8 3 6 6s-6 2-6-6Zm0 0c0 5-3 8-6 6s-2-6 6-6Z",
    shield: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Zm-4 9 3 3 5-6",
    pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
    check: "m5 12 4 4L19 6",
  };
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[kind]} /></svg>;
}

const services = [
  { icon: "hull" as const, number: "01", title: "Hull cleaning", text: "Regular removal of marine growth from your hull and waterline, with cleaning methods suited to your bottom paint.", detail: "Routine maintenance from $3.00 / ft" },
  { icon: "prop" as const, number: "02", title: "Running gear care", text: "Cleaning for propellers, shafts, rudders, and trim tabs to help keep your boat moving efficiently.", detail: "Included with hull cleaning" },
  { icon: "shield" as const, number: "03", title: "Anode replacement", text: "Inspection and replacement of sacrificial anodes to help protect underwater metal components from corrosion.", detail: "Parts and installation priced separately" },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="hero-heading">
          <Image src={marina} alt="White yacht on blue coastal water" fill sizes="100vw" preload className={styles.heroImage} placeholder="blur" />
          <div className={styles.heroShade} />
          <div className={`${styles.container} ${styles.heroContent}`}>
            <p className={styles.eyebrow}><span className={styles.dot} /> PALM BEACH COUNTY, FLORIDA</p>
            <h1 id="hero-heading">Better care.<br />Below the <span>waterline.</span></h1>
            <p className={styles.heroDescription}>Underwater hull cleaning, running gear care, and anode replacement. Local service for a boat that’s ready to go.</p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primary}>Request a quote <Arrow /></Link>
              <Link href="/pricing" className={styles.heroSecondary}>Explore pricing <span aria-hidden="true">→</span></Link>
            </div>
            <p className={styles.heroNote}>Owner operated. Clear pricing. Personal service.</p>
          </div>
          <div className={styles.heroCaption}>UNDERWATER MAINTENANCE / CORAL SHIELD MARINE</div>
        </section>

        <div className={styles.introStrip}>
          <div className={styles.container}>
            <p>More time on the water.<br /><strong>Less to worry about below it.</strong></p>
            <span><Icon kind="check" /> Owner operated</span>
            <span><Icon kind="check" /> Photo reports included</span>
            <span><Icon kind="check" /> Local to Palm Beach County</span>
          </div>
        </div>

        <section id="services" className={`${styles.section} ${styles.services}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>WHAT WE DO</p><h2>Everything below<br />the waterline.</h2></div>
              <p>Thoughtful maintenance for your hull and running gear. Straightforward service, from the first quote to the final report.</p>
            </div>
            <div className={styles.serviceGrid}>
              {services.map((service) => <article key={service.title} className={styles.serviceCard}>
                <div className={styles.cardTop}><Icon kind={service.icon} /><span>{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <div className={styles.cardDetail}>{service.detail}</div>
              </article>)}
            </div>
            <p className={styles.serviceFootnote}>Need recovery or waterfront cleaning? <Link href="/services">Explore all services <span aria-hidden="true">→</span></Link></p>
          </div>
        </section>

        <section id="process" className={`${styles.section} ${styles.process}`}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>A SIMPLE PROCESS</p><h2>From your dock to done.</h2>
            <div className={styles.processGrid}>
              {[
                ["01", "Tell us about your boat", "Share your boat’s length, make, and dock location. We’ll discuss its condition and provide a quote."],
                ["02", "We take care of the dive", "We coordinate access and timing, then clean your hull and running gear and inspect your anodes."],
                ["03", "See what was done", "Receive service notes and underwater photos, along with any maintenance recommendations."],
              ].map(([number, title, text]) => <article key={number}><span className={styles.step}>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.owner}`}>
          <div className={`${styles.container} ${styles.ownerGrid}`}>
            <div className={styles.ownerStatement}>
              <p className={styles.eyebrow}>PERSONAL SERVICE. LOCAL ROOTS.</p>
              <h2>Your boat.<br />Our attention.</h2>
              <p>You know who you’re calling.<br />You know who’s caring for your boat.</p>
              <div className={styles.signature}><span className={styles.monogram}>BB</span><div><strong>Benedicto Baltodano</strong><span>Owner, Coral Shield Marine</span></div></div>
            </div>
            <div className={styles.ownerDetails}>
              <h3>A direct line to the person doing the work.</h3>
              <p>Coral Shield Marine is owner operated and based in Lake Worth. From your first question to your service report, you have one point of contact who knows your boat.</p>
              <div className={styles.ownerItem}><Icon kind="check" /><div><h4>Care you can see</h4><p>Photos and service notes help you understand the condition of your hull, running gear, and anodes.</p></div></div>
              <div className={styles.ownerItem}><Icon kind="check" /><div><h4>A schedule that makes sense</h4><p>We’ll discuss a maintenance interval based on your boat, its location, and how quickly growth returns.</p></div></div>
              <Link href="/contact" className={styles.textLink}>Talk to Benedicto <Arrow /></Link>
            </div>
          </div>
        </section>

        <section id="pricing" className={`${styles.section} ${styles.pricing}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CLEAR FROM THE START</p><h2>Know your maintenance cost.</h2></div><Link href="/pricing" className={styles.textLink}>View full pricing <Arrow /></Link></div>
            <div className={styles.priceGrid}>
              <article className={styles.priceCard}><div><span className={styles.priceLabel}>ROUTINE MAINTENANCE</span><h3>A cleaner hull, regularly.</h3><p>For boats on a recurring 3 to 4 week schedule.</p></div><div className={styles.rate}><small>Starting at</small><strong>$3.00<span> / ft</span></strong></div></article>
              <article className={styles.priceCard}><div><span className={styles.priceLabel}>INITIAL / HEAVY GROWTH</span><h3>A fresh start underwater.</h3><p>For first cleanings or more established marine growth.</p></div><div className={styles.rate}><small>Starting at</small><strong>$5.00<span> / ft</span></strong></div></article>
            </div>
            <p className={styles.priceNote}>Rates depend on vessel condition and service needs. Anode parts and installation are additional. We’ll confirm your quote before scheduling.</p>
          </div>
        </section>

        <section id="service-area" className={`${styles.section} ${styles.area}`}>
          <div className={`${styles.container} ${styles.areaGrid}`}>
            <div><p className={styles.eyebrow}>RIGHT HERE ON YOUR COAST</p><h2>Palm Beach County.<br />Your marina. Your dock.</h2><p>Based in Lake Worth, serving local boat owners at marinas and private docks. Share your location so we can confirm access and availability.</p><Link href="/contact" className={styles.textLink}>Check your location <Arrow /></Link></div>
            <div className={styles.areaPanel}><div className={styles.areaPanelHeading}><Icon kind="pin" /><span>OUR SERVICE AREA</span></div><ul>{["Lake Worth Beach", "Boynton Beach", "West Palm Beach", "Palm Beach", "Riviera Beach", "Lake Park"].map((city) => <li key={city}>{city}<span aria-hidden="true">↗</span></li>)}</ul><p>Marina access requirements confirmed before service.</p></div>
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contact}`}>
          <div className={`${styles.container} ${styles.contactGrid}`}>
            <div><p className={styles.eyebrow}>LET’S TAKE CARE OF YOUR BOAT</p><h2>Ready for your<br />next day out?</h2><p>Tell us a little about your vessel. We’ll help you find the right service and maintenance schedule.</p><div className={styles.contactLinks}><a href="tel:5616797240"><small>CALL OR TEXT</small>(561) 679-7240 <Arrow /></a><a href="mailto:benedicto@coralshieldmarine.com"><small>EMAIL BENEDICTO</small>benedicto@coralshieldmarine.com <Arrow /></a></div><div className={styles.fleet}><p>Managing multiple vessels?</p><a href="mailto:benedicto@coralshieldmarine.com?subject=Marina%20fleet%20quote">Ask about marina and fleet service →</a></div></div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <footer className={styles.footer}><div className={styles.container}><Link href="/" aria-label="Coral Shield Marine home"><Image src="/logo-white.png" alt="Coral Shield Marine" width={2172} height={724} sizes="180px" /></Link><p>© {new Date().getFullYear()} Coral Shield Marine LLC</p><div><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div></div></footer>
    </div>
  );
}
