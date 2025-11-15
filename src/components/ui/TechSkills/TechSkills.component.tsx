import { TECH_SKILLS } from "../../../constants/content.constants"
import SectionWrapper from "../SectionWrapper/SectionWrapper.component"
import Styles from "./TechSkills.module.css"

export default function TechSkills() {
    return (
        <SectionWrapper title="🛠️ Habilidades Técnicas">
            <div className={Styles.container}>
            {TECH_SKILLS.map(skill =>
                <span className={Styles.skill} key={skill}>{skill}</span>
            )}
            </div>
        </SectionWrapper>
    )
}