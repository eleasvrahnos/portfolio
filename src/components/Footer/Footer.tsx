import linkedinLogo from "../../assets/footerLinks/linkedinLogo.png";
import githubLogo from "../../assets/footerLinks/githubLogo.png";
import mailLogo from "../../assets/footerLinks/mailLogo.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <h1 className="pt-6 text-center text-2xl font-bold text-slate-200"> Connect with me! </h1>
      <div className="flex justify-center gap-4 p-4">
        <a href="https://www.linkedin.com/in/eleasvrahnos/" target="_blank">
          <img
            className="h-14 duration-200 hover:scale-110"
            src={linkedinLogo}
          />
        </a>
        <a href="https://github.com/eleasvrahnos" target="_blank">
          <img 
            className="h-14 duration-200 hover:scale-110"
            src={githubLogo} 
          />
        </a>
        <a href="mailto:evrahnos@chapman.edu" target="_blank">
          <img
            className="h-14 duration-200 hover:scale-110"
            src={mailLogo}
          />
        </a>
      </div>
      <div className="pb-6 text-center text-slate-200">
        <h1>© 2024 Eleas Vrahnos</h1>
        <h1>
          This website was created with a React front-end, using Tailwind CSS.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
