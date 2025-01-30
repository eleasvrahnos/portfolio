import { footerDataEN, footerDataGR } from "../data/footer";
import { useLocale } from "../LocaleContext";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  const { locale } = useLocale();
  const footerData = locale === "en" ? footerDataEN : footerDataGR;

  return (
    <div className="flex flex-col justify-center gap-2 p-6 text-center text-milk">
      <hr className="border-1 border-milk" />
      <h1 className="pt-2 text-2xl font-bold">{footerData.connect}</h1>
      <div className="flex justify-center">
        <ContactIcons />
      </div>
      <div>
        <h1>© 2025 {footerData.name}</h1>
        <h1 className="mx-3">
          {footerData.description1}{" "}
          <span
            className="cursor-pointer text-frappelight2 duration-100 hover:text-frappelight1"
            onClick={() =>
              window.open(
                "https://en.wikipedia.org/wiki/Frapp%C3%A9_coffee",
                "_blank",
              )
            }
          >
            {footerData.description2}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
