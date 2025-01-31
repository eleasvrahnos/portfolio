import { MapPin } from "lucide-react";
import React from "react";
import { photo } from "../assets/header/headerIcons";
import { headerDataEN, headerDataGR } from "../data/header";
import { useLocale } from "../LocaleContext";
import ContactIcons from "./ContactIcons";

const Header: React.FC = () => {
  const { locale } = useLocale();
  const headerData = locale === "en" ? headerDataEN : headerDataGR;

  return (
    <header className="flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="font-raleway">{headerData.name}</h1>
        <p>{headerData.title}</p>
        <div className="flex items-center text-xs">
          <MapPin size={18} className="mr-1" />
          <p>{headerData.location}</p>
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
