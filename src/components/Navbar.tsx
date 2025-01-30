import {
  BriefcaseBusiness,
  CircleUserRound,
  FlaskConical,
  Wrench,
} from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 10;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 p-3 sm:p-4">
      <ul className="flex flex-col gap-y-2 text-milk">
        <li className="duration-200 hover:scale-110">
          <a
            href="#about"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("aboutme");
            }}
          >
            <CircleUserRound />
            <p className="invisible md:visible">{"About Me"}</p>
          </a>
        </li>
        <li className="duration-200 hover:scale-110">
          <a
            href="#technologies"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("technologies");
            }}
          >
            <Wrench />
            <p className="invisible md:visible">{"Technologies"}</p>
          </a>
        </li>
        <li className="duration-200 hover:scale-110">
          <a
            href="#experience"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            <BriefcaseBusiness />
            <p className="invisible md:visible">{"Experience"}</p>
          </a>
        </li>
        <li className="duration-200 hover:scale-110">
          <a
            href="#projects"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            <FlaskConical />
            <p className="invisible md:visible">{"Projects"}</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
