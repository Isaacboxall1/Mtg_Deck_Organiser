import styles from './page.module.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ family: 'Comfortaa', weight: 400, style: 'normal' })

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Jank Box</h1>
       <p>MTG deck organiser coming soon</p>
      </div>
    </main>
  )
}
