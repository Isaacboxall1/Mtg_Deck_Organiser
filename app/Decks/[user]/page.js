import styles from './alluserdecks.module.css'
import DeckPreview from '@/app/components/DeckPreview';
export default function UserDecks({ params }) {
  
  const deckDetails = {
    user: params.user,
    title: "Gisa Deck",
    colors: ["B", ],
    format: "EDH/Commander",
    date: "1 day ago",
    cardArt:
      "https://cards.scryfall.io/art_crop/front/7/7/779e3944-4342-4151-9963-87e8d41fd2ff.jpg?1680135257",
  };

  const deckDetails2 = {
    user: params.user,
    title: "Flicker Fun",
    colors: ["U", "G", "W"],
    format: "EDH/Commander",
    date: "1 day ago",
    cardArt:
      "https://cards.scryfall.io/art_crop/front/9/9/998d0cc8-ca2a-41c3-ab65-d05c26ab8278.jpg?1673149399",
  };
  const deckDetails3 = {
    user: params.user,
    title: "Jenara +1",
    colors: ["U", "G", "W"],
    format: "EDH/Commander",
    date: "1 day ago",
    cardArt:
    "https://cards.scryfall.io/art_crop/front/4/b/4bcf5b5f-b908-4975-91f7-c4c6f819e0a6.jpg?1673485098"
  };
  const deckDetails4 = {
    user: params.user,
    title: "Calix Aura Rush",
    colors: ["W", "G"],
    format: "Standard",
    date: "1 day ago",
    cardArt:
    "https://cards.scryfall.io/art_crop/front/0/a/0a707ab3-b9b5-422a-8b0f-e963d3ad6606.jpg?1684340668"
  }
  const deckDetails5 = {
    user: params.user,
    title: "Goblins",
    colors: ["R"],
    format: "Modern",
    date: "1 Month ago",
    cardArt:
    "https://cards.scryfall.io/art_crop/front/c/d/cd9fec9d-23c8-4d35-97c1-9499527198fb.jpg?1601078209"
  }
  const deckDetails6 = {
    user: params.user,
    title: "Hollow Vine",
    colors: ["U", "G", "R", "B"],
    format: "Vintage",
    date: "6 days ago",
    cardArt:
    "https://cards.scryfall.io/art_crop/front/2/6/26bfde99-7761-48e1-851a-522f888d0f6c.jpg?1547517482"
  }





  const DeckArray = [
    deckDetails,
    deckDetails2,
    deckDetails3,
    deckDetails4,
    deckDetails5,
    deckDetails6,
  ]

  return (
    <div className={styles.PageContainer}>
      <h1 className={styles.PageTitle}>{params.user}&#39;s Decks</h1>
      <div className={styles.DeckList}>
        {DeckArray.map((deck, index) => {
          return <DeckPreview key={index} deckDetails={deck} />;
        })}
      </div>
    </div>
  );
}
