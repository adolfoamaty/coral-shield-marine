"use client";
import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user already accepted cookies
    const consent = localStorage.getItem('coral_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('coral_cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 pb-4 sm:pb-5 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-navy p-4 shadow-2xl border border-teal/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex-1">
              <p className="font-medium text-white text-sm text-center sm:text-left leading-relaxed">
                We use strictly necessary cookies to ensure our website functions securely. By continuing, you agree to our <a href="/privacy" className="underline text-teal hover:text-coral transition-colors">Privacy Policy</a>.
              </p>
            </div>
            
            <div className="w-full sm:w-auto flex-shrink-0">
              <button
                onClick={acceptCookies}
                className="w-full sm:w-auto flex items-center justify-center rounded-lg bg-coral px-8 py-2.5 text-sm font-bold text-white hover:bg-teal transition-all shadow-md"
              >
                Got it
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}