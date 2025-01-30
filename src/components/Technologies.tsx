import React, { useState } from "react";
import { TechIcon } from "../assets/technologies/technologiesIcons";
import {
  techCategoriesDataEN,
  techCategoriesDataGR,
  techDataBOTH,
} from "../data/technologies";
import { titleDataEN, titleDataGR } from "../data/titles";
import { useLocale } from "../LocaleContext";
import TechnologyCard from "./TechnologyCard";

const Technologies: React.FC = () => {
  const { locale } = useLocale();

  const techCategoriesData =
    locale === "en" ? techCategoriesDataEN : techCategoriesDataGR;
  const titleData = locale === "en" ? titleDataEN : titleDataGR;
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div id="technologies">
      <h1 className="font-raleway">{titleData.technologies}</h1>
      <div className="my-2 flex flex-wrap justify-center gap-2">
        {techCategoriesData.map((category, index) => (
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
        {techDataBOTH[selectedCategory].map((technology: TechIcon, index) => (
          <TechnologyCard key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
