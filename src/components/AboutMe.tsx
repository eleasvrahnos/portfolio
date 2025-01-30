import React from "react";
import { useLocale } from "../LocaleContext";
import { titleDataEN, titleDataGR } from "../data/titles";

const AboutMe: React.FC = () => {
  const { locale } = useLocale();
  const titleData = locale === "en" ? titleDataEN : titleDataGR;

  return (
    <div id="aboutme">
      <h1 className="font-raleway">{titleData.aboutme}</h1>
      <div>
        <p>This is Paragraph 1.</p>
        <p>This is Paragraph 2.</p>
        <p>This is Paragraph 3.</p>
      </div>
    </div>
  );
};

export default AboutMe;
