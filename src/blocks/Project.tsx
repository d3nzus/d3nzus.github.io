import { useCallback, useEffect, useState, useMemo } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../content/Projects";

function Project() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = useMemo(() => getProjects(), []);

  const nextProject = useCallback(() => {
    setProjectIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);


  if (projects.length === 0) {
    return (
      <div className="container mx-auto top-10 relative text-center text-white">
        <h1 className="text-4xl font-bold my-10">I'VE WORKED ON:</h1>
        <p className="text-gray-400">No projects to show yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto top-10 relative flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white my-10 text-center">I'VE WORKED ON:</h1>

      {/* key forces remount so a CSS entrance animation replays on every switch */}
      <div key={projectIndex} className="w-full">
        <ProjectCard project={projects[projectIndex]} />
      </div>

      <div className="flex items-center justify-center gap-1 mt-4">
        <button
          className="bg-gray-700 hover:bg-gray-600 transition-colors text-white text-md px-4 py-2 rounded-lg h-fit disabled:opacity-40 disabled:cursor-not-allowed"
          id="projectPrev"
          onClick={prevProject}
          disabled={projects.length <= 1}
          aria-label="Previous project"
        >
          Previous
        </button>
        <button
          className="bg-gray-700 hover:bg-gray-600 transition-colors text-white text-md px-4 py-2 rounded-lg h-fit disabled:opacity-40 disabled:cursor-not-allowed"
          id="projectNext"
          onClick={nextProject}
          disabled={projects.length <= 1}
          aria-label="Next project"
        >
          Next
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-3" aria-live="polite">
        {projectIndex + 1} / {projects.length}
      </p>
    </div>
  );
}

export default Project;