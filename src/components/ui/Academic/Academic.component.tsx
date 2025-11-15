import { ACADEMICS } from "../../../constants/content.constants";
import CoreWrapper from "../CoreWrapper/CoreWrapper.component";
import Styles from "./Academic.module.css"

export default function Academic() {
    return (
        <CoreWrapper title="🎓 Formação Acadêmica">
            <div className={Styles.container}>
            {ACADEMICS.map(academic =>
                <div className={Styles.container__item} key={academic.name}>
                    <div className={Styles.info}>
                        <h4 className={Styles.name}>{academic.name}</h4>
                        <p className={Styles.instituation}>{academic.instituation}</p>
                        <p className={Styles.period}>{academic.perid}</p>
                    </div>
                    <div className={Styles.status}>
                        <span className={Styles.badge}>{academic.status}</span>
                    </div>
                </div>
            )}
            </div>
        </CoreWrapper>
    )
}