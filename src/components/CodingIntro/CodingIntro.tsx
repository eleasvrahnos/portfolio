import professionalPhoto from "../../assets/codingIntro/ProfessionalPFPCropped.jpg";
import ContactLinks from "../ContactLinks/ContactLinks";

const CodingIntro = () => {
  return (
    <section className="text-gray-300">
      <div className="flex flex-col items-center justify-center gap-x-6 pt-6 text-2xl md:flex-row md:py-6 md:text-3xl">
        <img
          src={professionalPhoto}
          className="max-w-40 rounded-full"
          alt="professional-portrait"
        />
        <div className="my-[10vw] flex flex-col text-ashgray sm:my-12 md:my-0">
          <h1 className="h-[10vw] text-[6vw] md:h-auto md:text-3xl">
            Hi there, my name is
          </h1>
          <h1 className="h-[10vw] text-center text-[14vw] font-bold md:h-auto md:text-7xl">
            Eleas Vrahnos
          </h1>
          <h1 className="h-[10vw] text-right text-[6vw] md:h-auto md:text-3xl">
            and I like to make cool stuff
          </h1>
        </div>
      </div>
      <div>
        <div className="text-md mx-4 text-balance text-center text-gray-300 sm:text-xl">
          <h1>Thanks for stopping by my portfolio!</h1>
          <h1>
            I am a{" "}
            <span className="font-bold text-gray-300">
              full-stack software engineer and web developer
            </span>{" "}
            driven by continuous learning and discovery.
          </h1>
          <h1>
            As a recent graduate of Chapman University, I am actively looking
            for new opportunities to help me grow in the space.
          </h1>
          <h1>
            Away from the computer, I like to play/compose music, rock climb, and play video games.
          </h1>
          <h1>
            Feel free to connect with me on LinkedIn and contact me through my
            socials!
          </h1>
        </div>
      </div>
      <ContactLinks />
    </section>
  );
};

export default CodingIntro;
