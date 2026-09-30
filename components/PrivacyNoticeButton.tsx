"use client";

export default function PrivacyNoticeButton() {
  return <button type="button" onClick={() => window.dispatchEvent(new Event("coral-notice-open"))}>Show website privacy notice</button>;
}
