import ProjectCard from "../components/ProjectCard.tsx";
import { getPrevious } from "../content/Projects.ts";
import { usePrevCount } from "../hooks/prev_count.ts";

function Previous() {
  const { getPrevCount, nextPrevCount, prevPrevCount } = usePrevCount();
  return (
    <div className="container mx-auto top-10 relative align-middle justify-center">
      <h1 className="text-6xl font-bold text-white my-10 text-center">
        I'M PREVIOUSLY WORKED ON:
      </h1>

      <ProjectCard project={getPrevious()[getPrevCount()]} />

      <div className="flex align-middle justify-center gap-4 ">
        <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4 h-fit" id="currPrev" onClick={prevPrevCount}>
          Previous
        </button>
        <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4 h-fit" id="currNext" onClick={nextPrevCount}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Previous;
