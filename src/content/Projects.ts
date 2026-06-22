let current: Project[] = [];
let previous: Project[] = [];

let ReqTrack = {
  name: "ReqTrack",
  description: "A comfy-themed requirements tracker designed for college students.",
  image: "/src/public/project-images/reqtrack.png",
  gitLink: "https://github.com/d3nzus/ReqTrack",
  pageLink: "",
  tags: ["TypeScript", "React", "Vite", "Supabase", "Tailwind"],
};

let d3nzus_github = {
  name: "d3nzus.github.io",
  description: "A personal website built with React and TypeScript.",
  image: "/src/public/project-images/d3nzus-github.png",
  gitLink: "https://github.com/d3nzus/d3nzus.github.io",
  pageLink: "",
  tags: ["TypeScript", "React", "Vite", "Tailwind"],
};

let AniGuess = {
    name: "AniGuess",
    description: "A browser-based anime guessing game with multiple gamemodes, a leaderboard system and user login.",
    image: "/src/public/project-images/aniguess.png",
    gitLink: "https://github.com/dejely/Aniguess",
    pageLink: "",
    tags: ["TypeScript", "React", "Vite", "Supabase", "Tailwind"],
};

current.push(ReqTrack);
current.push(d3nzus_github);

previous.push(AniGuess);

function getCurrent() {
  return current;
}

function getPrevious() {
  return previous;
}

export { getCurrent, getPrevious };