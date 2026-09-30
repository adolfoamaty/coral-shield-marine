import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="bg-white min-h-screen py-16 px-6 lg:px-8 font-sans text-navy" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <div className="max-w-3xl mx-auto prose prose-navy">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">When you request a dive quote, we collect your name, phone number, email address, boat details, and marina location. We use this information solely to provide accurate estimates and schedule underwater maintenance services.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">Your data is used exclusively for internal business operations, customer communication, and service fulfillment. We do not sell, rent, or share your personal information with third-party marketers.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security & Third Parties</h2>
        <p className="mb-4">Lead submissions are processed securely. We use third-party tools (Resend) strictly to route your contact requests to our business inbox. We take reasonable precautions to protect your information from unauthorized access.</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
        <p className="mb-4">If you have any questions about this policy, please contact us at: benedicto@coralshieldmarine.com or (561) 679-7240.</p>
        
        <div className="mt-12">
          <Link href="/" className="text-coral font-bold hover:text-teal">← Back to Home</Link>
        </div>
      </div>
      </main>
    </>
  );
}