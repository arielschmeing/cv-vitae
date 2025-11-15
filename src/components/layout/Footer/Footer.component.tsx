import useFooter from "./Footer.hook"
import Styles from "./Footer.module.css"

export default function Footer() {
    const { createPDF } = useFooter()
    
    return (
        <footer className={Styles.container}>
            <div className={Styles.actions}>
                <a href="#" onClick={createPDF} className={`${Styles.button__action} ${Styles.button__primary}`}>📄 Baixar PDF</a>
                <a href="https://github.com/arielschmeing" className={`${Styles.button__action} ${Styles.button__secondary}`}>💼 Ver Portfólio</a>
                <a href="mailto:ariel.schmeing@proton.me" className={`${Styles.button__action} ${Styles.button__secondary}`}>📧 Entrar em Contato</a>
            </div>

            <aside className={Styles.info}>
                <p>&copy; 2025 Ariel Schmeing. Todos os direitos reservados.</p>
                <p className={Styles.update}>Última atualização: Janeiro 2025</p>
            </aside>
        </footer>
    )
}