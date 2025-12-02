import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";
import ClientWrapper from "@/components/ClientWrapper";
import AppThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Popcorn Portfolio",
  description: "Animated popcorn-themed portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
        <AppThemeProvider>
          {/* HEADER */}
          <header
            className="
              w-full py-4 
              border-b border-[var(--card-border)]
              backdrop-blur-md 
              relative z-[10]
            "
          >
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
              <Link
                href="/"
                className="text-2xl font-bold flex items-center gap-2 text-[var(--text)]"
              >
                🍿 Popcorn Portfolio
              </Link>

              {/* Desktop Navigation */}
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex gap-6 text-[var(--text)]">
                  <Link href="/" className="hover:text-yellow-500">
                    Home
                  </Link>
                  <Link href="/projects" className="hover:text-yellow-500">
                    Projects
                  </Link>
                  <Link href="/#contact" className="hover:text-yellow-500">
                    Contact
                  </Link>
                </nav>
                <ThemeToggle />
              </div>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </header>

          {/* MAIN */}
          <main className="max-w-6xl mx-auto px-4 py-10 relative z-[1]">
            <ClientWrapper>{children}</ClientWrapper>
          </main>

          {/* FOOTER */}
          <footer>
            <div
              className="
                text-center text-sm 
                p-4 mt-10
                border-t border-[var(--card-border)]
                bg-[var(--card-bg)]
                backdrop-blur-md
                flex flex-col md:flex-row md:justify-between items-center gap-4
                text-[var(--text)]/70
              "
            >
              <h3 className="ml-12">
                Made with ❤️ by Praveen © {new Date().getFullYear()} Popcorn
                Portfolio. All Rights Reserved.
              </h3>

              <div className="flex gap-6 text-2xl text-[var(--text)]/70">
                <a
                  href="https://www.linkedin.com/in/praveen011/"
                  target="_blank"
                  className="hover:text-yellow-500 transition"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>

                <a
                  href="https://github.com/praveen011-dev"
                  target="_blank"
                  className="hover:text-yellow-500 transition"
                >
                  <i className="ri-github-fill"></i>
                </a>

                <a
                  href="https://x.com/PalPraveen011"
                  target="_blank"
                  className="hover:text-yellow-500 transition"
                >
                  <i className="ri-twitter-x-fill"></i>
                </a>
              </div>
            </div>
          </footer>
        </AppThemeProvider>
      </body>
    </html>
  );
}
