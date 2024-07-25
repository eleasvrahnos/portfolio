interface Props {
  demo: string;
  links?: { [key: string]: string | undefined };
  title: string;
  period: string;
  stack: string[];
  desc1: string;
  desc2: string;
  isVideo?: boolean;
  isProject?: boolean;
  orientationAttributes?: string;
  demoAttributes?: string;
  textAttributes?: string;
  imgAttributes?: string;
}

const Card = ({
  demo,
  links = { "No links provided.": undefined },
  title,
  period,
  stack,
  desc1,
  desc2,
  isVideo = true,
  isProject = true,
  orientationAttributes,
  demoAttributes,
  textAttributes,
  imgAttributes,
}: Props) => {
  orientationAttributes =
    orientationAttributes ??
    (isProject ? "lg:flex-col lg:w-5/12" : "md:flex-row p-7 md:px-0");
  demoAttributes = demoAttributes ?? (isProject ? "" : "md:w-1/3");
  textAttributes = textAttributes ?? (isProject ? "" : "md:w-2/3 pr-7 md:mt-0");
  imgAttributes =
    imgAttributes ??
    (isProject ? "w-full" : "flex h-40 items-center justify-center");

  return (
    <div
      className={`flex flex-col w-11/12 rounded-lg bg-thistle p-7 ${orientationAttributes}`}
    >
      <div
        className={`flex flex-col items-center justify-center w-full ${demoAttributes}`}
      >
        <a href={demo}>
          {isVideo ? (
            <video
              className="mb-0 w-full"
              src={demo}
              autoPlay
              playsInline
              muted
              loop
            />
          ) : (
            <img className={`mb-0 ${imgAttributes}`} src={demo} alt={title} />
          )}
        </a>
        <h1 className="mt-3 text-center font-bold">
          {Object.entries(links).map(([linkName, linkValue], id) => (
            <a key={id} href={linkValue} target="_blank" rel="noreferrer">
              <h1
                className={`inline-block mx-4 ${linkValue ? "hover:scale-125 duration-200 transform-origin-center" : "text-red-600"}`}
              >
                {linkName}
              </h1>
            </a>
          ))}
        </h1>
      </div>
      <div className={`mt-5 lg:mt-0 w-full ${textAttributes}`}>
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
        <div className="space-y-3">
          <h2>{desc1}</h2>
          <h2>{desc2}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
