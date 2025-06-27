import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "@/BrightFrame/ProjectCard";
import StreamApp1r from "@/assets/StreamApp1r.png";
import OnlineShop3r from "@/assets/OnlineShop3r.png";
import MovieRoom5R from "@/assets/MovieRoom5R.png";
import CameraFlower from "@/assets/CameraFlower.png";
function Projects() {
    return (_jsxs("section", { id: "projects", className: styles.container, children: [_jsx("h1", { className: "sectionTitle", children: "Projects" }), _jsxs("div", { className: styles.projectsContainer, children: [_jsx(ProjectCard, { src: StreamApp1r, link: "https://github.com/Blackyem?tab=repositories", h3: "Viberr", p: "Streaming App" }), _jsx(ProjectCard, { src: OnlineShop3r, link: "https://github.com/Blackyem?tab=repositories", h3: "Summer Sale", p: "Trusted delivery" }), _jsx(ProjectCard, { src: MovieRoom5R, link: "https://github.com/Blackyem?tab=repositories", h3: "Movies Room", p: "Movie search" }), _jsx(ProjectCard, { src: CameraFlower, link: "https://github.com/Blackyem?tab=repositories", h3: "ReachMe", p: "Selected images" })] })] }));
}
export default Projects;
