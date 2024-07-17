interface Props {
  imageSrc: string;
  title: string;
}

const TechCard = ({ imageSrc, title }: Props) => {
  return (
    <div className="flex w-24 flex-col items-center py-2">
      <div>
        <img
          className="mb-1 h-20 drop-shadow-md duration-200 hover:scale-110"
          src={imageSrc}
          alt={title}
        />
      </div>
      <p className="text-center text-gray-300">{title}</p>
    </div>
  );
};

export default TechCard;
