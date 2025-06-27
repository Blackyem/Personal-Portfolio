import styles from "./ProjectsStyles.module.css";
import ProjectCard from "@/BrightFrame/ProjectCard";
import StreamApp1r  from "@/assets/StreamApp1r.png";
import OnlineShop3r from "@/assets/OnlineShop3r.png";
import MovieRoom5R from "@/assets/MovieRoom5R.png";
import CameraFlower from "@/assets/CameraFlower.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={StreamApp1r}
          link="https://github.com/Blackyem?tab=repositories"
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={OnlineShop3r}
          link="https://github.com/Blackyem?tab=repositories"
          h3="Summer Sale"
          p="Trusted delivery"
        />
        <ProjectCard
          src={MovieRoom5R}
          link="https://github.com/Blackyem?tab=repositories"
          h3="Movies Room"
          p="Movie search"
        />
        <ProjectCard
          src={CameraFlower}
          link="https://github.com/Blackyem?tab=repositories"
          h3="ReachMe"
          p="Selected images"
        />
      </div>
    </section>
  );
}

export default Projects;
