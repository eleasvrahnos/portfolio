import { MapPin } from "lucide-react";
import React from "react";
import { greece, photo, us } from "../assets/header/headerIcons";
import { headerDataEN, headerDataGR } from "../data/header";
import { useLocale } from "../LocaleContext";
import ContactIcons from "./ContactIcons";

const Header: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const headerData = locale === "en" ? headerDataEN : headerDataGR;

  return (
    <header className="flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center">
          <h1 className="font-raleway">{headerData.name}</h1>
          <img
            src={locale === "en" ? greece : us}
            alt="Greece"
            className="ml-2 h-6 w-6 cursor-pointer duration-100 active:scale-90"
            onClick={() => setLocale(locale === "en" ? "gr" : "en")}
          />
        </div>
        <p>{headerData.title}</p>
        <div className="flex items-center text-xs">
          <MapPin size={18} className="mr-1" />
          <p>Yorba Linda, California, US</p>
        </div>
        <ContactIcons />
      </div>
      <img
        src={photo}
        alt="Eleas Vrahnos"
        className="h-24 w-24 rounded-full sm:h-48 sm:w-48"
      />
    </header>
  );
};

export default Header;
