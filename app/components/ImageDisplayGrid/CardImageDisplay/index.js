import React from 'react';
import Image from 'next/image';
import styles from './carddisplay.module.css';

export default function CardImageDisplay ({card}) {
    return (
    <div >
        <Image className={styles.cardimage} src={'https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzc3ODAxODUyMjY0/top-magic-the-gathering-cards-of-all-time.jpg'} alt={card.name} width={280} height={400}/>
        <h2>x {card.quantity}</h2>
    </div>
)}