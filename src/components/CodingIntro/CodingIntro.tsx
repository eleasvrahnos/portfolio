import professionalPhoto from "../../assets/codingIntro/ProfessionalPFPCropped.jpg";

const CodingIntro = () => {
  return (
    <section className="text-gray-300">
      <div className="flex flex-col items-center justify-center space-x-6 pb-12 pt-6 text-2xl md:flex-row md:py-12 md:text-3xl">
        <img
          src={professionalPhoto}
          className="h-40 rounded-full"
          alt="professional-portrait"
        />
        <div className="mt-5 flex flex-col text-ashgray md:mt-0">
          <h1 className="">Hi there, my name is</h1>
          <h1 className="text-5xl font-bold md:text-7xl">Eleas Vrahnos</h1>
          <h1 className="text-right">and I like to make cool stuff</h1>
        </div>
      </div>
      <div>
        <div className="mx-10 text-center text-xl text-gray-300">
          <h1>Thanks for stopping by my portfolio!</h1>
          <h1>
            I am a{" "}
            <span className="font-bold text-gray-300">
              full-stack software engineer
            </span>{" "}
            driven by continuous learning and discovery.
          </h1>
          <h1>
            As a recent graduate of Chapman University, I am actively looking
            for new opportunities to help me grow in the space.
          </h1>
          <h1>
            Feel free to connect with me on LinkedIn or contact me through my
            socials!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CodingIntro;
