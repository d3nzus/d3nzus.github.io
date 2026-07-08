import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../content/Projects";

function Project() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = getProjects();

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="container mx-auto top-10 relative align-middle justify-center">
      <h1 className="text-4xl font-bold text-white my-2 text-center">I'VE WORKED ON:</h1>

      <ProjectCard project={projects[projectIndex]} />

      <div className="flex align-middle justify-center gap-1 ">
        <button
          className="bg-gray-700 text-white text-md px-4 py-2 rounded-lg mt-4 h-fit"
          id="projectPrev"
          onClick={prevProject}
        >
          Previous
        </button>
        <button
          className="bg-gray-700 text-white text-md px-4 py-2 rounded-lg mt-4 h-fit"
          id="projectNext"
          onClick={nextProject}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Project;