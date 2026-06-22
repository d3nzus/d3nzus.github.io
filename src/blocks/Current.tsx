import ProjectCard from "../components/ProjectCard";
import { getCurrent } from "../content/Projects.ts";

function Current() {
  return (
    <div className="container mx-auto top-10 relative align-middle justify-center">
      <h1 className="text-6xl font-bold text-white -my-1 text-center">
        I'M CURRENTLY WORKING ON:
      </h1>
      <ProjectCard
        project={getCurrent()[0]}
      />
    </div>
  );
}

export default Current;
