import resume from "../../assets/codingIntro/resume.pdf";
import resumeIcon from "../../assets/contactImages/resumeIcon.png";
import { linkData } from "../../data/linkStack";
import ContactIcon from "./ContactIcon";

const ContactLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 min-[480px]:flex-row">
      <div className="flex justify-center gap-4 p-4">
        {linkData.map((links, id) => {
          return <ContactIcon key={id} {...links} />;
        })}
      </div>
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-32 items-center rounded bg-white px-2 py-1 font-bold text-black duration-200 hover:bg-gray-400"
      >
        <img src={resumeIcon} alt="Resume" className="h-12" />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default ContactLinks;
