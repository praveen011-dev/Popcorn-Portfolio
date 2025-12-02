"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hydration fix (next-themes)
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        className="md:hidden text-3xl focus:outline-none text-[var(--text)]"
      >
        {mobileOpen ? (
          <i className="ri-close-line"></i>
        ) : (
          <i className="ri-menu-line"></i>
        )}
      </button>

      {/* Dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full px-4 z-[9999]">
          <div
            className="
              rounded-lg py-4 shadow-xl space-y-4
              backdrop-blur-xl
              bg-[var(--card-bg)]
              border border-[var(--card-border)]
              transition-all duration-300
            "
          >
            {/* Links */}
            <Link
              href="/"
              className="block px-4 py-2 text-lg text-[var(--text)] hover:text-yellow-500"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/projects"
              className="block px-4 py-2 text-lg text-[var(--text)] hover:text-yellow-500"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/#contact"
              className="block px-4 py-2 text-lg text-[var(--text)] hover:text-yellow-500"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <div className="px-4 pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
