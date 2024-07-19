import ContactLinks from "../ContactLinks/ContactLinks";

const Footer = () => {
  return (
    <div className="bg-black">
      <h1 className="pt-6 text-center text-2xl font-bold text-slate-200"> Connect with me! </h1>
      <ContactLinks />
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
