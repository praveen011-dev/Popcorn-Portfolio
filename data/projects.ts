export type Project = {
  slug: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  // optional: you can add fields later, e.g.
  // cover?: string;
  // url?: string;
  // repo?: string;
};

export const projects: Project[] = [
  {
    slug: "popcorn-player",
    title: "Popcorn Player",
    short: "A fun video player UI with popcorn popping effects.",
    description:
      "A custom-built media player interface inspired by cinema popcorn vibes. Includes animated controls, playful theme, and smooth transitions.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    slug: "movie-app",
    title: "Movie App",
    short: "Search and explore movies using TMDB API.",
    description:
      "Browse, search, and save your favorite movies. This app uses TMDB API with stylish UI and responsive layouts.",
    tech: ["React", "API", "Responsive UI"],
  },
  {
    slug: "portfolio-v1",
    title: "Developer Portfolio V1",
    short: "My first simple personal portfolio website.",
    description:
      "A clean, minimal portfolio built with HTML, CSS, and JavaScript. Showcases early projects and blog posts.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    slug: "snackcart",
    title: "SnackCart",
    short: "Mini e-commerce snack store with cart functionality.",
    description:
      "A playful snack store UI where users can add snacks to their cart, see animations, and view checkout flow.",
    tech: ["Next.js", "State Management"],
  },
  {
    slug: "design-system",
    title: "Design System",
    short: "A reusable design system with components.",
    description:
      "Created a theme-able UI component library featuring buttons, cards, grids, and utility classes.",
    tech: ["TailwindCSS", "Storybook"],
  },
];
