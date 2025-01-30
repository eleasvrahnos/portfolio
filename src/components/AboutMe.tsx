import React from "react";
import { useLocale } from "../LocaleContext";
import { aboutmeDataEN, aboutmeDataGR } from "../data/aboutme";
import { titleDataEN, titleDataGR } from "../data/titles";

const AboutMe: React.FC = () => {
  const { locale } = useLocale();
  const titleData = locale === "en" ? titleDataEN : titleDataGR;
  const aboutmeData = locale === "en" ? aboutmeDataEN : aboutmeDataGR;

  return (
    <div id="aboutme">
      <h1 className="font-raleway">{titleData.aboutme}</h1>
      <div>
        <p>{aboutmeData.paragraph1}</p>
        <p>{aboutmeData.paragraph2}</p>
        <p>{aboutmeData.paragraph3}</p>
      </div>
    </div>
  );
};

export default AboutMe;
