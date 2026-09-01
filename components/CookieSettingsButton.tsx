"use client";

import { openAnalyticsConsentSettings } from "@/components/AnalyticsConsent";

export default function CookieSettingsButton() {
  return (
    <button
      className="transition-colors hover:text-white"
      onClick={openAnalyticsConsentSettings}
      type="button"
    >
      Cookie settings
    </button>
  );
}
