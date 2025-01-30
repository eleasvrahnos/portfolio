import React, { useState } from "react";
import { useLocale } from "../LocaleContext";
import {
  Project,
  projectCategoriesDataEN,
  projectCategoriesDataGR,
  projectDataEN,
  projectDataGR,
} from "../data/projects";
import { titleDataEN, titleDataGR } from "../data/titles";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const { locale } = useLocale();

  const titleData = locale === "en" ? titleDataEN : titleDataGR;
  const projectCategoriesData =
    locale === "en" ? projectCategoriesDataEN : projectCategoriesDataGR;
  const projectData = locale === "en" ? projectDataEN : projectDataGR;
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div id="projects">
      <h1 className="font-raleway">{titleData.projects}</h1>
      <div className="my-2 flex flex-wrap justify-center gap-2">
        {projectCategoriesData.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedCategory(index);
            }}
            className={`button px-2 ${index === selectedCategory ? "!bg-frappelight1" : ""}`}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {projectData[selectedCategory].map((project: Project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
