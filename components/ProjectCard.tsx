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
        rounded-xl
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        backdrop-blur-md 
        transition
        flex flex-col justify-between
        h-full
        hover:scale-[1.02]
      "
    >
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2 leading-snug text-[var(--text)]">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-[var(--text)]/70 text-sm sm:text-base mb-4">
        {project.short}
      </p>

      {/* Link */}
      <Link
        href={`/projects/${project.slug}`}
        className="
          text-yellow-500
          text-sm sm:text-base 
          underline 
          mt-auto
          hover:text-yellow-600
        "
      >
        View Details →
      </Link>
    </div>
  );
}
