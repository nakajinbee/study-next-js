import Logo from "./logo"
import Nav from "./nav"
import styles from 'styles/header.module.css'
import Container from "components/container"

export default function Header() {
    return (
        <header>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo boxOn />
                    <Nav />
                </div>
            </Container>
        </header>
    )
}