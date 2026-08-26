import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BokunExperienceWidget from "@/components/BokunExperienceWidget";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Horseback Riding in Tuscany | Tuscany Horse Trekking",
  description:
    "Discover horseback riding in the Tuscan countryside near Montepulciano and experience Tuscany from the saddle.",
};

const relatedExperiences = [
  {
    title: "Farm Animal Visit, Ricotta Making & Tasting",
    image: "/images/farm-animal-visit-ricotta-making-tasting.jpg",
    imageAlt: "Children visiting the animals at our farm in Tuscany",
    href: "/#experiences",
  },
  {
    title: "Pici Cooking Class & Dinner",
    image: "/images/pici-cooking-class-dinner.jpg",
    imageAlt: "Freshly prepared pici pasta in a Tuscan kitchen",
    href: "/#experiences",
  },
  {
    title: "Farm Visit & First Saddle Experience",
    image: "/images/farm-visit-first-saddle-experience.jpg",
    imageAlt: "Children with donkeys during an experience at our farm in Tuscany",
    href: "/#experiences",
  },
  {
    title: "Horse-Drawn Carriage Ride in Montepulciano",
    image: "/images/horse-drawn-carriage-ride-montepulciano.jpg",
    imageAlt: "Horse-drawn carriage in the countryside near Montepulciano",
    href: "/#experiences",
  },
  {
    title: "Traditional Ox Cart Ride",
    image: "/images/traditional-ox-cart-ride.jpg",
    imageAlt: "Traditional ox cart travelling through the Tuscan countryside",
    href: "/#experiences",
  },
  {
    title: "Walk with Goats or Donkeys",
    image: "/images/walk-with-goats-or-donkeys.jpg",
    imageAlt: "Guests walking with goats through the countryside",
    href: "/experiences/walk-with-goats-or-donkeys",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function HorsebackRidingPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-[#263126]">
      <SiteHeader bookHref="#booking" overlay />

      <main id="top">
        <section
          aria-label="Horseback riding in the Tuscan countryside"
          className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#596450] text-white"
        >
          <Image
            alt="Riders on horseback among vineyards in the Tuscan countryside"
            className="object-cover object-[58%_center] sm:object-center"
            fill
            priority
            sizes="100vw"
            src="/images/hero-horseback-tuscany.jpg"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/30" />

          <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-8 lg:pb-24">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#e4dec9]">
              Montepulciano · Tuscany
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[6.2rem]">
              Horseback Riding
              <br />
              in Tuscany
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Discover the countryside around Montepulciano on horseback, riding through
              the rural landscape, vineyards and trails of Tuscany.
            </p>
            <a
              className="mt-9 inline-flex min-h-13 items-center justify-center gap-4 bg-[#eee9dc] px-7 text-xs font-semibold tracking-[0.18em] text-[#263126] transition-colors hover:bg-white"
              href="#booking"
            >
              BOOK NOW <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              From the saddle
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.025em] sm:text-5xl">
                Horseback riding near Montepulciano
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5e645a]">
                Explore the Tuscan countryside on horseback along rural trails near
                Montepulciano. Experience vineyards, rolling landscapes and the natural
                rhythm of Tuscany from the saddle.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#263126] px-4 py-10 text-white sm:px-8 sm:py-14 lg:px-12 lg:py-16"
          id="booking"
        >
          <div className="mx-auto max-w-6xl">
            <BokunExperienceWidget
              bookingChannelUUID="c70f696b-c288-45b6-8e6e-d537e0c7b108"
              className="min-h-[36rem] w-full border border-[#d8d4c8] bg-[#fbfaf6] p-3 text-left text-[#263126] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:min-h-[40rem] sm:p-6 lg:p-8"
              experienceId="958091"
            />
          </div>
        </section>

        <section className="bg-[#f7f5ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 border-b border-[#cbc6b8] pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
                At Tuscany Horse Trekking
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                Explore more experiences
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {relatedExperiences.map((experience, index) => (
                <article
                  className={`border-b border-[#cbc6b8] py-9 sm:px-7 sm:py-10 sm:odd:border-r lg:border-r lg:px-8 ${
                    (index + 1) % 3 === 0 ? "lg:border-r-0" : ""
                  }`}
                  key={experience.title}
                >
                  <Link
                    aria-label={`Discover ${experience.title}`}
                    className="block"
                    href={experience.href}
                  >
                    <figure className="relative mb-8 aspect-[16/9] overflow-hidden bg-[#e5e1d6]">
                      <Image
                        alt={experience.imageAlt}
                        className="object-cover object-center"
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                        src={experience.image}
                      />
                    </figure>
                  </Link>
                  <h3 className="font-serif text-2xl leading-tight">{experience.title}</h3>
                  <Link
                    aria-label={`Discover ${experience.title}`}
                    className="mt-7 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em]"
                    href={experience.href}
                  >
                    Discover <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
