import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const title = "Tuscany Horse Trekking | Horseback Riding in Tuscany";
const description =
  "Authentic horseback riding experiences in the Tuscan countryside near Montepulciano.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Tuscany Horse Trekking",
    type: "website",
    images: [
      {
        url: "/images/hero-horseback-tuscany.jpg",
        alt: "Riders on horseback among vineyards in the Tuscan countryside",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-horseback-tuscany.jpg"],
  },
};

const experiences = [
  {
    number: "01",
    title: "Horseback Riding in Tuscany",
    description:
      "Discover the Tuscan countryside from the saddle, surrounded by the landscape near Montepulciano.",
    image: "/images/horseback-sunset-tuscany.jpg",
    imageAlt: "A group riding horses through the Tuscan countryside at sunset",
  },
  {
    number: "02",
    title: "Farm Animal Visit, Ricotta Making & Tasting",
    description: "Meet the farm animals and discover a traditional part of rural life.",
    image: "/images/farm-animal-visit-ricotta-making-tasting.jpg",
    imageAlt: "Children visiting the animals at our farm in Tuscany",
  },
  {
    number: "03",
    title: "Pici Cooking Class & Dinner",
    description: "Prepare a Tuscan pasta tradition and share dinner at our farm.",
    image: "/images/pici-cooking-class-dinner.jpg",
    imageAlt: "Freshly prepared pici pasta in a Tuscan kitchen",
  },
  {
    number: "04",
    title: "Farm Visit & First Saddle Experience",
    description: "An introduction to the farm and a first experience in the saddle.",
    image: "/images/farm-visit-first-saddle-experience.jpg",
    imageAlt: "Children with donkeys during an experience at our farm in Tuscany",
  },
  {
    number: "05",
    title: "Horse-Drawn Carriage Ride in Montepulciano",
    description: "See Montepulciano from the considered pace of a horse-drawn carriage.",
    image: "/images/horse-drawn-carriage-ride-montepulciano.jpg",
    imageAlt: "Horse-drawn carriage travelling through the countryside near Montepulciano",
  },
  {
    number: "06",
    title: "Traditional Ox Cart Ride",
    description: "Encounter the countryside through a traditional form of rural travel.",
    image: "/images/traditional-ox-cart-ride.jpg",
    imageAlt: "Traditional ox cart travelling through the Tuscan countryside",
  },
  {
    number: "07",
    title: "Walk with Goats or Donkeys",
    description: "Walk through the rural surroundings in the company of farm animals.",
    image: "/images/walk-with-goats-or-donkeys.jpg",
    imageAlt: "Guests walking with goats through the countryside",
  },
];

const faqs = [
  {
    question: "Where are the experiences located?",
    answer:
      "Our experiences take place in the Tuscan countryside near Montepulciano. The exact meeting point and practical directions are provided with your booking confirmation.",
  },
  {
    question: "How can I book an experience?",
    answer:
      "You can book directly online from the page of each experience. Availability and current prices are shown in the booking system.",
  },
  {
    question: "Who manages my booking?",
    answer:
      "Bookings and customer service through Tuscany Horse Trekking are managed by TodoInTheWorld Limited, Ireland. Individual experiences may be delivered by selected local activity providers.",
  },
  {
    question: "Do I need previous horse riding experience?",
    answer:
      "No specific level of riding experience is required in advance. At the beginning of the experience, the guide assesses each participant’s riding ability, confidence and control, and assigns the most suitable horse and position within the group. The guide also decides how the ride should be organised, including pace and level of independence, according to the riders, the horses and the conditions on the day. For safety and animal welfare, the guide’s instructions and decisions must always be followed.",
  },
  {
    question: "Who decides which horse I will ride?",
    answer:
      "The guide assigns each horse after assessing the rider’s experience, confidence, physical characteristics and the group as a whole. Horse assignment cannot be guaranteed in advance, as the priority is always a safe and appropriate match between rider and horse.",
  },
  {
    question: "Can experienced riders ride faster?",
    answer:
      "The pace of the ride is decided by the guide according to the ability of the participants, the horses, trail conditions and safety considerations. Previous riding experience does not automatically guarantee a faster pace or independent riding.",
  },
  {
    question: "Can children take part?",
    answer:
      "Some experiences are designed specifically for families and children, while others may have age or participation requirements. Please check the booking information for the experience you are interested in.",
  },
  {
    question: "What should I wear?",
    answer:
      "For outdoor and animal experiences, we recommend comfortable clothing and closed-toe shoes suitable for the countryside. Any specific requirements are shown during the booking process.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Outdoor experiences may be affected by weather, trail conditions, safety considerations or animal welfare. If an experience needs to be changed, postponed or cancelled, you will be contacted with the available options.",
  },
  {
    question: "Are the animals well cared for?",
    answer:
      "Animal welfare is an essential part of our experiences. Activities are organised with respect for the animals, their wellbeing and the conditions of the day.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Cancellation and amendment conditions may vary depending on the experience. The applicable conditions are displayed during the booking process and in your booking confirmation.",
  },
  {
    question: "Can I contact you before booking?",
    answer:
      "Yes. If you have questions about an experience, use the contact form on this website and our customer service team will assist you.",
  },
  {
    question: "Can I book for a group or family?",
    answer:
      "Group capacity varies depending on the experience and availability. Enter the number of participants in the booking system to see the available options.",
  },
  {
    question: "Are prices the same as on other booking websites?",
    answer:
      "Prices shown on Tuscany Horse Trekking are the prices available for direct bookings through this website and may differ from prices offered through other sales channels.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-[#263126]">
      <SiteHeader bookHref="/experiences/horseback-riding#booking" isHome overlay />

      <main id="top">
        <section
          aria-label="Horseback riding in the Tuscan countryside"
          className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#596450] text-white"
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
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[6.2rem]">
              Horseback Riding
              <br />
              in Tuscany
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Discover the countryside near Montepulciano from a different perspective,
              moving through the Tuscan landscape on horseback.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-13 items-center justify-center gap-4 bg-[#eee9dc] px-7 text-xs font-semibold tracking-[0.18em] text-[#263126] transition-colors hover:bg-white"
                href="/experiences/horseback-riding#booking"
              >
                BOOK NOW <ArrowIcon />
              </a>
              <a
                className="inline-flex min-h-13 items-center justify-center border border-white/60 px-7 text-xs font-semibold tracking-[0.12em] transition-colors hover:bg-white hover:text-[#263126]"
                href="#experiences"
              >
                Discover the experience
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40" id="about">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              A slower way to see Tuscany
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.025em] text-[#263126] sm:text-6xl">
                The countryside,
                <br />
                seen from the saddle.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5e645a]">
                Horse riding offers an authentic way to meet the Tuscan landscape: at a
                natural pace, close to the land, and away from the usual routes. Tuscany
                Horse Trekking welcomes you to experience the countryside around
                Montepulciano with presence and simplicity.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8d4c8] bg-[#eeece4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12" id="experiences">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 border-b border-[#cbc6b8] pb-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
                At Tuscany Horse Trekking
              </p>
              <div>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                  Our Experiences
                </h2>
                <p className="mt-6 max-w-2xl leading-7 text-[#62675e]">
                  Discover horseback riding and other ways to experience rural life and
                  the equestrian traditions of Tuscany.
                </p>
              </div>
            </div>

            <article className="grid gap-8 border-b border-[#cbc6b8] py-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Link
                aria-label="Discover Horseback Riding in Tuscany"
                href="/experiences/horseback-riding"
              >
                <figure className="relative aspect-[4/5] overflow-hidden bg-[#b7b49f] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <Image
                    alt="A group riding horses through the Tuscan countryside at sunset"
                    className="object-cover object-center"
                    fill
                    sizes="(min-width: 1024px) 58vw, (min-width: 640px) 90vw, 100vw"
                    src="/images/horseback-sunset-tuscany.jpg"
                  />
                </figure>
              </Link>
              <div className="flex flex-col justify-end pb-1">
                <span className="font-serif text-sm italic text-[#8a8068]">
                  {experiences[0].number}
                </span>
                <h3 className="mt-6 max-w-lg font-serif text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl">
                  {experiences[0].title}
                </h3>
                <p className="mt-5 max-w-md text-base leading-8 text-[#62675e]">
                  {experiences[0].description}
                </p>
                <Link
                  className="mt-8 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#263126]"
                  href="/experiences/horseback-riding"
                >
                  Discover <ArrowIcon />
                </Link>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {experiences.slice(1).map((experience, index) => (
                <article
                  className={`flex min-h-80 flex-col border-b border-[#cbc6b8] py-9 sm:min-h-96 sm:px-7 sm:py-10 sm:odd:border-r lg:min-h-[26rem] lg:border-r lg:px-8 ${
                    index % 3 === 2 ? "lg:border-r-0" : ""
                  }`}
                  key={experience.title}
                >
                  <Link
                    aria-label={`Discover ${experience.title}`}
                    className="block"
                    href={
                      experience.title === "Walk with Goats or Donkeys"
                        ? "/experiences/walk-with-goats-or-donkeys"
                        : "#contact"
                    }
                  >
                    <figure className="relative mb-8 aspect-[16/7] overflow-hidden bg-[#e5e1d6]">
                      <Image
                        alt={experience.imageAlt}
                        className="object-cover object-center"
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 42vw, 100vw"
                        src={experience.image}
                      />
                    </figure>
                  </Link>
                  <span className="font-serif text-sm italic text-[#8a8068]">
                    {experience.number}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl leading-tight">
                    {experience.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#62675e]">
                    {experience.description}
                  </p>
                  <a
                    aria-label={`Discover ${experience.title}`}
                    className="mt-auto inline-flex w-fit items-center gap-3 pt-7 text-xs font-semibold uppercase tracking-[0.17em] text-[#263126]"
                    href={
                      experience.title === "Walk with Goats or Donkeys"
                        ? "/experiences/walk-with-goats-or-donkeys"
                        : "#contact"
                    }
                  >
                    Discover <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <figure className="relative aspect-[4/5] overflow-hidden bg-[#b7b49f] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                alt="A group horseback ride through the Tuscan countryside at sunset"
                className="object-cover object-center"
                fill
                sizes="(min-width: 1024px) 52vw, (min-width: 640px) 90vw, 100vw"
                src="/images/horseback-sunset-tuscany.jpg"
              />
              <figcaption className="absolute bottom-5 left-5 text-[0.65rem] uppercase tracking-[0.2em] text-white/75">
                The landscape, at horse pace
              </figcaption>
            </figure>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
                Ride into Tuscany
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                An experience shaped by the land.
              </h2>
              <p className="mt-7 text-base leading-8 text-[#62675e]">
                Step into the rhythm of rural Tuscany and explore its open countryside on
                horseback. A memorable encounter with the landscape, rooted in the place
                and its equestrian character.
              </p>
              <a
                className="mt-9 inline-flex min-h-13 items-center justify-center gap-4 bg-[#263126] px-7 text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:bg-[#3e4a3d]"
                href="/experiences/horseback-riding#booking"
              >
                BOOK NOW <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#263126] px-5 py-24 text-center text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#c9c4b2]">
              Your Tuscan ride begins here
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
              See Tuscany differently.
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">
              Ready to discover the countryside near Montepulciano on horseback?
            </p>
            <a
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-4 border border-white px-8 text-xs font-semibold tracking-[0.2em] transition-colors hover:bg-white hover:text-[#263126]"
              href="/experiences/horseback-riding#booking"
              id="booking"
            >
              BOOK YOUR RIDE <ArrowIcon />
            </a>
          </div>
        </section>

        <section
          className="border-b border-[#d8d4c8] bg-[#eeece4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
          id="faq"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
              Frequently Asked Questions
            </h2>
            <div className="border-t border-[#bdb7a8]">
              {faqs.map((faq) => (
                <details className="group border-b border-[#bdb7a8]" key={faq.question}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-serif text-xl leading-snug marker:content-none sm:py-7 sm:text-2xl [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-2xl font-light leading-none transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-7 pr-10 leading-7 text-[#5e645a] sm:pb-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-b border-[#d8d4c8] bg-[#f7f5ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
          id="contact"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                Contact
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
