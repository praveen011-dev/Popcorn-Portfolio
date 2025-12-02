import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

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
    <section className="space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[var(--text)]">
        {project.title}
      </h1>

      {/* Description */}
      <p className="text-[var(--text)]/70 text-lg max-w-2xl leading-relaxed">
        {project.description}
      </p>

      {/* Tech Used */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-[var(--text)]">Tech Used:</h2>

        <ul className="list-disc list-inside text-[var(--text)]/70 space-y-1">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {/* Back Button */}
      <a
        href="/projects"
        className="
          inline-block mt-8 px-5 py-2 
          bg-[var(--card-bg)]
          border border-[var(--card-border)]
          rounded-lg 
          text-[var(--text)]
          hover:scale-[1.03]
          transition
        "
      >
        ← Back to Projects
      </a>
    </section>
  );
}
