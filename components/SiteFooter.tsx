import Link from "next/link";

const footerLinks = [
  { label: "Experiences", href: "/#experiences" },
  { label: "Contact", href: "/#contact" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#1c241d] px-5 py-12 text-white/70 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/15 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <div>
          <p className="font-serif text-xl text-white">Tuscany Horse Trekking</p>
          <p className="mt-4 max-w-xl text-sm leading-6">
            Booking and customer service managed by TodoInTheWorld Limited, Ireland.
            <br />
            Experiences may be delivered by selected local activity providers.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-7 gap-y-4 text-xs uppercase tracking-[0.14em] lg:justify-end"
        >
          {footerLinks.map((item) => (
            <Link
              className="transition-colors hover:text-white"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
