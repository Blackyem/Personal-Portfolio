import styles from "./ProjectsStyles.module.css";
import ProjectCard from "@/BrightFrame/ProjectCard";
import StreamApp1r from "@/assets/StreamApp1r.png";
import OnlineShop3r from "@/assets/OnlineShop3r.png";
import MovieRoom5R from "@/assets/MovieRoom5R.png";
import CameraFlower from "@/assets/CameraFlower.png";

const REPO = "https://github.com/Blackyem?tab=repositories";

const PROJECTS = [
  {
    src: StreamApp1r,
    h3: "Viberr",
    subtitle: "Streaming Web Application",
    p: "A responsive streaming platform that allows users to browse and interact with video content.",
    tags: ["React", "JavaScript", "CSS", "API"],
  },
  {
    src: OnlineShop3r,
    h3: "Summer Sale",
    subtitle: "E-commerce / Delivery Platform",
    p: "A responsive e-commerce experience designed around product discovery, purchasing and delivery.",
    tags: ["React", "JavaScript", "MUI", "API"],
  },
  {
    src: MovieRoom5R,
    h3: "Movies Room",
    subtitle: "Movie Discovery Application",
    p: "A movie search application that allows users to discover movies and explore relevant information.",
    tags: ["React", "API", "JavaScript", "CSS"],
  },
  {
    src: CameraFlower,
    h3: "ReachMe",
    subtitle: "Image / Media Application",
    p: "A responsive application focused on discovering and presenting selected visual content.",
    tags: ["React", "TypeScript", "API"],
  },
];

function Projects() {
  return (
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="sectionTitle">Featured Projects</h2>
        <p className="sectionLead">
          Some of the projects I built. Each one helped me learn, solve real
          problems and improve my skills as a developer.
        </p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.h3}
              src={project.src}
              h3={project.h3}
              subtitle={project.subtitle}
              p={project.p}
              tags={project.tags}
              link={REPO}
              liveLink={REPO}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
