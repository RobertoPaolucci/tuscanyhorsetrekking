import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Tuscany Horse Trekking",
  description: "Privacy information for users of the Tuscany Horse Trekking website.",
};

const navItems = [
  { label: "Experiences", href: "/#experiences" },
  { label: "Contact", href: "/#contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#263126]">
      <header className="border-b border-[#d8d4c8] bg-[#263126] text-white">
        <div className="mx-auto flex min-h-20 max-w-[1440px] flex-col justify-center gap-5 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:min-h-24 lg:px-12">
          <Link className="font-serif text-lg tracking-wide sm:text-xl" href="/">
            Tuscany Horse Trekking
          </Link>
          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium uppercase tracking-[0.14em] sm:gap-x-8"
          >
            {navItems.map((item) => (
              <Link
                className="transition-opacity hover:opacity-65"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-[#d8d4c8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              Legal information
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.035em] sm:text-7xl">
              Privacy Policy
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e645a]">
              This policy explains how personal data submitted through Tuscany Horse
              Trekking is managed and used.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl">1. Who manages your data</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Personal data submitted through Tuscany Horse Trekking is managed by
                TodoInTheWorld Limited, Ireland.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">2. Data we may collect</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Depending on how you use the website, we may collect:
              </p>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-[#5e645a]">
                <li>name;</li>
                <li>email address;</li>
                <li>telephone or WhatsApp number, if provided;</li>
                <li>selected experience;</li>
                <li>message content;</li>
                <li>booking information; and</li>
                <li>technical website information, where applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl">3. Why we use the data</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">We may use personal data to:</p>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-[#5e645a]">
                <li>respond to enquiries;</li>
                <li>process and manage bookings;</li>
                <li>provide customer service;</li>
                <li>fulfil legal and accounting obligations, where applicable; and</li>
                <li>support website security and operation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl">4. Booking services</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                This website may use external services necessary to manage bookings and
                payments, including Bókun and relevant payment providers. Those services
                may process the information required to provide their functions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">5. Activity providers</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Personal data that is strictly necessary to deliver an experience may be
                shared with the selected local activity provider responsible for that
                experience.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">6. Data retention</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                We retain personal data only for as long as necessary for the purposes for
                which it was collected and to meet applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">7. User rights</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Subject to applicable data protection law, you may have rights to be
                informed about the processing of your personal data and to request access,
                correction, erasure or restriction of processing. Where applicable, you
                may also have rights to data portability, to object to processing, to
                withdraw consent and to lodge a complaint with a competent data protection
                authority.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">8. Contact</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                To exercise your rights or ask a question about privacy, please use the
                contact section on the Tuscany Horse Trekking website.
              </p>
              <Link
                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.17em] underline-offset-4 hover:underline"
                href="/#contact"
              >
                Contact us
              </Link>
            </section>

            <section>
              <h2 className="font-serif text-3xl">9. Cookies</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                A separate cookie policy and consent management solution may be implemented
                if and when this website uses cookies or similar technologies that require
                consent.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
