import Navbar from "./components/Navbar/Navbar";
import CodingIntro from "./components/CodingIntro/CodingIntro";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      id="top"
      className="bg-richblack"
    >
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <CodingIntro />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
