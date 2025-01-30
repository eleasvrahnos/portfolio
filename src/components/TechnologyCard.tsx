import { TechIcon } from "../assets/technologies/technologiesIcons";

interface TechnologyCardProps {
  technology: TechIcon;
}

const TechCard: React.FC<TechnologyCardProps> = ({
  technology: { name, icon, link },
}) => {
  return (
    <div
      className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded border border-frappelight1 bg-frappedark2 py-2 duration-200 hover:cursor-pointer hover:bg-frappedark1"
      onClick={() => window.open(link, "_blank")}
    >
      <p className="text-center text-sm text-milk">{name}</p>
      <img
        className="mb-1 h-12 duration-200 hover:scale-110 hover:cursor-pointer"
        src={icon}
        alt={name}
      />
    </div>
  );
};

export default TechCard;
