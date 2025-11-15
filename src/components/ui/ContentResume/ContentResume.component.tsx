import Certifications from "../Certifications/Certifications.component"
import Contact from "../Contacts/Contacts.component"
import Languages from "../Languages/Languages.component"
import TechSkills from "../TechSkills/TechSkills.component"
import Styles from "./ContentResume.module.css"

export default function ContentResume() {
    return (
        <aside className={Styles.container}>
            <Contact />
            <TechSkills />
            <Languages />
            <Certifications />
        </aside>
    )
}