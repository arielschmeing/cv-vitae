import { EXPERIENCES } from "../../../constants/content.constants";
import CoreWrapper from "../CoreWrapper/CoreWrapper.component";
import Styles from "./Experience.module.css"

export default function Experience() {
    return (
        <CoreWrapper title="💼 Experiência Profissional">
            <div className={Styles.timeline}>
            {EXPERIENCES.map(experience =>
                <article className={Styles.container__item} key={experience.name}>
                    <div className={Styles.markdown}></div>
                    <div className={Styles.item__content}>
                        <div className={Styles.item__header}>
                            <h4 className={Styles.role}>{experience.role}</h4>
                            <span className={Styles.name}>{experience.name}</span>
                        </div>
                        <p className={Styles.period}>{experience.period}</p>
                        <ul className={Styles.responsibilities}>
                        {experience.responsibilities.map(res =>
                            <li key={res}>{res}</li>
                        )}
                        </ul>
                        <div className={Styles.techs}>
                        {experience.techs.map(tech =>
                            <span className={Styles.tech} key={tech}>{tech}</span>
                        )}
                        </div>
                    </div>
                </article>
            )}
            </div>
        </CoreWrapper>
    )
}