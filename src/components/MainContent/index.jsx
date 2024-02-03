import Header from "../Header"
import css from "./styles.module.css"


const MainContent = () => {
    return (
        <section className={css.mainContent}>
            <main className={css.content}>
                <Header />
            </main>
        </section>
    )
}

export default MainContent
