import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/BrightFrame/Icons";
import styles from "./ProjectCardStyles.module.css";

interface ProjectCardProps {
  src: string;
  link: string;
  h3: string;
  p: string;
  subtitle?: string;
  tags?: string[];
  liveLink?: string;
}

function ProjectCard({
  src,
  link,
  h3,
  p,
  subtitle,
  tags,
  liveLink,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <img src={src} alt={`${h3} logo`} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{h3}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <p className={styles.description}>{p}</p>

        {tags && tags.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary btnSm"
            >
              Live Demo
              <ArrowRight size={15} />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnGhost btnSm"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
