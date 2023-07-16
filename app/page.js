import styles from './page.module.css'
import NavButton from './components/globals/NavButton'
import Link from 'next/link'
import Image from 'next/image'
import LogInButton from './components/globals/LogInButton'
export default function Home() {
  
  return (
    <main className={styles.main}>

       <div className={styles.title}>
       <Image src="/logo/jankboxblack.svg" alt="Jank Box Logo" width={150} height={150} />
        <div className={styles.titleAndSub}>
          <h1>JankBox</h1>
          <h2>MTG Collection Manager</h2>
        </div>
       </div>
       <LogInButton/>
       <NavButton location="userCollection"/>
        <NavButton location="addCardsToCollection"/>

    </main>
  )
}
