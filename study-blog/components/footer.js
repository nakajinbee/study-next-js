import Logo from "./logo"
import styles from 'styles/footer.module.css'
import Container from "components/container"
import Social from "./social"

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container large>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Social />
                </div>
            </Container>
        </footer>
    )
}