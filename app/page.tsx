"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [btnState, setBtnState] = useState({ text: 'Send Request', status: 'idle' });

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Navigation Bar */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-sm border-b border-navy/5">
        <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img src="/logo.png" alt="Coral Shield Marine Logo" className="h-12 w-auto" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="#services" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Services</Link>
            <Link href="/pricing" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Pricing & Process</Link>
            <Link href="#contact" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Contact</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Premium Client Portal Button */}
            <Link href="#" className="flex items-center gap-2 rounded-full bg-navy/5 px-5 py-2.5 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-all duration-300">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Client Portal
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-28 lg:px-8 bg-light pb-20">
        <div className="mx-auto max-w-4xl py-24 sm:py-32 lg:py-40 text-center">
          
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-navy ring-1 ring-navy/20 font-semibold bg-white shadow-sm flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Fully Insured Commercial Divers • Serving Palm Beach County
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-6xl">
            Premium Underwater Hull Cleaning & Marine Defense
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-navy max-w-2xl mx-auto font-medium">
            Restore your vessel's speed and drastically reduce fuel consumption. As an exclusive owner-operator service, only licensed, insured professionals touch your expensive bottom paint.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#contact" className="rounded-md bg-coral px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-teal transition-all duration-300 transform hover:-translate-y-1">
              Book a Dive
            </Link>
            <Link href="/pricing" className="text-base font-bold leading-6 text-navy hover:text-teal flex items-center gap-2 transition-colors">
              View Pricing & Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Communication Flex Banner */}
      <div className="bg-navy py-4 border-y-4 border-coral">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <div className="flex items-center justify-center gap-2 text-white font-medium text-sm">
            <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Live GPS Diver Tracking
          </div>
          <div className="flex items-center justify-center gap-2 text-white font-medium text-sm">
            <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            Automated "En Route" SMS
          </div>
          <div className="flex items-center justify-center gap-2 text-white font-medium text-sm">
            <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            4K Post-Dive Reports
          </div>
        </div>
      </div>

      {/* Trust Banner - Marinas & Associations */}
      <div className="bg-white py-12 border-b border-navy/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-xs font-bold leading-8 text-navy/40 uppercase tracking-widest mb-6">
            Proud Members & Authorized Vendors
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-2">
                <svg className="h-8 w-8 text-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/></svg>
                <span className="font-bold text-navy text-sm leading-tight">Marine Industries<br/>Association</span>
              </div>
            </div>
            <div className="flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="flex items-center gap-2">
                <svg className="h-8 w-8 text-navy" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="font-bold text-navy text-sm leading-tight">Certified<br/>Marine Vendor</span>
              </div>
            </div>
            <div className="flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
               <span className="font-black text-navy text-lg tracking-tighter">PALM HARBOR</span>
            </div>
            <div className="flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
               <span className="font-black text-navy text-lg tracking-widest">LAKE PARK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Services Grid Section */}
      <div className="bg-light py-24 sm:py-32" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal">Premium Defense</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Complete Underwater Asset Protection
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/80">
              We maximize fuel efficiency and protect your running gear. 100% Owner-Operator guaranteed.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  Recurring Hull Maintenance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Starting at <span className="font-bold text-navy">$3.00/ft</span>. We remove heavy waterline rings and marine growth using non-abrasive tools to protect your expensive bottom paint.</p>
                </dd>
              </div>

              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.24-.294.416-.634.52-1.002L15 9l-3-3-2.128.583a2.714 2.714 0 00-1.002.52l-3.053 2.492M11.42 15.17l-3.28 3.28M9 15l-3 3m0 0l-3-3m3 3V9" /></svg>
                  </div>
                  Zinc Anode Replacement
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Protect your bronze propellers and stainless shafts from saltwater corrosion with immediate underwater installation.</p>
                </dd>
              </div>

              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                  </div>
                  Propeller Polishing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Fouled props cause massive fuel loss. We polish bronze running gear to a mirror shine to maximize your RPMs.</p>
                </dd>
              </div>

              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" /></svg>
                  </div>
                  Waterfront Maintenance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Comprehensive barnacle removal for seawalls, dock pilings, and boat lifts to prevent erosion and structural stress.</p>
                </dd>
              </div>

              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>
                  </div>
                  4K Dive Reports
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Every cleaning includes a digital dive report with high-resolution photos of your running gear and exact zinc levels.</p>
                </dd>
              </div>

              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-navy/5">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-navy">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  </div>
                  Emergency Recovery
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-navy/70">
                  <p className="flex-auto">Ran over a trap line? Dropped keys? We offer rapid dispatch for underwater recovery and entanglement removal.</p>
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>

      {/* Visual Proof / Before & After Section */}
      <div className="bg-navy py-24 sm:py-32 border-y-4 border-coral">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-teal">Photographic Proof</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Guess. See the Results.
            </p>
            <p className="mt-6 text-lg leading-8 text-light/80">
              We provide high-resolution post-dive photos after every service so you can visually verify your clean running gear and exact zinc anode depletion levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="h-64 bg-slate-800 relative flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Before</span>
                  <p className="text-white/30 text-sm font-medium">Fouled Propeller</p>
                </div>
                <div className="h-64 bg-slate-700 relative flex items-center justify-center border-l border-white/10">
                  <span className="absolute top-4 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">After</span>
                  <p className="text-white/30 text-sm font-medium">Polished Bronze</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Propeller Polishing</h3>
                <p className="text-light/70 text-sm">Removing hard growth from running gear instantly restores lost RPMs and stops excess fuel burn.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="h-64 bg-slate-800 relative flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Depleted</span>
                  <p className="text-white/30 text-sm font-medium">Corroded Anode</p>
                </div>
                <div className="h-64 bg-slate-700 relative flex items-center justify-center border-l border-white/10">
                  <span className="absolute top-4 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Protected</span>
                  <p className="text-white/30 text-sm font-medium">New Installation</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Zinc Anode Replacement</h3>
                <p className="text-light/70 text-sm">We document your zinc depletion and install fresh anodes to shield your expensive underwater metals from galvanic corrosion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Owner-Operator Guarantee Section */}
      <div className="bg-white py-20 border-b border-navy/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl mb-6">
                The Coral Shield Guarantee: <br/>
                <span className="text-coral">No Subcontractors. Ever.</span>
              </h2>
              <p className="text-lg leading-8 text-navy/80 mb-6 font-medium">
                When you hire massive corporate dive companies, you never know who is jumping in the water. We do things differently in Palm Beach County.
              </p>
              <ul className="space-y-4 text-navy/80">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span><strong>100% Owner-Operated:</strong> The licensed, insured owner of the business is the only diver touching your hull.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span><strong>Photographic Proof:</strong> We provide 4K post-dive photos of your running gear so you never have to guess.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-teal shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span><strong>Fully Insured:</strong> Carrying standard commercial marine liability insurance to satisfy the strictest dockmasters.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl bg-navy overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="mx-auto h-16 w-16 text-teal mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                <p className="text-white font-bold text-lg">Hyper-Local Base</p>
                <p className="text-teal font-medium text-sm mt-2">Rapid Dispatch from Lake Worth, FL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer & Lead Capture Section */}
      <footer className="bg-navy text-white py-16" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Local SEO & Contact Column */}
            <div>
              <div className="mb-8">
                <img src="/logo-white.png" alt="Coral Shield Marine Logo" className="h-14 w-auto" />
              </div>
              <p className="text-light/80 mb-8 max-w-sm leading-relaxed">
                Premium underwater hull cleaning, seawall maintenance, and running gear defense for Palm Beach County's most discerning boat owners.
              </p>
              
              <div className="space-y-4 text-light/90 font-medium mb-10">
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  Lake Worth, FL
                </div>
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <a href="tel:5616797240" className="hover:text-coral transition-colors">(561) 679-7240</a>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:benedicto@coralshieldmarine.com" className="hover:text-coral transition-colors">benedicto@coralshieldmarine.com</a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-white hover:text-coral transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-coral transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Custom Resend Lead Capture Form */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6 text-white">Request a Dive Quote</h3>
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.target;
                    setBtnState({ text: 'Sending...', status: 'loading' });

                    const data = {
                      boat_details: form.boat_details.value,
                      marina_location: form.marina_location.value,
                      client_name: form.client_name.value,
                      client_email: form.client_email.value,
                      phone_number: form.phone_number.value,
                    };

                    try {
                      const response = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                      });

                      if (response.ok) {
                        setBtnState({ text: '✓ Request Sent Successfully', status: 'success' });
                        form.reset();
                      } else {
                        setBtnState({ text: 'Error. Try Again.', status: 'error' });
                      }
                    } catch (error) {
                      setBtnState({ text: 'Error. Try Again.', status: 'error' });
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <input type="text" name="boat_details" required placeholder="Boat Length & Make (e.g., 40' Sea Ray)" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <input type="text" name="marina_location" required placeholder="Marina Name or Slip Number" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="client_name" required placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all" />
                    <input type="email" name="client_email" required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <input type="tel" name="phone_number" required placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all" />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={btnState.status === 'loading' || btnState.status === 'success'}
                    className={`w-full font-bold py-4 px-4 rounded-lg mt-4 shadow-lg transition-all duration-300 transform ${
                      btnState.status === 'success' 
                        ? 'bg-green-500 text-white cursor-default' 
                        : 'bg-coral hover:bg-teal text-white hover:-translate-y-1'
                    }`}
                  >
                    {btnState.text}
                  </button>
                </form>
              </div>

              {/* Dockmaster Bulk Request Trigger */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-light/70 mb-3">Managing an entire marina or yacht club?</p>
                <a 
                  href="mailto:benedicto@coralshieldmarine.com?subject=Dockmaster Bulk Quote Request" 
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-teal text-teal px-6 py-2.5 text-sm font-bold hover:bg-teal hover:text-white transition-all duration-300 w-full"
                >
                  Request Bulk Marina Fleet Quote
                </a>
              </div>

            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm font-medium text-light/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Coral Shield Marine LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
            </div>
            <p>Fully Insured Commercial Divers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}