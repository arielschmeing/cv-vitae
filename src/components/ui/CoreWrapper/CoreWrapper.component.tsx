import type { ReactNode } from "react"
import Styles from "./CoreWrapper.module.css"

interface CoreWrapperProps {
    title: string
    children: ReactNode
}

export default function CoreWrapper({ title, children }: CoreWrapperProps) {
    return (
        <section>
            <h3 className={Styles.title}>{title}</h3>
            {children}
        </section>
    )
}