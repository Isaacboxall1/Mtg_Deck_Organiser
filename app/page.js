import styles from './page.module.css'
import NavButton from './components/globals/NavButton'
export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Jank Box</h1>
       <NavButton location="userCollection"/>
        <NavButton location="addCardsToCollection"/>
      </div>
    </main>
  )
}
