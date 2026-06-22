let current: Project[] = [];

let ReqTrack = {
  name: "ReqTrack",
  description: "A comfy-themed requirements tracker designed for college students.",
  image: "/src/public/project-images/reqtrack.png",
  gitLink: "https://github.com/d3nzus/ReqTrack",
  pageLink: "",
  tags: ["TypeScript", "React", "Vite", "Supabase", "Tailwind"],
};

current.push(ReqTrack);

function getCurrent() {
  return current;
}

export { getCurrent };
export default current;