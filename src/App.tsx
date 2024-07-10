import Navbar from "./components/Navbar/Navbar";
import CodingIntro from "./components/CodingIntro/CodingIntro";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div
      id="top"
      className="bg-gradient-to-b from-black from-5% to-gray-300 to-80%"
    >
      <Navbar />
      <CodingIntro />
      <TechStack />
    </div>
  );
}

export default App;
