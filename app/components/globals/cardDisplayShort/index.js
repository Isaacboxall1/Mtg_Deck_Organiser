import Image from "next/image"
import styles from './cardDisplayShort.module.css'
export default function cardDisplayShort({card}) {

    const {card_name, quantity, card_image, mana_cost} = card
    
    return (
        <>
        <div>
            <h1>{card_name}</h1>
            <h1>{quantity}</h1>
            {mana_cost.forEach((card, index)=> {
                return <
            })}
        </div>
        <Image src={card_image} className={styles.hidden} alt={card_name} width={200} height={300} />
        </>
    )
}