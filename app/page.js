"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "./components/ContextProvider";

// TODO: Page is very slow on initial load, reduce image sizes and work out how to use server side rendering for images
// TODO: Add a loading screen
// TODO: Add a footer
// TODO: Add a favicon
// TODO: Add a manifest.json

// TODO: Style the search page
// TODO: Style the bulk add page
// TODO: Style the collection display page
// TODO: Style the login page
// TODO: Style the register page

// TODO: Add a 404 page
// TODO: Add a deck builder page
// TODO: Add backend support for decks
// TODO: Add a deck display page
// TODO: Add a deck edit page
// TODO: Add a deck browser page
// TODO: Add a deck search page


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
        <Link href="/Login" className={styles.link} id={styles.logIn}>
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
