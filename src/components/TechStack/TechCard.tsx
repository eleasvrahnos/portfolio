interface Props {
  imageSrc: string;
  title: string;
}

const TechCard = ({ imageSrc, title }: Props) => {
  return (
    <div className="flex w-24 flex-col items-center py-2">
      <div>
        <img
          className="mb-1 h-20 duration-200 hover:scale-110"
          src={imageSrc}
          alt={title}
        />
      </div>
      <p className="text-center text-black">{title}</p>
    </div>
  );
};

export default TechCard;
