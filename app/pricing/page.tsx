import React from 'react';

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation Bar */}
      <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Coral Shield Marine</span>
              <img src="/logo.png" alt="Coral Shield Marine Logo" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/#services" className="text-sm font-semibold leading-6 text-navy hover:text-teal transition-colors">Services</a>
            <a href="/pricing" className="text-sm font-bold leading-6 text-coral">Pricing & Process</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/#contact" className="text-sm font-bold leading-6 text-navy hover:text-teal transition-colors">
              Book a Dive <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Pricing Hero */}
      <div className="relative isolate px-6 pt-32 lg:px-8 bg-light pb-16 border-b border-navy/10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Transparent, Premium Pricing
          </h1>
          <p className="mt-6 text-lg leading-8 text-navy/80 font-medium">
            No hidden fees, no subcontracting shortcuts. You pay for absolute precision, restored fuel efficiency, and 100% owner-operator accountability.
          </p>
        </div>
      </div>

      {/* Pricing Tables Section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Hull Cleaning Rates */}
            <div className="bg-navy rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border-t-4 border-coral">
              <h3 className="text-2xl font-bold text-white mb-2">Hull & Running Gear</h3>
              <p className="text-light/70 text-sm mb-8">Billed per linear foot. Includes waterline, hull, shafts, props, and trim tabs.</p>
              
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <div>
                    <p className="text-lg font-bold text-white">Standard Maintenance</p>
                    <p className="text-sm text-teal mt-1">3 to 4 week recurring schedule</p>
                  </div>
                  <p className="text-2xl font-black text-white">$3.00<span className="text-sm font-normal text-light/60">/ft</span></p>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <div>
                    <p className="text-lg font-bold text-white">Heavy Growth / Initial Clean</p>
                    <p className="text-sm text-coral mt-1">Neglected hulls & heavy barnacles</p>
                  </div>
                  <p className="text-2xl font-black text-white">$5.00<span className="text-sm font-normal text-light/60">/ft</span></p>
                </li>
              </ul>
            </div>

            {/* Hardware & Emergency Rates */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-navy mb-2">Zincs & Emergency Services</h3>
              <p className="text-navy/60 text-sm mb-8">Asset protection and rapid Lake Worth dispatch.</p>
              
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-navy/5 pb-6">
                  <div>
                    <p className="text-lg font-bold text-navy">Zinc Anode Part</p>
                    <p className="text-sm text-navy/60 mt-1">Premium mil-spec anodes</p>
                  </div>
                  <p className="text-xl font-bold text-navy">$35.00<span className="text-sm font-normal text-navy/60">/ea</span></p>
                </li>
                <li className="flex justify-between items-center border-b border-navy/5 pb-6">
                  <div>
                    <p className="text-lg font-bold text-navy">Underwater Installation</p>
                    <p className="text-sm text-navy/60 mt-1">Labor fee per zinc replaced</p>
                  </div>
                  <p className="text-xl font-bold text-navy">$25.00<span className="text-sm font-normal text-navy/60">/ea</span></p>
                </li>
                <li className="flex justify-between items-center border-b border-navy/5 pb-6">
                  <div>
                    <p className="text-lg font-bold text-navy">Emergency Recovery</p>
                    <p className="text-sm text-navy/60 mt-1">Dropped items or prop entanglements</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-navy">$150 - $300</p>
                    <p className="text-xs text-coral mt-1">Flat Dispatch Fee</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The 4-Step Process */}
      <div className="bg-light py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-teal">Our Methodology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              The Owner-Operator Standard
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-navy/5">
              <div className="h-12 w-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-xl mb-6">1</div>
              <h4 className="text-lg font-bold text-navy mb-2">Pre-Dive Inspection</h4>
              <p className="text-sm text-navy/70 leading-relaxed">We assess your hull coating condition before touching the paint to ensure zero damage to fragile anti-fouling layers.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-navy/5">
              <div className="h-12 w-12 rounded-full bg-teal text-white flex items-center justify-center font-black text-xl mb-6">2</div>
              <h4 className="text-lg font-bold text-navy mb-2">Gentle Abrasion</h4>
              <p className="text-sm text-navy/70 leading-relaxed">We use soft pads for fiberglass slime and reserve rigid metal scrapers strictly for the bronze propellers and shafts.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-navy/5">
              <div className="h-12 w-12 rounded-full bg-coral text-white flex items-center justify-center font-black text-xl mb-6">3</div>
              <h4 className="text-lg font-bold text-navy mb-2">Zinc Assessment</h4>
              <p className="text-sm text-navy/70 leading-relaxed">Running gear anodes are meticulously checked. If they are 50% depleted, we replace them immediately.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-navy/5">
              <div className="h-12 w-12 rounded-full bg-navy text-white flex items-center justify-center font-black text-xl mb-6">4</div>
              <h4 className="text-lg font-bold text-navy mb-2">Photo Reporting</h4>
              <p className="text-sm text-navy/70 leading-relaxed">You receive high-resolution post-dive photos of your clean running gear and zinc levels so you never have to guess.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="/#contact" className="inline-block rounded-md bg-coral px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-teal transition-all duration-300 transform hover:-translate-y-1">
              Request Your Dive Quote Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}