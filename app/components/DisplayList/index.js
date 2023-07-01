import styles from './displaylist.module.css';

export default function DisplayList({cardArray}) {


    return (
        <div id={styles.displaylistparent}>
            {cardArray.map((card, index) => {
                return (
        <div className={styles.displaylistchild} key={index}>
                    <p>{card.name}</p>
                    <p>colors: {card.colors?.map(color=> {return color})}</p>
                    <p>type: {card.type}</p>
                    <p>rarity: {card.rarity}</p>
                    <p>cmc: {card.cmc}</p>
                    <p>set: {card.set}</p>
                    <p>value: {card.price}</p>
                    <p>x{card.quantity}</p>
        </div>
            )})}
        </div>
    )}