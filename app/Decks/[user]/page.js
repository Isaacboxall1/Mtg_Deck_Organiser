'use client'

import { useAuth } from "@/app/components/ContextProvider";
import styles from "./alluserdecks.module.css";
import DeckPreview from "@/app/components/DeckPreview";
import { DeckArray } from "@/utility/dummydata";

export default function UserDecks({ params }) {

const {user} = useAuth()

let userString = `${params.user}'s Decks`
if (user && params.user == user[0].username) {
  userString = "My Decks"
}

  return (
    <div className={styles.PageContainer}>
      <h1 className={styles.PageTitle}>{userString}</h1>
      <div className={styles.DeckList}>
        {DeckArray.map((deck, index) => {
          return <DeckPreview key={index} deckDetails={deck} />;
        })}
      </div>
    </div>
  );
}
