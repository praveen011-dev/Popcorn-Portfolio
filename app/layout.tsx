import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        {/* HEADER */}
        <header className="w-full py-5 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center gap-2"
            >
              🍿 Popcorn Portfolio
            </Link>

            <nav className="flex gap-6">
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>
              <Link href="/projects" className="hover:text-yellow-300">
                Projects
              </Link>
              <Link href="/#contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>

        {/* FOOTER */}
        <footer className="w-full py-6 mt-10 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Popcorn Portfolio — Built with Next.js
        </footer>
      </body>
    </html>
  );
}
