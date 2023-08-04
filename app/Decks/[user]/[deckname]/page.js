'use client'

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

  return (
    <div className={styles.PageContainer}>
      <h1> This Deck Displays the deck titled {params.deckname}. Created by the user named {params.user}</h1>
      <CardDisplayShort card={exampleCard} />
    </div>
  );
}