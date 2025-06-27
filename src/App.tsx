

import "./App.css";
import Projects from "./sections/Projects/Projects";
import Showcase from "./sections/Showcase/Showcase";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
console.log("App");
  return (
    <>
     <Showcase />
     <Projects/>
     <Skills />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
