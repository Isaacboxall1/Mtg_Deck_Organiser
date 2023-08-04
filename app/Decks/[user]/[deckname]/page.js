'use client'

import DisplayListShort from '@/app/components/ListFormattedByType/DisplayList/DisplayListShort';
import styles from './deckname.module.css'
import CardDisplayShort from '@/app/components/globals/CardDisplayShort';
export default function UserDeckDisplay({ params }) {

  const exampleCard = {
    card_id: '1234',
    card_name: 'Charging Badger',
    quantity: 2,
    card_type: 'Creature',
    mana_cost: '{1}{G}{W}',
    price: 0.25,
    card_image: '',
    commander: false,
    sideboard: false,
  }
  const exampleCard2 = {
    card_id: '1234',
    card_name: 'Nissa, Harbinger of Example Cards',
    quantity: 4,
    card_type: 'Legendary Creature',
    mana_cost: '{3}{G}{G}',
    price: 0.25,
    card_image: '',
    commander: false,
    sideboard: false,
  }
  const exampleCard3 = {
    card_id: '1234',
    card_name: 'Karn, Overpowered planeswalker',
    quantity: 4,
    card_type: 'Legendary Creature',
    mana_cost: '{3}{G}{G}{3}',
    price: 0.25,
    card_image: '',
    commander: false,
    sideboard: false,
  }

  const exampleDeck = [
    exampleCard,
    exampleCard2,
    exampleCard,
    exampleCard3,
    exampleCard,
  ]

  return (
    <div className={styles.PageContainer}>
      <h1> This Deck Displays the deck titled {params.deckname}. Created by the user named {params.user}</h1>
      <DisplayListShort cardArray={exampleDeck} />
      {/* {exampleDeck.map((card, index) => {
        return <CardDisplayShort card={card} key={index}/>
      })} */}
    </div>
  );
}