interface Props {
  imageSrc: string;
  title: string;
}

const TechCard = ({ imageSrc, title }: Props) => {
  return (
    <div className="flex w-16 flex-col items-center py-2 sm:w-24">
      <div>
        <img
          className="mb-1 h-12 drop-shadow-md duration-200 hover:scale-110 sm:h-20"
          src={imageSrc}
          alt={title}
        />
      </div>
      <p className="text-center text-gray-300">{title}</p>
    </div>
  );
};

export default TechCard;
