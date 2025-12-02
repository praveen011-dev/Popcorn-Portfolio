import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="space-y-10">
      {/* Cover Image */}
      <div
        className="
          w-full h-60 sm:h-72 md:h-96 
          relative 
          rounded-xl 
          overflow-hidden 
          bg-[var(--card-bg)] 
          border border-[var(--card-border)]
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[var(--text)]">
        {project.title}
      </h1>

      {/* Short Description */}
      <p className="text-[var(--text)]/70 text-lg leading-relaxed max-w-2xl">
        {project.description}
      </p>

      {/* Tech Used */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text)]">Tech Stack</h2>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                px-4 py-1.5 
                bg-yellow-300/20 dark:bg-yellow-300/10 
                text-yellow-700 dark:text-yellow-300 
                rounded-full text-sm font-medium
                border border-yellow-400/40 dark:border-yellow-300/30
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <a
        href="/projects"
        className="
          inline-block mt-6 
          px-6 py-2.5 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          text-[var(--text)]
          rounded-lg 
          font-medium
          hover:scale-[1.03] 
          transition
        "
      >
        ← Back to Projects
      </a>
    </section>
  );
}
