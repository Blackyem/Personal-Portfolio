import "./App.css";
import Header from "./sections/Header/Header";
import Showcase from "./sections/Showcase/Showcase";
import About from "./sections/About/About";
import Technologies from "./sections/Technologies/Technologies";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Showcase />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
