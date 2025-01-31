import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    demo,
    title,
    period,
    links,
    description1,
    description2,
    stack,
    isVideo,
  },
}: ProjectCardProps) => {
  return (
    <div className="flex h-auto w-full flex-col rounded-lg border-2 border-frappelight2 bg-frappedark2 p-3 duration-100 hover:bg-frappedark1">
      <div className="flex w-full justify-between text-milk">
        <div className="flex flex-col gap-3">
          <p>{title}</p>
          <div className="flex flex-wrap gap-3">
            {stack.map((technology, index) => (
              <img
                key={index}
                src={technology.icon}
                onClick={() => window.open(technology.link, "_blank")}
                alt={technology.name}
                title={technology.name}
                className="h-6 cursor-pointer duration-200 hover:scale-125"
              />
            ))}
          </div>
        </div>
        <p className="text-right text-sm">{period}</p>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 xl:flex-row">
        <div className="my-3 space-y-3 text-xs">
          <p>{description1}</p>
          <p>{description2}</p>
        </div>
        <div className="gap-4">
          <div className="h-auto items-center justify-center xl:w-96">
            {isVideo ? (
              <video
                className="cursor-pointer rounded-lg"
                autoPlay={window.innerWidth >= 768}
                muted
                loop
                src={demo}
                onClick={() => window.open(demo, "_blank")}
              ></video>
            ) : (
              <img
                className="cursor-pointer rounded-lg"
                onClick={() => window.open(demo, "_blank")}
                src={demo}
                alt={title}
              />
            )}
          </div>
          <div className="mt-2 flex justify-center gap-2">
            {links &&
              links.map((link, index) => (
                <button
                  key={index}
                  onClick={() => window.open(link.url, "_blank")}
                  className="button flex items-center gap-1 p-1"
                >
                  {typeof link.icon === "string" ? (
                    <img src={link.icon} alt={link.label} className="h-6" />
                  ) : (
                    <link.icon />
                  )}
                  <p>{link.label}</p>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
