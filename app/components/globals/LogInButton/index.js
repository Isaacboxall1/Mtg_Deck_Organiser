import Link from "next/link"
import styles from './loginbutton.module.css'
export default function LogInButton() {

    return (
        <div>
                    <Link href='/login'><button className={styles.logInButton}>Create An Account or Log In</button></Link>
        </div>
    )
}