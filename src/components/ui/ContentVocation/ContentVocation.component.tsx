import Academic from "../Academic/Academic.component"
import Experience from "../Experience/Experience.component"
import Projects from "../Projects/Projects.components"
import Styles from "./ContentVocation.module.css"

export default function ContentVocation() {
    return (
        <section className={Styles.container}>
            <Experience />
            <Academic />
            <Projects />
        </section>
    )
}