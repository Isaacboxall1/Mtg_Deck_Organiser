"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "./components/ContextProvider";
export default function Home() {
  const { user } = useAuth();

  return (
    <main className={styles.main}>
      <div className={styles.Hero}>
        <div className={styles.title}>
          <Image
            src="/logo/jankboxwhite.svg"
            alt="Jank Box Logo"
            width={200}
            height={200}
          />
          <div className={styles.titleAndSub}>
            <h1>JankBox</h1>
            <h2>MTG Collection Manager</h2>
          </div>
        </div>
      </div>
      <div className={styles.navigateContainer}>
        <Link
          href="/addcardstocollection/search"
          className={styles.link}
          id={styles.search}
        >
          <div className={styles.option}>
            <h1>Advanced Search</h1>
            <h4>
              Browse for cards with advanced filters such as color, type,
              legality, and rarity
            </h4>
          </div>
        </Link>
        <Link href="/login" className={styles.link} id={styles.logIn}>
          <div className={styles.option}>
            <h1>Track Your Collection</h1>
            <h4>
              Log In Or Create An Account to start keeping track of your
              collection!
            </h4>
          </div>
        </Link>
        <Link href="/" className={styles.link} id={styles.deckBuilder}>
          <div className={styles.option}>
            <h1>View Community Decks</h1>
            <h4>Coming Soon! </h4>
          </div>
        </Link>
      </div>
    </main>
  );
}
