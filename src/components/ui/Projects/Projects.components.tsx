import { PROJECTS } from "../../../constants/content.constants";
import CoreWrapper from "../CoreWrapper/CoreWrapper.component";
import Styles from "./Projects.module.css"

export default function Projects() {
    return (
        <CoreWrapper title="🚀 Projetos Destacados">
            <div className={Styles.container}>
            {PROJECTS.map(project =>
                <div className={Styles.container__item} key={project.github}>
                    <h4 className={Styles.title}>{project.title}</h4>
                    <p className={Styles.description}>{project.description}</p>

                    <div className={Styles.techs}>
                    {project.techs.map(tech => 
                        <span className={Styles.tech} key={tech}>{tech}</span>
                    )}
                    </div>
                    <div className={Styles.links}>
                        <a href={project.github} className={Styles.link} target="_blank" >Github</a>
                    </div>
                </div>
            )}
            </div>
        </CoreWrapper>
    )
}