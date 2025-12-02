import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import PopCorn from "@/components/PopCorn";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-20">
      {/* HERO SECTION */}
      <div className="min-h-[70vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Left side - text */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              Popcorn Portfolio <br />
              <span className="text-yellow-300">Made with Next.js</span>
            </h1>

            <p className="text-white/70 text-lg max-w-md">
              A fun, animated portfolio with popcorn-themed UI, smooth
              transitions, and dynamic project pages.
            </p>

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

          {/* Right side - animation placeholder */}

          <PopCorn />
        </div>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
