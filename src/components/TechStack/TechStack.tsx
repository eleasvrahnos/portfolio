import { techStackData } from "../../data/techStack";
import TechCard from "./TechCard";

const TechStack = () => {
  return (
    <div className="relative mt-4 flex justify-center">
      <div className="absolute z-10 mb-2 w-40 -skew-x-6 transform justify-center bg-ashgray py-2 text-center text-black">
        <span className="font-bold">TECH STACK</span>
      </div>
      <div className="m-5 flex max-w-7xl flex-wrap justify-center gap-x-3 rounded-3xl border-4 border-ashgray bg-prussianblue p-5">
        {techStackData.map((skill, id) => {
          return <TechCard key={id} {...skill} />;
        })}
      </div>
    </div>
  );
};

export default TechStack;
