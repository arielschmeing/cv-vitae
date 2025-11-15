import { CERTIFICATIONS } from "../../../constants/content.constants";
import SectionWrapper from "../SectionWrapper/SectionWrapper.component";
import Styles from "./Certifications.module.css"

export default function Certifications() {
    return (
        <SectionWrapper title="🏆 Certificações e Cursos">
            <ul className={Styles.container}>
            {CERTIFICATIONS.map(certification => 
                <li className={Styles.item} key={certification.name}>
                    <strong>{certification.name}</strong>
                    <span className={Styles.date}>{certification.year}</span>
                </li>
            )}
            </ul>
        </SectionWrapper>
    )
}