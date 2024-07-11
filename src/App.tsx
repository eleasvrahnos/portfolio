import Navbar from "./components/Navbar/Navbar";
import CodingIntro from "./components/CodingIntro/CodingIntro";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div
      id="top"
      className="bg-gradient-to-b from-black from-5% to-gray-300 to-80%"
    >
      <div className="sticky top-0">
        <Navbar />
      </div>
      <CodingIntro />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
