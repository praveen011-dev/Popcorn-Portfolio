import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="p-5 bg-white/10 rounded-xl hover:bg-white/20 transition">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-white/70 text-sm mb-4">{project.short}</p>

      <Link
        href={`/projects/${project.slug}`}
        className="text-yellow-300 text-sm underline"
      >
        View Details →
      </Link>
    </div>
  );
}
