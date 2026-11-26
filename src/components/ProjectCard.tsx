import Project from "../types";

const actionClass =
  "inline-block bg-gray-700 text-white text-base px-4 py-2 rounded-lg mt-4 transition-colors hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-500 rounded-4xl w-[90%] sm:w-3/4 h-fit mx-auto p-5 sm:p-7 my-10 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-32 w-32 shrink-0 object-fill"
      />
      <div className="flex flex-col w-full">
        <h3 className="text-xl text-white mt-4 text-center sm:text-left">
          {project.name}
        </h3>
        <p className="text-sm text-gray-50 mt-2 text-center sm:text-left">
          {project.description}
        </p>

        <div className="flex mt-4 justify-center sm:justify-start sm:mr-auto flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <img
              key={index}
              src={`/tech-icons/${tag}.png`}
              alt={tag}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 object-cover rounded-full"
            />
          ))}
        </div>

        <div className="flex flex-row-reverse mt-auto gap-2 justify-center sm:justify-start">
          <a
            className={actionClass}
            href={project.gitLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Repo<span className="sr-only"> for {project.name}</span>
          </a>

          {project.pageLink && (
            <a
              className={actionClass}
              href={project.pageLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View<span className="sr-only"> {project.name} live site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;