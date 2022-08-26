import Logo from "./logo"
import styles from 'styles/footer.module.css'
import Container from "components/container"

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo />
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    )
}