import { LANGUAGES } from "../../../constants/content.constants"
import SectionWrapper from "../SectionWrapper/SectionWrapper.component"
import Styles from "./Languages.module.css"

export default function Languages() {
    return (
        <SectionWrapper title="🌍 Idiomas">
            <div className={Styles.container}>
            {LANGUAGES.map(language => 
                <div className={Styles.language} key={language.name}>
                    <span className={Styles.name}>{language.name}</span>
                    <div className={Styles.bar__level}>
                        <div className={`${Styles.level} ${Styles[language.level]}`}></div>
                    </div>
                    <span>{language.level_type}</span>
                </div>
            )}
            </div>
        </SectionWrapper>
    )
}