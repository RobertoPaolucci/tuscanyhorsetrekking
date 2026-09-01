import type { Metadata } from "next";
import Script from "next/script";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const GTM_CONTAINER_ID = "GTM-MG6Z42D4";

const googleConsentInitialization = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
});
try {
  if (localStorage.getItem('tht_analytics_consent_v1') === 'granted') {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  }
} catch (error) {}
`;

const googleTagManagerInitialization = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://tuscanyhorsetrekking.it"),
  title: "Tuscany Horse Trekking | Horseback Riding in Tuscany",
  description:
    "Authentic horseback riding experiences in the Tuscan countryside near Montepulciano.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <Script
          dangerouslySetInnerHTML={{ __html: googleConsentInitialization }}
          id="google-consent-mode"
          strategy="beforeInteractive"
        />
        <Script
          dangerouslySetInnerHTML={{ __html: googleTagManagerInitialization }}
          id="google-tag-manager"
          strategy="beforeInteractive"
        />
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            aria-hidden="true"
            height="0"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
            width="0"
          />
        </noscript>
        {children}
        <BackToTop />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
