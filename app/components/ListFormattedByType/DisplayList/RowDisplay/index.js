import styles from './rowdisplay.module.css';
import Image from 'next/image';
import EditDisplay from './EditDisplay';
import { useEffect, useState } from 'react';
import { changeQuantity } from '@/utility/database/changequantity';

export default function RowDisplay({card, setUpdateNeeded, collection, setCollection}) {

    const [editing, setEditing] = useState(false);

    

    function toggleEdit(card) {
        setEditing(!editing);
    }


    async function saveEdit() {
        setEditing(false)
 
        changeQuantity(card, card.quantity, card.user_id)
        console.log(`quantity of ${card.card_name} with id of ${card.id} changed to ${card.quantity} for user ${card.user_id}`)
        setUpdateNeeded(true);
    }


    function incrementQuantity() {
       // find the card in the collection
         // increment the quantity
            // set the collection to the new collection
        let newCollectionQuantity = [...collection]
        newCollectionQuantity.forEach(type => {
            type.cards.forEach(cardInCollection => {
                if (cardInCollection.id === card.id) {
                    cardInCollection.quantity++
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
    <p>{card.colors?.map(color=> {return color})}</p>
    <p>{card.supertype}</p>
    <p>{card.subtype}</p>
    <p>{card.rarity}</p>
    <p>{card.cmc}</p>
    <p>£{card.price}</p>
    {editing ? <EditDisplay quantity={card.quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/> : <p>x{card.quantity}</p>}
    {editing ? <button onClick={saveEdit}>✔️</button> : <button onClick={()=> toggleEdit(card)}>✎</button>}
</div>
<div className={styles.hidden}><Image src={card.img} alt={card.card_name} width={280} height={400}/></div>
</>)
}