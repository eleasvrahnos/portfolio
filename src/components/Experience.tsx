import React from "react";
import { useLocale } from "../LocaleContext";
import { experienceDataEN, experienceDataGR } from "../data/experience";
import { titleDataEN, titleDataGR } from "../data/titles";

const Experience: React.FC = () => {
  const { locale } = useLocale();
  const titleData = locale === "en" ? titleDataEN : titleDataGR;
  const experienceData = locale === "en" ? experienceDataEN : experienceDataGR;

  return (
    <div id="experience">
      <h1 className="font-raleway">{titleData.experience}</h1>
      <div className="my-5 space-y-5">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <div className="mb-1 flex justify-between gap-4">
              <h1 className="text-xl text-milk">{experience.company}</h1>
              <img
                src={experience.icon}
                onClick={() => window.open(experience.links.Website, "_blank")}
                alt={experience.company}
                title={experience.company}
                className="h-8 cursor-pointer duration-200 hover:scale-110"
              />
            </div>
            <div className="flex justify-between gap-4 text-milk">
              <h2>{experience.title}</h2>
              <h2 className="text-right">{experience.period}</h2>
            </div>
            <div className="my-3 space-y-3 text-xs">
              <h2>{experience.description1}</h2>
              <h2>{experience.description2}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {experience.stack.map((technology, index) => (
                <img
                  key={index}
                  src={technology.icon}
                  onClick={() => window.open(technology.link, "_blank")}
                  alt={technology.name}
                  title={technology.name}
                  className="h-7 cursor-pointer"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
