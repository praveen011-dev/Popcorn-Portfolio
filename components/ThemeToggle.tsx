"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      className="
        text-2xl 
        p-2 
        text-[var(--text)] 
        hover:text-yellow-500 
        transition
        cursor-pointer
      "
    >
      {theme === "dark" ? (
        <i className="ri-sun-line"></i>
      ) : (
        <i className="ri-moon-line"></i>
      )}
    </button>
  );
}
