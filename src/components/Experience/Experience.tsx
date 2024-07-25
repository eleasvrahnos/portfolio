import experienceStackData from "../../data/experienceStack";
import ExperienceCard from "../Card/Card";

const Experience = () => {
  return (
    <div id="experience">
      <div className="relative my-10 flex items-center justify-center">
        <div className="absolute w-full border-4 border-ashgray"></div>
        <div className="z-10 w-3/4 -skew-x-6 transform bg-ashgray py-2 text-center text-black lg:w-1/2">
          <span className="text-4xl font-bold sm:text-5xl">EXPERIENCE</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5">
        {experienceStackData.map((experience, id) => {
          return <ExperienceCard key={id} {...experience} isVideo={false} isProject={false} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
