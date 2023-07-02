import styles from './displaylist.module.css';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

export default function DisplayList({cardArray}) {


    return (
    
        <div id={styles.displaylistparent}>
            {cardArray.map((card, index) => {
                return (
                    <>
                    <div className={styles.displaylistchild} key={index}>
                        <p>name: {card.card_name}</p>
                        <p>colors: {card.colors?.map(color=> {return color})}</p>
                        <p>type: {card.type}</p>
                        <p>rarity: {card.rarity}</p>
                        <p>cmc: {card.cmc}</p>
                        <p>value: £{card.price}</p>
                        <p>x{card.quantity}</p>
                    </div>
                    <div className={styles.hidden}><Image src={card.img} alt={card.card_name} width={280} height={400}/></div>
                    </>
                    )})}
        </div>
    )}