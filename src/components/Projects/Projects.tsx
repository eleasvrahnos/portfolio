import { projectStackDataCurr, projectStackDataPast } from "../../data/projectStack";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <div className="text-center">
        <hr className="mx-auto my-4 h-1 w-3/4 rounded bg-ashgray md:w-1/2" />
          <h1 className="mx-5 text-5xl font-bold text-ashgray">Current Projects</h1>
        <hr className="mx-auto my-4 h-1 w-3/4 rounded bg-ashgray md:w-1/2" />
      </div>
      <div className="flex flex-col items-center">
        {projectStackDataCurr.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>
      <div className="text-center">
        <hr className="mx-auto my-4 h-1 w-3/4 rounded bg-ashgray md:w-1/2" />
          <h1 className="mx-5 text-5xl font-bold text-ashgray">Past Projects</h1>
        <hr className="mx-auto my-4 h-1 w-3/4 rounded bg-ashgray md:w-1/2" />
      </div>
      <div className="flex flex-col items-center">
        {projectStackDataPast.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
