import styles from './navbar.module.css'
import LogOutButton from '../globals/LogOutButton'
export default function NavBar() {
    return (
        <div className={styles.NavBar}>

            <h1>NavBar</h1>
            <LogOutButton />
        </div>
    )
}