const Navbar = () => {
  return (
    <nav className="bg-richblack p-6">
      <div>
        <ul className="flex justify-center space-x-6 text-sm font-medium text-gray-300 sm:space-x-14 sm:text-2xl">
          <li className="duration-200 hover:scale-125">
            <a href="#about">About</a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a href="#projects">Projects</a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a href="#experience">Experience</a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a href="#resume">Resume</a>
          </li>
          <li className="duration-200 hover:scale-125">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
