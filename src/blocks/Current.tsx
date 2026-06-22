import ProjectCard from "../components/ProjectCard";
import { getCurrent } from "../content/Projects.ts";
import { useCurrCount } from "../hooks/curr_count.ts";

function Current() {
  const { getCurrCount, nextCurrCount, prevCurrCount } = useCurrCount();
  return (
    <div className="container mx-auto top-10 relative align-middle justify-center">
      <h1 className="text-6xl font-bold text-white my-10 text-center">
        I'M CURRENTLY WORKING ON:
      </h1>

      <ProjectCard project={getCurrent()[getCurrCount()]} />

      <div className="flex align-middle justify-center gap-4 ">
        <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4 h-fit" id="currPrev" onClick={prevCurrCount}>
          Previous
        </button>
        <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4 h-fit" id="currNext" onClick={nextCurrCount}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Current;
