import { Gauge, Monitor, Palette, Smartphone, Webhook } from "lucide-react";
import styles from "./AboutStyles.module.css";

const FEATURES = [
  { icon: Monitor, label: "Frontend Development" },
  { icon: Palette, label: "UI/UX Implementation" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Webhook, label: "API Integration" },
  { icon: Gauge, label: "Performance Optimization" },
];

function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.visual}>
            <span className={styles.blob} aria-hidden="true" />
            <div className={styles.codeWindow}>
              <div className={styles.codeBar}>
                <span />
                <span />
                <span />
              </div>
              <pre className={styles.code}>
                <code>
                  <span className={styles.kw}>const</span>{" "}
                  <span className={styles.var}>developer</span> = {"{"}
                  {"\n"}  name: <span className={styles.str}>'Ahmed Opeyemi'</span>,
                  {"\n"}  role: <span className={styles.str}>'Frontend Developer'</span>,
                  {"\n"}  stack: [
                  <span className={styles.str}>'React'</span>,{" "}
                  <span className={styles.str}>'TypeScript'</span>],
                  {"\n"}  focus: <span className={styles.str}>'clean, scalable UI'</span>,
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>

          <div className={styles.text}>
            <h2 className="sectionTitle">About Me</h2>
            <p>
              I&apos;m a frontend developer passionate about turning ideas into
              clean, responsive and intuitive digital experiences. I enjoy
              building applications that solve real problems, with a strong
              focus on usability, performance and maintainable code.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m constantly learning new
              technologies and improving the way I approach software
              development.
            </p>
          </div>
        </div>

        <ul className={styles.features}>
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.label} className={styles.feature}>
                <Icon size={22} strokeWidth={1.8} />
                <span>{feature.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default About;
