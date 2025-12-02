export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  image: string; // 🔥 added
};

export const projects: Project[] = [
  {
    slug: "popcorn-player",
    title: "Popcorn Player",
    short: "A fun video player UI with popcorn popping effects.",
    description:
      "A custom-built cinema-inspired media player with popcorn popping animations, custom controls, and playful transitions.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/popcorn.jpg",
  },

  {
    slug: "movie-app",
    title: "Movie App",
    short: "Search and explore movies using TMDB API.",
    description:
      "Browse, search, and save your favorite movies. Built with responsive UI, TMDB API integrations, and clean filtering UX.",
    tech: ["React", "TMDB API", "Responsive UI"],
    image: "/projects/movie-app.webp",
  },

  {
    slug: "portfolio-v1",
    title: "Developer Portfolio V1",
    short: "My first simple personal portfolio website.",
    description:
      "A minimal personal portfolio built using HTML, CSS, and JavaScript. Includes project showcase and contact section.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/portfolio-v1.webp",
  },

  {
    slug: "snackcart",
    title: "SnackCart",
    short: "Mini e-commerce snack store with cart functionality.",
    description:
      "A fun snack-based mini e-commerce UI featuring cart logic, animated interactions, and a clean product layout.",
    tech: ["Next.js", "State Management"],
    image: "/projects/snackcart.webp",
  },

  {
    slug: "design-system",
    title: "Design System",
    short: "A reusable design system with components.",
    description:
      "A scalable design system built with TailwindCSS and Storybook — including button variations, card layouts, and typography presets.",
    tech: ["TailwindCSS", "Storybook"],
    image: "/projects/design-system.png",
  },
];
