import styles from './deckname.module.css'

export default function UserDeckDisplay({ params }) {

  const exampleCard = {
    card_id: '1234',
    card_name: 'Charging Badger',
    quantity: 2,
    card_type: 'Creature',
    mana_cost: '{1}{G}{G}',
    price: 0.25,
    card_image: 'https://scryfall.com/card/ktk/126/charging-badger',
    commander: false,
    sideboard: false,
  }
  
  return (
    <div className={styles.PageContainer}>
      <h1> This Deck Displays the deck titled {params.deckname}. Created by the user named {params.user}</h1>
    </div>
  );
}