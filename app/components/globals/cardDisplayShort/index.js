import styles from './cardDisplayShort.module.css'
import { useEffect, useState } from "react"
import ManaCost from '../ManaCost'
export default function CardDisplayShort({card}) {

    const {card_name, quantity, card_image, mana_cost} = card

    return (
        <>
        <div className={styles.cardDisplayContainer}>
            <h1 className={styles.cardName}>{card_name}</h1>
            <ManaCost manaCost={mana_cost} size={10} />
            <h1 className={styles.quantity}>x{quantity}</h1>
            
        </div>
        {/* <Image src={card_image} className={styles.hidden} alt={card_name} width={200} height={300} /> */}
        </>
    )
}