import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions | Tuscany Horse Trekking",
  description: "Terms and conditions for bookings made through Tuscany Horse Trekking.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#263126]">
      <SiteHeader bookHref="/experiences/horseback-riding#booking" />

      <main>
        <section className="border-b border-[#d8d4c8] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              Legal information
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.035em] sm:text-7xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5e645a]">
              These terms and conditions apply to bookings made through Tuscany Horse
              Trekking.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="space-y-12">
            <section>
              <h2 className="font-serif text-3xl">1. About Tuscany Horse Trekking</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Tuscany Horse Trekking is the brand used to present and market the
                experiences available through this website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">2. Booking management</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Bookings and customer service through this website are managed by
                TodoInTheWorld Limited, Ireland.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">3. Activity providers</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Experiences may be delivered by selected local activity providers. The
                identity of the provider delivering an experience may be communicated in
                the booking documentation when necessary.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">4. Booking and payment</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-[#5e645a]">
                <li>
                  Availability and prices displayed in the booking system are those
                  applicable at the time of booking.
                </li>
                <li>Payment is managed through the online booking system.</li>
                <li>
                  A booking is confirmed according to the information set out in the
                  confirmation received by the customer.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl">5. Cancellations and changes</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                The cancellation and amendment conditions applicable to each experience
                are displayed during the booking process and/or in the booking
                confirmation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">6. Customer responsibilities</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">Customers are responsible for:</p>
              <ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-[#5e645a]">
                <li>following the instructions provided by guides and activity providers;</li>
                <li>providing accurate information during the booking process; and</li>
                <li>complying with any requirements communicated during booking.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl">7. Safety</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Activities involving animals and outdoor activities carry inherent risks.
                Participants must follow the safety instructions provided by the activity
                provider and its guides.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">
                8. Changes caused by weather or operational conditions
              </h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                Some activities may be changed, postponed or cancelled because of weather
                conditions, safety considerations, animal welfare or other operational
                requirements. Any available options will be communicated in relation to
                the affected booking.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-3xl">9. Contact</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                For booking or customer service enquiries, please use the contact section
                on the Tuscany Horse Trekking website.
              </p>
              <Link
                className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.17em] underline-offset-4 hover:underline"
                href="/#contact"
              >
                Contact us
              </Link>
            </section>

            <section>
              <h2 className="font-serif text-3xl">10. Governing terms</h2>
              <p className="mt-4 leading-7 text-[#5e645a]">
                No governing law or jurisdiction is specified in these terms at this time.
              </p>
              {/* TODO: Complete governing law and jurisdiction after legal review. */}
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
