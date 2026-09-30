"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

const noticeKey = "coral_privacy_notice_v1";
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("coral-notice-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("coral-notice-change", callback);
  };
}
function needsNotice() {
  try { return localStorage.getItem(noticeKey) !== "dismissed"; } catch { return true; }
}
function serverNotice() { return false; }

export default function CookieBanner() {
  const needsDisplay = useSyncExternalStore(subscribe, needsNotice, serverNotice);
  const [dismissed, setDismissed] = useState(false);
  const [reopened, setReopened] = useState(false);
  useEffect(() => {
    const reopen = () => { setDismissed(false); setReopened(true); };
    window.addEventListener("coral-notice-open", reopen);
    return () => window.removeEventListener("coral-notice-open", reopen);
  }, []);
  function dismiss() {
    try {
      localStorage.setItem(noticeKey, "dismissed");
      localStorage.removeItem("coral_cookie_consent");
    } catch { /* The notice can still be dismissed for this visit. */ }
    setDismissed(true);
    setReopened(false);
    window.dispatchEvent(new Event("coral-notice-change"));
  }
  if ((!needsDisplay || dismissed) && !reopened) return null;
  return (
    <section className={styles.notice} aria-label="Website privacy notice">
      <div>
        <h2>Your privacy on this website</h2>
        <p>This website does not use optional analytics or advertising cookies. We save your dismissal of this notice in your browser. Read our <Link href="/privacy">privacy policy</Link> for how we handle quote requests and website data.</p>
      </div>
      <button type="button" onClick={dismiss}>Dismiss notice</button>
    </section>
  );
}
