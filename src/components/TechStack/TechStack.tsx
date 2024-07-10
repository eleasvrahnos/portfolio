import { techStackData } from "../../data/techStack.js";

const TechStack = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-6xl flex-wrap p-10">
        {techStackData.map((skill, id) => {
          return (
            <div className="flex w-24 flex-col items-center py-2" key={id}>
              <div>
                <img
                  className="mb-1 h-20 duration-200 hover:scale-110"
                  src={skill.imageSrc}
                  alt={skill.title}
                />
              </div>
              <p className="text-center text-black">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
