import Project from "../types";

const projects: Project[] = [
  {
    name: "FiatLux",
    description: "A Rust CLI that scaffolds new projects from reusable YAML blueprints.",
    image: "/project-images/fiatlux.png",
    gitLink: "https://github.com/d3nzus/fiatlux",
    tags: ["rust"],
  },
  {
    name: "d3nzus.github.io",
    description: "A personal website built with React and TypeScript.",
    image: "/favicon.svg",
    gitLink: "https://github.com/d3nzus/d3nzus.github.io",
    pageLink: "https://d3nzus.github.io/",
    tags: ["typescript", "react", "vite", "tailwind"],
  },
  {
    name: "AniGuess",
    description: "A browser-based anime guessing game with multiple gamemodes, a leaderboard system and user login.",
    image: "/project-images/aniguess.png",
    gitLink: "https://github.com/dejely/Aniguess",
    pageLink: "https://aniguesser.vercel.app",
    tags: ["typescript", "react", "vite", "supabase", "tailwind"],
  },
];

function getProjects() {
  return projects;
}

export { getProjects };