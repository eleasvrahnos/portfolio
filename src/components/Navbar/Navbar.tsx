const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <nav className="bg-richblack p-4">
      <div>
        <ul className="flex flex-wrap justify-center gap-x-[5%] text-lg font-medium text-gray-300 sm:text-2xl">
          <li className="duration-200 hover:scale-125">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
            >
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
