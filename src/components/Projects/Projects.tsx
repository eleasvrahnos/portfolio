import { projectStackData } from "../../data/projectStack";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      {projectStackData.map((project, id) => {
        return (
          <ProjectCard key={id} {...project} />
        );
      })}
    </div>
  );
};

export default Projects;
