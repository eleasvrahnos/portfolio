interface Props {
  demo: string;
  links?: { [key: string]: string | undefined };
  title: string;
  period: string;
  stack: string[];
  desc1: string;
  desc2: string;
}

const ProjectCard = ({
  demo,
  links = { "No links provided at the moment.": undefined },
  title,
  period,
  stack,
  desc1,
  desc2,
}: Props) => {
  return (
    <div className="m-5 flex w-11/12 max-w-6xl flex-col rounded-lg bg-thistle p-7 lg:flex-row">
      <div className="flex flex-col justify-center">
        <a href={demo}><video className="mb-0 w-full lg:max-w-lg" src={demo} autoPlay playsInline muted loop /></a>
        <h1 className="mt-3 text-center font-bold">
          &emsp;
          {Object.entries(links).map(([linkName, linkValue], id) => (
            <a key={id} href={linkValue} target="_blank" rel="noreferrer">
              <h1
                className={`inline-block ${linkValue ? "hover:scale-125 duration-200" : "text-red-600"}`}
              >
                {linkName}&emsp;
              </h1>
            </a>
          ))}
        </h1>
      </div>
      <div className="mx-5 mt-5 lg:mt-0 lg:max-w-lg">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="italic">{period}</h2>
        <div className="flex flex-wrap">
          {stack.map((skill, id) => {
            return (
              <h2
                className="my-1 mr-1 rounded-2xl bg-parchment px-2 py-1 drop-shadow-md"
                key={id}
              >
                {skill}
              </h2>
            );
          })}
        </div>
        <h2 className="flex">{desc1}</h2>
        <h2>{desc2}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
