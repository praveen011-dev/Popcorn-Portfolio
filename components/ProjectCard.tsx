import Link from "next/link";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
        p-4 sm:p-5 
        bg-white/10 rounded-xl 
        hover:bg-white/20 
        transition 
        flex flex-col justify-between 
        h-full
      "
    >
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-white/70 text-sm sm:text-base mb-4">{project.short}</p>

      {/* Link */}
      <Link
        href={`/projects/${project.slug}`}
        className="text-yellow-300 text-sm sm:text-base underline mt-auto"
      >
        View Details →
      </Link>
    </div>
  );
}
