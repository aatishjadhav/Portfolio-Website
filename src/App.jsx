import "./App.css";
import About from "./components/About";
// import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import EdSkill from "./components/EdSkill";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <EdSkill />
      {/* <Blogs /> */}
      <Contact />
    </div>
  );
}

export default App;
