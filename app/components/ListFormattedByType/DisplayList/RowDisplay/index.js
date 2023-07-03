import styles from './rowdisplay.module.css';
import Image from 'next/image';
import EditDisplay from './EditDisplay';
import { useEffect, useState } from 'react';

export default function RowDisplay({card, setUpdateNeeded}) {

    const [editing, setEditing] = useState(false);
    const [quantity, setQuantity] = useState(card.quantity);
    

    function toggleEdit(card) {
        setEditing(!editing);
    }


    function saveEdit() {
        setEditing(false)
        console.log(`quantity of ${card.card_name} with id of ${card.id} changed to ${quantity} for user ${card.user_id}`)
        setUpdateNeeded(true);
    }


    function incrementQuantity() {
        setQuantity(quantity + 1);
    }


    function decrementQuantity() {
        setQuantity(quantity - 1);
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
    {editing ? <EditDisplay quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/> : <p>x{quantity}</p>}
    {editing ? <button onClick={saveEdit}>✔️</button> : <button onClick={()=> toggleEdit(card)}>✎</button>}
</div>
<div className={styles.hidden}><Image src={card.img} alt={card.card_name} width={280} height={400}/></div>
</>)
}