import type { ReactNode } from "react"
import Styles from "./SectionWrapper.module.css"

interface SectionWrapper {
    title: string
    children: ReactNode
}

export default function SectionWrapper({ title, children }: SectionWrapper) {
    return (
        <section className={Styles.container}>
            <h3 className="title">{title}</h3>
            {children}
        </section>
    )
}