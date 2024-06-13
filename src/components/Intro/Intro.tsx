import professionalPhoto from './ProfessionalPFPCropped.jpg';

const Intro = () => {
  return (
    <div className="text-indigo-500">
      <div className="flex flex-row gap-[50px] justify-center items-center pt-[60px]">
        <img className="h-[150px] rounded-[50%]" src={professionalPhoto} alt="" />
        <div className="text-[55px] text-center">
            <p>Hey there!</p>
            <p>I'm <span className="font-['Brush_Script_MT']">Eleas Vrahnos</span>!</p>
        </div>
      </div>
      <div className="text-[35px] w-auto overflow-hidden">
        <p className="left-[10%] m-[20px]">I'm a passionate...</p>
        <div className="">

        </div>
        <p className="right-[10%] m-[20px]">...looking to change the world one WORD at a time.</p>
      </div>
    </div>
  );
}

export default Intro;