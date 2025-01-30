import ContactIcons from "./ContactIcons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center gap-2 p-6 text-center text-milk">
      <hr className="border-1 border-milk" />
      <h1 className="pt-2 text-2xl font-bold">Connect with me!</h1>
      <div className="flex justify-center">
        <ContactIcons />
      </div>
      <div>
        <h1>© 2025 Eleas Vrahnos</h1>
        <h1 className="mx-3">
          This website was created with React/Tailwind, with a bit of{" "}
          <span
            className="cursor-pointer duration-100 hover:text-frappelight2"
            onClick={() =>
              window.open(
                "https://en.wikipedia.org/wiki/Frapp%C3%A9_coffee",
                "_blank",
              )
            }
          >
            cultural inspiration.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
