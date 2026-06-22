function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-500 rounded-4xl w-3/4 h-fit mx-auto p-7 my-10 flex align-baseline justify-start gap-4">
      <img
        src={project.image}
        alt={project.name}
        className="h-64 w-64 object-fill"
      />
      <div className="flex flex-col align-baseline w-full">
        <h1 className="text-3xl text-white mt-4 text-left">{project.name}</h1>
        <p className="text-lg text-gray-300 mt-2 text-left">
          {project.description}
        </p>

        {/* This div contains tags */}
        <div className="flex mt-4 mr-auto flex-wrap">
          {project.tags.map((tag, index) => (
            <img
              key={index}
              src={`/src/public/tech-icons/${tag}.png`}
              alt={tag}
              className="h-10 w-10 object-cover rounded-full"
            />
          ))}
        </div>

        {/* This div contains buttons and tags */}
        <div className="flex flex-row-reverse mt-auto gap-2">
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4">
              Open Repo
            </button>
          </a>

          <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-700 text-white text-2xl px-4 py-2 rounded-lg mt-4">
              View
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
