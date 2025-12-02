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
          {/* Popcorn FIRST on mobile */}
          <div className="order-1 md:order-2 flex justify-center">
            <PopCorn />
          </div>

          {/* Text SECOND on mobile */}
          <div className="order-2 md:order-1 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Popcorn Portfolio <br />
              <span className="text-yellow-300">Made with Next.js</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-md mx-auto md:mx-0">
              A fun, animated portfolio with popcorn-themed UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a className="px-5 py-2 bg-yellow-300 text-black font-semibold rounded-lg">
                View Projects
              </a>
              <a className="px-5 py-2 border border-white/40 rounded-lg">
                Contact Me
              </a>
            </div>
          </div>
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

      {/* CONTACT SECTION */}
      <div
        id="contact"
        className="mt-20 p-6 bg-white/5 rounded-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  );
}
