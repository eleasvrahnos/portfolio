import { techStackData } from "../../data/techStack";
import TechCard from "./TechCard";

const TechStack = () => {
  return (
    <div className="flex justify-center">
      <div className="m-5 flex max-w-7xl flex-wrap justify-center rounded-3xl bg-slate-50 p-5">
        {techStackData.map((skill, id) => {
          return (
            <TechCard key={id} {...skill} />
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
