import styles from './rowdisplay.module.css';
import Image from 'next/image';
import EditDisplay from './EditDisplay';
import { useEffect, useState } from 'react';
import { changeQuantity } from '@/utility/database/supabase/changequantity';
import ManaIcon from '@/app/components/globals/ManaIcon';

export default function RowDisplay({card, setUpdateNeeded, collection, setCollection}) {

    const [editing, setEditing] = useState(false);

    function toggleEdit(card) {
        setEditing(!editing);
    }


    async function saveEdit() {
        setEditing(false)
        changeQuantity(card, card.quantity, card.user_id)
        setUpdateNeeded(true);
    }


    function incrementQuantity() {
        let newCollectionQuantity = [...collection] // copy the collection
        newCollectionQuantity.forEach(type => { // map through the groups of cards
            type.cards.forEach(cardInCollection => { // map through the individiual types of cards
                if (cardInCollection.id === card.id) { // if the card in the collection matches the card we are looking at
                    cardInCollection.quantity++ // increment the quantity
                }
            })
        }
        )
        setCollection([...newCollectionQuantity])

    }


    function decrementQuantity() {
        // find the card in the collection
          // decrement the quantity
             // set the collection to the new collection
        let newCollectionQuantity = [...collection]
        newCollectionQuantity.forEach(type => {
             type.cards.forEach(cardInCollection => {
                 if (cardInCollection.id === card.id) {
                     cardInCollection.quantity--
                 }
             })
         }
         )
         setCollection([...newCollectionQuantity])
    }

    return (<>
    <div className={styles.rowdisplay}>
    <p>{card.card_name}</p>
    <div className={styles.colorIcons}>
    {card.colors?.length > 0 ? card.colors.map((color, i)=> {return <ManaIcon key={i} color={color} fill='filled' size={15}/>}) : <ManaIcon color='C' fill='filled' size={15}/> }
    </div>
    <p>{card.supertype}</p>
    <p>{card.subtype}</p>
    <div className={styles.rarity}>
    <Image src={`/rarity/${card.rarity}.svg`} alt={card.rarity} width={30} height={50}/>
    </div>
    {/* <p>{card.rarity}</p> */}
    <ManaIcon fill='filled' size={15} num={card.cmc}/>
    <p>£{card.price}</p>
    {editing ? <EditDisplay quantity={card.quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/> : <p>x{card.quantity}</p>}
    {editing ? (card.quantity > 0 ? <button className={styles.editButton} onClick={saveEdit}>✔️</button> : <button className={styles.editButton} onClick={saveEdit}>🗑️</button>) : <button className={styles.editButton} onClick={()=> toggleEdit(card)}>✎</button>}
</div>
<div className={styles.hidden}><Image src={card.img} alt={card.card_name} width={280} height={400}/></div>
</>)
}