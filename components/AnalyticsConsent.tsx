"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "tht_analytics_consent_v1";
const OPEN_SETTINGS_EVENT = "tht:open-cookie-settings";

type AnalyticsConsentValue = "granted" | "denied";
type GoogleConsentCommand = (
  command: "consent",
  action: "update",
  parameters: {
    analytics_storage: AnalyticsConsentValue;
    ad_storage: "denied";
    ad_user_data: "denied";
    ad_personalization: "denied";
  },
) => void;

function updateGoogleConsent(analyticsStorage: AnalyticsConsentValue) {
  const consentWindow = window as Window & { gtag?: GoogleConsentCommand };

  consentWindow.gtag?.("consent", "update", {
    analytics_storage: analyticsStorage,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function openAnalyticsConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export default function AnalyticsConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initialPreferenceCheck = window.setTimeout(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      setIsOpen(savedConsent !== "granted" && savedConsent !== "denied");
    }, 0);

    const openSettings = () => setIsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);

    return () => {
      window.clearTimeout(initialPreferenceCheck);
      window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
    };
  }, []);

  function saveConsent(value: AnalyticsConsentValue) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    updateGoogleConsent(value);
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <section
      aria-label="Analytics cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-[#d8d2c3] bg-[#f7f5ef] p-5 text-[#263126] shadow-[0_18px_60px_rgba(28,36,29,0.22)] sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-7 sm:p-6"
      role="dialog"
    >
      <div className="min-w-0 flex-1">
        <p className="text-sm leading-6">
          We use analytics cookies to understand how visitors use our website and improve our
          services.
        </p>
        <Link
          className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.12em] underline decoration-[#8b9186] underline-offset-4 hover:text-[#596450]"
          href="/privacy"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-0 sm:flex sm:shrink-0">
        <button
          className="min-h-11 border border-[#596450] px-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-[#e9e5da]"
          onClick={() => saveConsent("denied")}
          type="button"
        >
          Reject
        </button>
        <button
          className="min-h-11 bg-[#263126] px-4 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#3b493b]"
          onClick={() => saveConsent("granted")}
          type="button"
        >
          Accept analytics
        </button>
      </div>
    </section>
  );
}
