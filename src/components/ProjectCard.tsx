import Project from "../types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-500 rounded-4xl w-[90%] sm:w-3/4 h-fit mx-auto p-5 sm:p-7 my-10 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4">
      <img
        src={project.image}
        alt={project.name}
        className="h-32 w-32 shrink-0 object-fill"
      />
      <div className="flex flex-col w-full">
        <h1 className="text-xl text-white mt-4 text-center sm:text-left">
          {project.name}
        </h1>
        <p className="text-sm text-gray-300 mt-2 text-center sm:text-left">
          {project.description}
        </p>

        <div className="flex mt-4 justify-center sm:justify-start sm:mr-auto flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <img
              key={index}
              src={`/tech-icons/${tag}.png`}
              alt={tag}
              className="h-10 w-10 object-cover rounded-full"
            />
          ))}
        </div>

        <div className="flex flex-row-reverse mt-auto gap-2 justify-center sm:justify-start">
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white text-md px-4 py-2 rounded-lg mt-4">
              Open Repo
            </button>
          </a>

          <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white text-md px-4 py-2 rounded-lg mt-4">
              View
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;