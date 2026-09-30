"use client";

import { useState, type FormEvent } from "react";
import styles from "./QuoteForm.module.css";
import { serviceLabels, type Service } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm() {
  const [service, setService] = useState<Service>("general");
  const [status, setStatus] = useState<Status>("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          boat_details: fields.get("boat_length") ? `${fields.get("boat_length")} ft ${fields.get("boat_make")}` : String(fields.get("boat_make") || ""),
          service: fields.get("service"), notes: fields.get("notes"), website: fields.get("website"),
          marina_location: fields.get("marina_location"), client_name: fields.get("client_name"),
          client_email: fields.get("client_email"), phone_number: fields.get("phone_number"),
        }),
      });
      if (!response.ok) throw new Error("Unable to send request");
      setStatus("success");
      form.reset();
      setService("general");
    } catch { setStatus("error"); }
  }
  return (
    <form className={styles.form} onSubmit={submit} aria-busy={status === "loading"}>
      <h3>Request your quote.</h3>
      <p>We’ll follow up with pricing and availability. This isn’t a confirmed booking.</p>
      <div aria-hidden="true" className={styles.trap}><label>Website<input name="website" autoComplete="off" tabIndex={-1} /></label></div>
      <div className={styles.fields}>
        <label className={styles.wide}>Service needed<select name="service" value={service} onChange={event => setService(event.target.value as Service)}>{Object.entries(serviceLabels).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <label>Boat length (ft){service === "waterfront" && " · optional"}<input name="boat_length" type="number" min="1" max="300" step="0.1" required={service !== "waterfront"} placeholder="40" /></label>
        <label>Boat make / model{service === "waterfront" && " · optional"}<input name="boat_make" required={service !== "waterfront"} maxLength={120} placeholder="Sea Ray Sundancer" /></label>
        <label className={styles.wide}>Marina / dock location<input name="marina_location" required maxLength={200} placeholder="Marina name or dock address" /></label>
        <label className={styles.wide}>Your name<input name="client_name" autoComplete="name" required maxLength={120} placeholder="Full name" /></label>
        <label>Phone<input name="phone_number" type="tel" autoComplete="tel" required maxLength={40} placeholder="(561) 555-0123" /></label>
        <label>Email<input name="client_email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
        <label className={styles.wide}>Anything else? <span className={styles.optional}>Optional</span><textarea name="notes" maxLength={1000} rows={3} placeholder="Last cleaning date, growth, or a specific concern" /></label>
      </div>
      <button type="submit" disabled={status === "loading" || status === "success"}>
        {status === "loading" ? "Sending your request…" : status === "success" ? "Request received ✓" : "Request my quote"}
        {status !== "success" && <span aria-hidden="true">↗</span>}
      </button>
      <div className={styles.status} role="status" aria-live="polite">
        {status === "success" && "Thank you. Your request has been sent. We’ll follow up with pricing and availability."}
        {status === "error" && <>Your request couldn’t be sent. Please try again or <a href="tel:5616797240">call (561) 679-7240</a>.</>}
      </div>
      <small>By submitting, you agree to be contacted about your request. <a href="/privacy">Privacy policy</a></small>
    </form>
  );
}
