import CodingIntro from "./components/CodingIntro/CodingIntro";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <div id="about" className="bg-richblack">
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>
      <CodingIntro />
      <TechStack />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
