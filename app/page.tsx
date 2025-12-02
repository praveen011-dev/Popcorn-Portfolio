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
          {/* Popcorn Animation */}
          <div className="order-1 md:order-2 flex justify-center relative z-0">
            <PopCorn />
          </div>

          {/* Hero Text */}
          <div className="order-2 md:order-1 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="text-yellow-300">Praveen</span> <br />I
              Build Animated & Modern Web Experiences
            </h1>

            <p className="text-[var(--text)]/70 text-base md:text-lg max-w-md mx-auto md:mx-0">
              A fun, animated portfolio with popcorn-themed UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/projects"
                className="px-5 py-2 bg-yellow-400 dark:bg-yellow-300 text-black font-semibold rounded-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-2 border border-black/20 dark:border-white/40 text-[var(--text)] rounded-lg"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ NEW SECTION 1 — ABOUT ME */}
      <div className="space-y-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--text)]">About Me</h2>

        <p className="text-[var(--text)]/70 text-lg leading-relaxed">
          I’m Praveen — a passionate MERN & Next.js developer who loves building
          clean UI, smooth animations, and visually engaging web experiences. I
          enjoy blending performance with creativity, especially using Framer
          Motion, Tailwind CSS, and modern full-stack technologies.
        </p>
      </div>

      {/* ⭐ NEW SECTION 2 — SKILLS GRID */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-[var(--text)] text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {[
            "Next.js",
            "React.js",
            "Node.js",
            "Tailwind CSS",
            "TypeScript",
            "Framer Motion",
            "PostgreSQL",
            "MongoDB",
            "GSAP",
            "Express.js",
          ].map((skill) => (
            <div
              key={skill}
              className="
                p-4 rounded-xl text-center font-medium
                bg-[var(--card-bg)]
                border border-[var(--card-border)]
                text-[var(--text)]
                hover:scale-[1.05] transition
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PROJECTS */}
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
          bg-white/70 dark:bg-white/5
          border border-black/10 dark:border-white/10
          rounded-xl backdrop-blur-md
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
