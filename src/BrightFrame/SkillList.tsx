 
interface SkillListProps {
    src: string;
    skills: string;
}
  
 function SkillList({ src, skills }: SkillListProps) {
   return (
     <span>
        <img src={src} alt="Checkmark Icon" />
        <p>{skills}</p>
       </span>
   )
 }
 
 export default SkillList
 