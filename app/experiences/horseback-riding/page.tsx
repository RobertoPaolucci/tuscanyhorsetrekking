import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Horseback Riding in Tuscany | Tuscany Horse Trekking",
  description:
    "Discover horseback riding in the Tuscan countryside near Montepulciano and experience Tuscany from the saddle.",
};

const navItems = [
  { label: "Experiences", href: "/#experiences" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const expectations = [
  "Ride through the Tuscan countryside",
  "Rural trails and landscapes",
  "A local horseback riding experience",
  "Countryside near Montepulciano",
];

const relatedExperiences = [
  {
    title: "Farm Animal Visit, Ricotta Making & Tasting",
    image: "/images/farm-animal-visit-ricotta-making-tasting.jpg",
    imageAlt: "Children visiting the animals at our farm in Tuscany",
  },
  {
    title: "Pici Cooking Class & Dinner",
    image: "/images/pici-cooking-class-dinner.jpg",
    imageAlt: "Freshly prepared pici pasta in a Tuscan kitchen",
  },
  {
    title: "Horse-Drawn Carriage Ride in Montepulciano",
    image: "/images/horse-drawn-carriage-ride-montepulciano.jpg",
    imageAlt: "Horse-drawn carriage in the countryside near Montepulciano",
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
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/35 bg-black/15 text-white backdrop-blur-[2px]">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
          <Link
            className="max-w-40 font-serif text-lg leading-tight tracking-wide sm:max-w-none sm:text-xl"
            href="/"
          >
            Tuscany Horse Trekking
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                className="text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-65"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="hidden border border-white px-6 py-3 text-xs font-semibold tracking-[0.18em] transition-colors hover:bg-white hover:text-[#263126] lg:inline-flex"
            href="#booking"
          >
            BOOK NOW
          </a>

          <details className="mobile-menu relative lg:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex size-11 cursor-pointer list-none items-center justify-center border border-white/60"
            >
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 flex w-64 flex-col border border-[#d8d4c8] bg-[#f7f5ef] p-2 text-[#263126] shadow-xl"
            >
              {navItems.map((item) => (
                <Link className="px-4 py-3 text-sm" href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
              <a
                className="mt-2 bg-[#263126] px-4 py-3 text-center text-xs font-semibold tracking-[0.16em] text-white"
                href="#booking"
              >
                BOOK NOW
              </a>
            </nav>
          </details>
        </div>
      </header>

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

        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              From the saddle
            </p>
            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                Ride through the Tuscan countryside
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5e645a]">
                Horseback riding offers a distinctive way to discover the countryside
                around Montepulciano, moving through the rural landscape at the natural
                pace of the horse and experiencing Tuscany in close connection with the
                land.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#eeece4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <figure className="relative mx-auto aspect-[4/5] max-w-7xl overflow-hidden bg-[#b7b49f] sm:aspect-[16/10] lg:aspect-[16/9]">
            <Image
              alt="A group riding horses through the Tuscan countryside at sunset"
              className="object-cover object-center"
              fill
              sizes="(min-width: 1280px) 80vw, (min-width: 640px) 92vw, 100vw"
              src="/images/horseback-sunset-tuscany.jpg"
            />
          </figure>
        </section>

        <section className="border-b border-[#d8d4c8] bg-[#f7f5ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
                The experience
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                What to expect
              </h2>
            </div>
            <ul className="mt-14 grid border-t border-[#cbc6b8] sm:grid-cols-2 lg:ml-[calc(34.78%+3rem)]">
              {expectations.map((expectation, index) => (
                <li
                  className={`flex min-h-32 items-start border-b border-[#cbc6b8] py-7 text-lg leading-7 sm:px-7 ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  }`}
                  key={expectation}
                >
                  <span className="mr-5 font-serif text-sm italic text-[#8a8068]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {expectation}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#eeece4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#77705e]">
              Plan ahead
            </p>
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
                Before you ride
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-[#62675e]">
                Practical information, requirements and booking details will be available
                here.
              </p>
            </div>
          </div>
        </section>

        <section
          className="bg-[#263126] px-5 py-24 text-center text-white sm:px-8 sm:py-32"
          id="booking"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.27em] text-[#c9c4b2]">
              Your Tuscan ride
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.025em] sm:text-6xl">
              Book your horseback ride
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">
              Online booking will be available here.
            </p>
            <a
              className="mt-9 inline-flex min-h-14 items-center justify-center gap-4 border border-white px-8 text-xs font-semibold tracking-[0.2em] transition-colors hover:bg-white hover:text-[#263126]"
              href="#booking"
            >
              BOOK NOW <ArrowIcon />
            </a>
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
                    index === relatedExperiences.length - 1 ? "lg:border-r-0" : ""
                  }`}
                  key={experience.title}
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
                  <h3 className="font-serif text-2xl leading-tight">{experience.title}</h3>
                  <Link
                    aria-label={`Discover ${experience.title}`}
                    className="mt-7 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em]"
                    href="/#experiences"
                  >
                    Discover <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1c241d] px-5 py-12 text-white/70 sm:px-8 lg:px-12" id="contact">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 border-t border-white/15 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-xl text-white">Tuscany Horse Trekking</p>
            <p className="mt-2 text-sm">Tuscany, Italy</p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-3 text-xs uppercase tracking-[0.14em]"
          >
            <a className="transition-colors hover:text-white" href="#privacy">
              Privacy
            </a>
            <a className="transition-colors hover:text-white" href="#terms">
              Terms
            </a>
            <a className="transition-colors hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
