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
    <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-navy p-2 shadow-xl sm:p-3 border border-teal/20">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <p className="ml-3 truncate font-medium text-white text-sm">
                We use strictly necessary cookies to ensure our website functions securely. By continuing, you agree to our <a href="/privacy" className="underline text-teal hover:text-coral">Privacy Policy</a>.
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <button
                onClick={acceptCookies}
                className="flex items-center justify-center rounded-md border border-transparent bg-coral px-4 py-2 text-sm font-bold text-white hover:bg-teal transition-colors"
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
