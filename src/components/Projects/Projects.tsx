import {
  projectStackDataCurr,
  projectStackDataPast,
} from "../../data/projectStack";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <div className="relative my-10 flex items-center justify-center">
        <div className="absolute w-full border-4 border-ashgray"></div>
        <div className="z-10 w-3/4 -skew-x-6 transform bg-ashgray py-2 text-center text-black lg:w-1/2">
          <span className="text-5xl font-bold">CURRENT PROJECTS</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        {projectStackDataCurr.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>

      <div className="relative my-10 flex items-center justify-center">
        <div className="absolute w-full border-4 border-ashgray"></div>
        <div className="z-10 w-3/4 skew-x-6 transform bg-ashgray py-2 text-center text-black lg:w-1/2">
          <span className="text-5xl font-bold">PAST PROJECTS</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        {projectStackDataPast.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>

      <div className="relative my-10 flex items-center justify-center">
        <div className="absolute w-full border-4 border-ashgray"></div>
        <div className="z-10 w-3/4 bg-ashgray py-2 text-center text-black lg:w-1/2">
          <span className="text-5xl font-bold">MORE PAST PROJECTS TO BE ADDED!</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
