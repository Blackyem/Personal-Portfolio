import styles from "@/sections/Skills/SkillsStyles.module.css";
import checkMarkIcon from "@/assets/checkmark-dark.svg";
import SkillList from "@/BrightFrame/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skills="HTML" />
        <SkillList src={checkMarkIcon} skills="CSS" />
        <SkillList src={checkMarkIcon} skills="MUI" />
        <SkillList src={checkMarkIcon} skills="JavaScript" />
        <SkillList src={checkMarkIcon} skills="TypeScript" />
        <SkillList src={checkMarkIcon} skills="Node JS" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skills="React" />
        <SkillList src={checkMarkIcon} skills="Angular" />
        <SkillList src={checkMarkIcon} skills="Vue" />
        <SkillList src={checkMarkIcon} skills="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skills="Sass" />
        <SkillList src={checkMarkIcon} skills="Prettier" />
        <SkillList src={checkMarkIcon} skills="Material UI-(MUI)" />
      </div>
      <hr />
      <div className={styles.skillsList}>
        <SkillList src={checkMarkIcon} skills="Redux" />
        <SkillList src={checkMarkIcon} skills="Next JS" />
        <SkillList src={checkMarkIcon} skills="Postman" />
        <SkillList src={checkMarkIcon} skills="Figma" />
        <SkillList src={checkMarkIcon} skills="Git" />
        <SkillList src={checkMarkIcon} skills="Jest" />
        <SkillList src={checkMarkIcon} skills="Vitest" />
        <SkillList src={checkMarkIcon} skills="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
