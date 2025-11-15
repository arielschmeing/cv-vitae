import ContentResume from "../../ui/ContentResume/ContentResume.component"
import ContentVocation from "../../ui/ContentVocation/ContentVocation.component"
import Styles from "./Content.module.css"

export default function Content() {
    return (
        <div className={Styles.container}>
            <ContentResume />
            <ContentVocation />
        </div>
    )
}