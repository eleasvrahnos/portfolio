interface Props {
  demo: string;
  links: { [key: string]: string };
  title: string;
  period: string;
  stack: string[];
  desc1: string;
  desc2: string;
}

const ProjectCard = ({
  demo,
  links,
  title,
  period,
  stack,
  desc1,
  desc2,
}: Props) => {
  return (
    <div className="m-5 flex max-w-6xl rounded-lg bg-slate-100 p-7">
      <div>
        <video className="h-72" src={demo} autoPlay muted />
        <h1 className="mt-3 text-center font-bold">
          &emsp;
          {Object.entries(links).map(([linkName, linkValue], id) => (
            <a key={id} href={linkValue} target="_blank">
              <h1 className="inline-block duration-200 hover:scale-125">{linkName}&emsp;</h1>
            </a>
          ))}
        </h1>
      </div>
      <div className="ml-5 max-w-lg">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="italic">{period}</h2>
        <div className="flex">
          {stack.map((skill, id) => {
            return (
              <h2 className="my-1 mr-1 rounded-2xl bg-gray-300 px-2 py-1" key={id}>
                {skill}
              </h2>
            );
          })}
        </div>
        <h2>{desc1}</h2>
        <h2>{desc2}</h2>
      </div>
    </div>
  );
};

export default ProjectCard;
