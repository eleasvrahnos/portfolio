import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="flex items-center justify-center bg-frappedark3">
      <div className="w-3/4 space-y-5 pt-20 md:w-1/2">
        <Navbar />
        <Header />
        <AboutMe />
        <Technologies />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
