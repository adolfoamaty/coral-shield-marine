import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return <nav aria-label="Follow Coral Shield Marine" className={styles.links}>
    <a href="https://www.facebook.com/profile.php?id=61594719638291" target="_blank" rel="noopener noreferrer" aria-label="Coral Shield Marine on Facebook (opens in a new tab)">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A24 24 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8h4Z" fill="currentColor" /></svg><span>Facebook</span>
    </a>
    <a href="https://www.instagram.com/coralshieldmarine/" target="_blank" rel="noopener noreferrer" aria-label="Coral Shield Marine on Instagram (opens in a new tab)">
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" /></svg><span>Instagram</span>
    </a>
  </nav>;
}
