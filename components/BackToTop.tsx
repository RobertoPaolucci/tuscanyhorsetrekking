"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY >= 600);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-10 items-center justify-center rounded-full border border-white/25 bg-[#263126]/90 text-lg text-white shadow-md backdrop-blur-sm transition-opacity hover:bg-[#3e4a3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#263126] sm:bottom-6 sm:right-6 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      tabIndex={isVisible ? 0 : -1}
      type="button"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
