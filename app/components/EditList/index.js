import styles from './editlist.module.css';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';

export default function EditList({cardArray}) {

    
        return (
            <>
            <button>Add Card +</button>
            <div id={styles.displaylistparent}>
                {cardArray.map((card, index) => {
                    return (
                        <>
                        <div className={styles.displaylistchild} key={index}>
                            <p>name: {card.card_name}</p>


                            {card.price ? <p>value: £{card.price}</p> : <p>Price Unaav</p>}

                        </div>
                        <div className={styles.hidden}><Image src={card.img} alt={card.card_name} width={280} height={400}/></div>
                        </>
                        )})}
            </div>
            </>
        )}

