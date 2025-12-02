"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="md:hidden text-3xl focus:outline-none"
      >
        {mobileOpen ? "✖" : "☰"}
      </button>

      {/* Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full px-4 z-50">
          <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-lg py-4 shadow-xl space-y-4">
            <Link
              href="/"
              className="block px-4 py-2 text-lg hover:text-yellow-300"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/projects"
              className="block px-4 py-2 text-lg hover:text-yellow-300"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="block px-4 py-2 text-lg hover:text-yellow-300"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
