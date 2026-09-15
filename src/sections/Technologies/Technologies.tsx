import { TechIcon, type TechName } from "@/BrightFrame/TechIcon";
import styles from "./TechnologiesStyles.module.css";

interface TechItem {
  name: string;
  icon: TechName;
}

const GROUPS: { title: string; items: TechItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "MUI", icon: "mui" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "REST APIs", icon: "restapi" },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Figma", icon: "figma" },
      { name: "Postman", icon: "postman" },
    ],
  },
];

function Technologies() {
  return (
    <section id="skills" className={`section ${styles.section}`}>
      <div className="container">
        <h2 className="sectionTitle">Technologies I Work With</h2>

        <div className={styles.grid}>
          {GROUPS.map((group) => (
            <div key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <TechIcon name={item.icon} size={26} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
