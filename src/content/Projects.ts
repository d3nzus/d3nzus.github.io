import Project from "../types";

const projects: Project[] = [
  {
    name: "ReqTrack",
    description: "A comfy-themed requirements tracker designed for college students.",
    image: "/project-images/reqtrack.png",
    gitLink: "https://github.com/d3nzus/ReqTrack",
    pageLink: "",
    tags: ["typescript", "react", "vite", "supabase", "tailwind"],
  },
  {
    name: "d3nzus.github.io",
    description: "A personal website built with React and TypeScript.",
    image: "/project-images/d3nzus-github.png",
    gitLink: "https://github.com/d3nzus/d3nzus.github.io",
    pageLink: "",
    tags: ["typescript", "react", "vite", "tailwind"],
  },
  {
    name: "AniGuess",
    description: "A browser-based anime guessing game with multiple gamemodes, a leaderboard system and user login.",
    image: "/project-images/aniguess.png",
    gitLink: "https://github.com/dejely/Aniguess",
    pageLink: "",
    tags: ["typescript", "react", "vite", "supabase", "tailwind"],
  },
];

function getProjects() {
  return projects;
}

export { getProjects };