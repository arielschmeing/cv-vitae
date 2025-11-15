import { APP } from "../../../constants/app.constants";
import { HEADER } from "../../../constants/content.constants";
import Styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={Styles.container}>
            <img {...HEADER.img} className="foto-perfil"/>

            <div className={Styles.content}>
                <h1 className={Styles.full__name}>{APP.name}</h1>
                <h2 className={Styles.role}>{`${APP.role_type} | ${APP.role_primary}`}</h2>
                <p className={Styles.resume}>{HEADER.resume}</p>
            </div>
        </header>
    )
}