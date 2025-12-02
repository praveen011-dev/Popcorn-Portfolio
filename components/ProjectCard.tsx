import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className="
        rounded-xl overflow-hidden
        bg-[var(--card-bg)]
        border border-[var(--card-border)]
        shadow-sm
        hover:shadow-md
        transition-all duration-300
        hover:scale-[1.02]
        flex flex-col
      "
    >
      {/* IMAGE */}
      <div className="w-full h-40 sm:h-48 relative bg-black/5 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-[var(--text)]">
          {project.title}
        </h2>

        {/* Short Description */}
        <p className="text-[var(--text)]/70 text-sm sm:text-base mb-3">
          {project.short}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="
                px-2 py-1 text-xs rounded-md
                bg-yellow-200/60 text-black
                dark:bg-yellow-300/20 dark:text-yellow-200
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="
            mt-auto inline-block text-center
            px-4 py-2 rounded-lg font-medium
            bg-yellow-400 text-black
            hover:bg-yellow-500
            dark:bg-yellow-300 dark:text-black
            transition
          "
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
