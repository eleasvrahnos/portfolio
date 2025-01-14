import professionalPhoto from './ProfessionalPFPCropped.jpg';
import centerpieceGray from './centerpieceGray.png';

const Intro = () => {
  return (
    <div id="intro" className="flex h-screen flex-col text-gray-300">
      <div id="introInfo" className="flex flex-row items-center justify-center gap-12 pt-14">
        <img id="introInfoImage" className="h-40 rounded-full" src={professionalPhoto} alt="" />
        <div id="introInfoText" className="text-center text-6xl">
          <p>Hey there! I'm <span className="font-['Brush_Script_MT']">Eleas Vrahnos</span>!</p>
        </div>
      </div>
      <div id="introChoice" className="flex grow flex-col text-4xl">
        <p id="introChoiceTopText" className="m-16 ml-[10%] grow-0 text-left">I'm a passionate...</p>
        <div id="introChoiceSelect" className="relative flex grow items-center justify-center">
          <canvas id="introChoiceSelectLeft" className="absolute left-0 h-full w-full translate-x-[-95%] bg-blue-400 transition-transform duration-500 hover:translate-x-[-5%]">
          </canvas>
          <img id="introChoiceSelectCenterDefault" className="z-10 flex h-52 w-3/4 max-w-max" src={centerpieceGray} alt="" />
          <canvas id="introChoiceSelectRight" className="absolute right-0 h-full w-full translate-x-[95%] bg-red-400 transition-transform duration-500 hover:translate-x-[5%]"></canvas>
        </div>
        <p id="introChoiceBottomText" className="m-16 mr-[10%] grow-0 text-right">
          ...looking to change the world one <span id="introChoiceBottomTextWord" className="bg-gray-300 font-mono text-black">step</span> at a time.
        </p>
      </div>
    </div>
  );
}

export default Intro;