"use client";
import React, { useState } from 'react';

export default function Home() {
  const [btnState, setBtnState] = useState({ text: 'Send Request', status: 'idle' });
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <img src="/logo.png" alt="Coral Shield Marine Logo" className="h-10 w-auto" />
              {/* You will replace this text with your actual logo image later */}
              <div className="text-2xl font-black tracking-tight text-navy">
                <span className="text-coral">CORAL</span> SHIELD
              </div>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Services</a>
            <a href="#" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Our Process</a>
            <a href="#" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Service Area</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-bold leading-6 text-navy hover:text-teal transition-colors">
              Dockmaster Portal <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-24 lg:px-8 bg-light pb-20">
        <div className="mx-auto max-w-4xl py-32 sm:py-40 lg:py-48 text-center">
          
          {/* Trust Badge / Credentials */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-navy ring-1 ring-navy/20 hover:ring-navy/40 font-semibold bg-white shadow-sm">
              Fully Insured Commercial Divers • Serving Palm Beach County
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-6xl">
            Premium Underwater Hull Cleaning & Marine Defense
          </h1>
          
          {/* Subheadline focusing on ROI & Owner-Operator */}
          <p className="mt-6 text-lg leading-8 text-navy max-w-2xl mx-auto font-medium">
            Restore your vessel's speed and drastically reduce fuel consumption. 
            As an exclusive owner-operator service, only licensed, insured professionals 
            touch your expensive bottom paint. No subcontractors.
          </p>
          
          {/* Call to Actions using the brand colors */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-coral px-8 py-3.5 text-base font-bold text-white shadow-md hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral transition-all duration-300 transform hover:-translate-y-1"
            >
              Book a Dive
            </a>
            <a href="#" className="text-base font-bold leading-6 text-navy hover:text-teal flex items-center gap-2 transition-colors">
              View Pricing & Services <span aria-hidden="true">→</span>
            </a>
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
            {/* Before / After Card 1 */}
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="h-64 bg-slate-800 relative flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Before</span>
                  {/* Replace with your dirty prop image */}
                  <p className="text-white/30 text-sm font-medium">Fouled Propeller</p>
                </div>
                <div className="h-64 bg-slate-700 relative flex items-center justify-center border-l border-white/10">
                  <span className="absolute top-4 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">After</span>
                  {/* Replace with your polished bronze prop image */}
                  <p className="text-white/30 text-sm font-medium">Polished Bronze</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">Propeller Polishing</h3>
                <p className="text-light/70 text-sm">Removing hard growth from running gear instantly restores lost RPMs and stops excess fuel burn.</p>
              </div>
            </div>

            {/* Before / After Card 2 */}
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2">
                <div className="h-64 bg-slate-800 relative flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Depleted</span>
                  {/* Replace with your corroded zinc image */}
                  <p className="text-white/30 text-sm font-medium">Corroded Anode</p>
                </div>
                <div className="h-64 bg-slate-700 relative flex items-center justify-center border-l border-white/10">
                  <span className="absolute top-4 left-4 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">Protected</span>
                  {/* Replace with your new zinc image */}
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
      {/* Quick Visual Proof / Services Banner */}
      <div className="bg-navy py-12 border-t-4 border-coral">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col sm:flex-row justify-around gap-8">
          <div>
            <h3 className="text-white font-bold text-xl">Hull Cleaning</h3>
            <p className="text-teal font-medium text-sm mt-1">Maximized Fuel ROI</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Zinc Replacement</h3>
            <p className="text-teal font-medium text-sm mt-1">Corrosion Defense</p>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">Propeller Polishing</h3>
            <p className="text-teal font-medium text-sm mt-1">Restored RPMs</p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-white py-24 sm:py-32" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal">Premium Defense</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Complete Underwater Asset Protection
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/80">
              We don't just scrub boats; we maximize your vessel's fuel efficiency and protect your running gear from catastrophic galvanic corrosion. 100% Owner-Operator guaranteed.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              
              {/* Service 1 */}
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-navy">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-coral shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Recurring Hull Maintenance
                </dt>
                <dd className="mt-2 text-base leading-7 text-navy/70">
                  Starting at <span className="font-bold text-navy">$3.00/ft</span>. We remove heavy waterline rings and marine growth using non-abrasive tools to protect your expensive bottom paint and restore top speed.
                </dd>
              </div>

              {/* Service 2 */}
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-navy">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.053c.24-.294.416-.634.52-1.002L15 9l-3-3-2.128.583a2.714 2.714 0 00-1.002.52l-3.053 2.492M11.42 15.17l-3.28 3.28M9 15l-3 3m0 0l-3-3m3 3V9" />
                    </svg>
                  </div>
                  Zinc Anode Replacement
                </dt>
                <dd className="mt-2 text-base leading-7 text-navy/70">
                  Protect your bronze propellers and stainless shafts from saltwater corrosion. We carry a full inventory of shaft, collar, and trim-tab zincs for immediate underwater installation.
                </dd>
              </div>

              {/* Service 3 */}
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-navy">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  Propeller Polishing
                </dt>
                <dd className="mt-2 text-base leading-7 text-navy/70">
                  Fouled props cause massive fuel loss. We polish bronze running gear to a mirror shine to maximize your RPMs and increase fuel efficiency.
                </dd>
              </div>

              {/* Service 4 */}
              <div className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-navy">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-coral shadow-sm">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  Entanglement & Emergency Recovery
                </dt>
                <dd className="mt-2 text-base leading-7 text-navy/70">
                  Ran over a crab trap line? Dropped keys off the dock? As a locally based Lake Worth operation, we offer rapid dispatch for underwater recovery and entanglement removal.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Footer & Lead Capture Section */}
      <footer className="bg-navy text-white py-16 mt-20" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Local SEO & Contact Column */}
            <div>
              <div className="text-2xl font-black tracking-tight text-white mb-6">
                <span className="text-coral">CORAL</span> SHIELD <span className="text-teal font-medium text-lg ml-2">MARINE</span>
              </div>
              <p className="text-light/80 mb-8 max-w-sm leading-relaxed">
                Premium underwater hull cleaning, zinc replacement, and running gear defense for Palm Beach County's most discerning boat owners. 100% Owner-Operator.
              </p>
              
              <div className="space-y-4 text-light/90 font-medium">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  Lake Worth, FL (Serving Palm Beach County)
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/20">
                    <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <a href="tel:5616797240" className="hover:text-coral transition-colors">(561) 679-7240</a>
                </div>
              </div>
            </div>

            {/* Quick Lead Capture Form */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl">
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
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm font-medium text-light/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Coral Shield Marine LLC. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-teal transition-colors">Terms of Service</a>
            </div>
            <p>Fully Insured Commercial Divers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}