import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-white min-h-screen py-16 px-6 lg:px-8 font-sans text-navy" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <div className="max-w-3xl mx-auto prose prose-navy">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing coralshieldmarine.com, you agree to these Terms of Service. If you do not agree, please do not use our website.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Estimates</h2>
        <p className="mb-4">Quotes provided via our online form are estimates based on the information provided (boat length and location). Final pricing is subject to on-site visual inspection of the hull condition and running gear before diving commences.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitation of Liability</h2>
        <p className="mb-4">Coral Shield Marine LLC provides this website &quot;as is&quot;. We are not liable for any damages arising from your use of this website. Specific service liabilities, warranties, and insurance coverages regarding underwater hull cleaning will be outlined in your direct service agreement prior to maintenance.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Governing Law</h2>
        <p className="mb-4">These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in Palm Beach County.</p>
        
        <div className="mt-12">
          <Link href="/" className="text-coral font-bold hover:text-teal">← Back to Home</Link>
        </div>
      </div>
      </main>
    </>
  );
}