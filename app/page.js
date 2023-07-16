import styles from './page.module.css'
import NavButton from './components/globals/NavButton'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  
  return (
    <main className={styles.main}>

       <div className={styles.title}>
       <Image src="/logo/jankboxblack.svg" alt="Jank Box Logo" width={150} height={150} />
       <h1>JankBox</h1>
       </div>
       <h2>MTG Collection Manager</h2>
        <Link href='/login'><button className={styles.logInButton}>Create An Account or Log In</button></Link>
       <NavButton location="userCollection"/>
        <NavButton location="addCardsToCollection"/>

    </main>
  )
}
