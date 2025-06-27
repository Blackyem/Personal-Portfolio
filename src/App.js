import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import Projects from "./sections/Projects/Projects";
import Showcase from "./sections/Showcase/Showcase";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
function App() {
    console.log("App");
    return (_jsxs(_Fragment, { children: [_jsx(Showcase, {}), _jsx(Projects, {}), _jsx(Skills, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
