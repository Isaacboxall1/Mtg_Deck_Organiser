import styles from './cardDisplayShort.module.css'
import { useEffect, useState } from "react"
import { convertManaCostToArray } from "@/utility/functions/convertManaCostToArray"
import ManaIcon from "../ManaIcon"
export default function CardDisplayShort({card}) {

    const {card_name, quantity, card_image, mana_cost} = card
    const [manaCost, setManaCost] = useState([])

    useEffect(()=> {
        let formattedManaCost = convertManaCostToArray(mana_cost)
        setManaCost(formattedManaCost)
    }, [mana_cost, card])

    return (
        <>
        <div>
            <h1>{card_name}</h1>
            <h1>{quantity}</h1>
            {manaCost.map((mana, index)=> {return <ManaIcon key={index} value={mana}/>})}
            <h1>{manaCost}</h1>
        </div>
        {/* <Image src={card_image} className={styles.hidden} alt={card_name} width={200} height={300} /> */}
        </>
    )
}