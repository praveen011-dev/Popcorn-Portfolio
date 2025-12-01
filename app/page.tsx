export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="grid md:grid-cols-2 gap-10 w-full">
        {/* LEFT SIDE — Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Popcorn Portfolio <br />
            <span className="text-yellow-300">Made with Next.js</span>
          </h1>

          <p className="text-white/70 text-lg max-w-md">
            A fun, animated, popcorn-themed developer portfolio created using
            Next.js, Tailwind CSS, and modern motion libraries.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-5 py-2 bg-yellow-300 text-black font-semibold rounded-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-5 py-2 border border-white/40 rounded-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Popcorn animation placeholder */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-64 h-64 bg-white/10 rounded-xl flex items-center justify-center">
            {/* We will replace this box with the animation later */}
            <span className="text-white/40">Popcorn Animation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
