import styles from "./ShowcaseStyles.module.css";
import profile from "@/assets/Blackyem.jpeg";
import cv from "@/assets/OladipupoAhmed-Cv-FrontendDev.pdf";
import { TechIcon, type TechName } from "@/BrightFrame/TechIcon";
import { GithubIcon, LinkedinIcon, XIcon } from "@/BrightFrame/Icons";
import { ArrowRight, Download } from "lucide-react";

const TECH: { name: TechName; label: string }[] = [
  { name: "react", label: "React" },
  { name: "typescript", label: "TypeScript" },
  { name: "javascript", label: "JavaScript" },
  { name: "node", label: "Node.js" },
  { name: "mui", label: "MUI" },
];

function Showcase() {
  return (
    <section id="showcase" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="pill">Frontend Developer</span>

          <h1 className={styles.title}>
            Hi, I&apos;m Ahmed
            <br />
            Opeyemi <span className={styles.accent}>Oladipupo</span>
          </h1>

          <p className={styles.tagline}>
            Building fast, responsive and user-focused web applications.
          </p>

          <p className={styles.description}>
            I specialize in creating modern web experiences using React,
            TypeScript, JavaScript and other modern technologies — from business
            websites to interactive applications.
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn btnPrimary">
              View My Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={cv}
              download="Oladipupo-Ahmed-Frontend-CV.pdf"
              className="btn btnOutline"
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/Blackyem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-oladipupo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="https://x.com/Blackyem1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <XIcon size={20} />
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <span className={styles.blob} aria-hidden="true" />
          <span className={styles.dots} aria-hidden="true" />
          <img
            className={styles.portrait}
            src={profile}
            alt="Ahmed Opeyemi Oladipupo"
          />
          <div className={styles.note} aria-hidden="true">
            <span>
              Let&apos;s build
              <br />
              something great!
            </span>
            <svg viewBox="0 0 120 18" className={styles.squiggle}>
              <path
                d="M3 12c14-7 28-7 42 0"
                fill="none"
                stroke="#00a651"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <path
                d="M68 12c14-7 28-7 42 0"
                fill="none"
                stroke="#00a651"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={`container ${styles.techBar}`}>
        {TECH.map((tech) => (
          <div key={tech.name} className={styles.techItem}>
            <TechIcon name={tech.name} size={26} />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;
