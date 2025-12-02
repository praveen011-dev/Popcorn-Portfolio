import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  // FIX: unwrapping the Promise
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-extrabold">{project.title}</h1>

      <p className="text-white/70 max-w-2xl">{project.description}</p>

      <div>
        <h2 className="text-xl font-semibold mb-2">Tech Used:</h2>
        <ul className="list-disc list-inside text-white/70">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <a
        href="/projects"
        className="inline-block mt-6 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
      >
        ← Back to Projects
      </a>
    </section>
  );
}
