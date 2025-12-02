import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
      <section>
        <h1 className="text-4xl font-extrabold mb-6">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
  );
}
