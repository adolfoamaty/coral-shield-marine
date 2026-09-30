"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const links = [
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["How it works", "/#process"],
  ["Service area", "/#service-area"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const breakpoint = window.matchMedia("(min-width: 1051px)");
    const closeOnDesktop = () => { if (breakpoint.matches) setOpen(false); };
    breakpoint.addEventListener("change", closeOnDesktop);
    return () => breakpoint.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);
  return (
    <header ref={header} className={styles.header}>
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <nav className={styles.nav} aria-label="Main navigation" onKeyDown={(event) => {
        if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
      }}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)} aria-label="Coral Shield Marine home">
          <Image src="/logo.png" alt="Coral Shield Marine" width={2172} height={724} sizes="210px" />
        </Link>
        <div className={styles.desktop}>
          {links.map(([label, href]) => <Link key={label} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        </div>
        <Link href="/contact" className={styles.quote} aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Request a quote <span aria-hidden="true">↗</span></Link>
        <button ref={toggle} className={styles.toggle} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div id="mobile-navigation" className={styles.mobile} hidden={!open}>
          {links.map(([label, href]) => <Link key={label} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link href="/contact" className={styles.mobileQuote} aria-current={pathname === "/contact" ? "page" : undefined} onClick={() => setOpen(false)}>Request a quote ↗</Link>
          <a href="tel:5616797240">Call (561) 679-7240</a>
        </div>
      </nav>
    </header>
  );
}
