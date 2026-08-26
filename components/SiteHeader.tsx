"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/images/tuscany-horse-trekking-logo.png";

const homeNavItems = [
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const internalNavItems = homeNavItems.map((item) => ({
  ...item,
  href: `/${item.href}`,
}));

type SiteHeaderProps = {
  bookHref: string;
  isHome?: boolean;
  overlay?: boolean;
};

export default function SiteHeader({
  bookHref,
  isHome = false,
  overlay = false,
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = isHome ? homeNavItems : internalNavItems;

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const solidBackground = !overlay || isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 border-b text-white transition-colors duration-200 ${
        overlay ? "-mb-20 lg:-mb-24" : ""
      } ${
        solidBackground
          ? "border-white/15 bg-[#263126]/95 shadow-sm backdrop-blur-md"
          : "border-white/35 bg-black/15 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-12">
        <Link
          aria-label="Tuscany Horse Trekking - Home"
          className="shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          href="/"
        >
          <Image
            alt="Tuscany Horse Trekking"
            className="h-auto w-[70px] rounded-full lg:w-[85px]"
            loading="eager"
            src={logo}
          />
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

        <Link
          className="hidden border border-white px-6 py-3 text-xs font-semibold tracking-[0.18em] transition-colors hover:bg-white hover:text-[#263126] lg:inline-flex"
          href={bookHref}
        >
          BOOK NOW
        </Link>

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
            <Link
              className="mt-2 bg-[#263126] px-4 py-3 text-center text-xs font-semibold tracking-[0.16em] text-white"
              href={bookHref}
            >
              BOOK NOW
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
