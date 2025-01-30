import { FileUser, Github, Linkedin, Mail } from "lucide-react";
import Resume from "../assets/header/resume.pdf";

const ContactIcons = () => {
  return (
    <div className="flex flex-row gap-1">
      <div
        className="button h-8 w-8"
        onClick={() =>
          window.open("https://www.linkedin.com/in/eleasvrahnos/", "_blank")
        }
      >
        <Linkedin size={18} />
      </div>
      <div
        className="button h-8 w-8"
        onClick={() => window.open("https://github.com/eleasvrahnos", "_blank")}
      >
        <Github size={18} />
      </div>
      <div
        className="button h-8 w-8"
        onClick={() => window.open("mailto:evrahnos1966@gmail.com", "_blank")}
      >
        <Mail size={18} />
      </div>
      <div
        className="button h-8 w-8"
        onClick={() => window.open(Resume, "_blank")}
      >
        <FileUser size={18} />
      </div>
    </div>
  );
};

export default ContactIcons;
