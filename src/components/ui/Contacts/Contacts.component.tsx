import { CONTACT } from "../../../constants/content.constants"
import SectionWrapper from "../SectionWrapper/SectionWrapper.component"
import Styles from "./Contacts.module.css"

export default function Contact() {
    return (
        <SectionWrapper title="📞 Contato">
            <div className={Styles.content}>
            {CONTACT.map(contact =>
                <div className={Styles.item__contact} key={contact.name}>
                    <span className="label">{contact.name}</span>
                    <a href={contact.link} className="link__contact">{contact.value}</a>
                </div>
            )}
            </div>
        </SectionWrapper>
    )
}