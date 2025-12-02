import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import PopCorn from "@/components/PopCorn";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-20">
      {/* HERO SECTION */}
      <div className="min-h-[70vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {/* Popcorn on RIGHT for desktop */}
          <div className="order-1 md:order-2 flex justify-center relative z-0">
            <PopCorn />
          </div>

          {/* Text on LEFT */}
          <div className="order-2 md:order-1 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--text)]">
              Popcorn Portfolio <br />
              <span className="text-yellow-400">Made with Next.js</span>
            </h1>

            <p className="text-[var(--text)]/70 text-base md:text-lg max-w-md mx-auto md:mx-0">
              A fun, animated portfolio with popcorn-themed UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Primary button */}
              <a
                href="/projects"
                className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-sm"
              >
                View Projects
              </a>

              {/* Outline button */}
              <a
                href="#contact"
                className="
                  px-5 py-2 
                  border border-[var(--card-border)]
                  text-[var(--text)]
                  rounded-lg
                "
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-[var(--text)]">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div
        id="contact"
        className="
          mt-20 p-6 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          rounded-xl 
          backdrop-blur-md
        "
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text)]">
          Get in Touch
        </h2>

        <ContactForm />
      </div>
    </section>
  );
}
