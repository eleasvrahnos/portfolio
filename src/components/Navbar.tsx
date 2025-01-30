import {
  BriefcaseBusiness,
  CircleUserRound,
  FlaskConical,
  Wrench,
} from "lucide-react";
import { greece, us } from "../assets/header/headerIcons";
import { useLocale } from "../LocaleContext";

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

  const { locale, setLocale } = useLocale();

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
        <li
          className="flex cursor-pointer flex-row gap-2 duration-200 hover:scale-110"
          onClick={() => setLocale(locale === "en" ? "gr" : "en")}
        >
          <img
            src={locale === "en" ? greece : us}
            alt="Greece"
            className="h-6 w-6"
          />
          <p className="invisible md:visible">{"Change Language"}</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
