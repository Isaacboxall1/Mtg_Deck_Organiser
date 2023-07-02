import React from 'react';
import Image from 'next/image';
import styles from './carddisplay.module.css';

export default function CardImageDisplay ({card}) {
    return (
    <div >
        <Image className={styles.cardimage} src={card.img} alt={card.name} width={280} height={400}/>
        <h2>x{card.quantity}</h2>
    </div>
)}