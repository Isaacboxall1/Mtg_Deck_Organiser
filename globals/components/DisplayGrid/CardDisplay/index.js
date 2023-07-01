import React from 'react';
import Image from 'next/image';

export default function CardDisplay ({card}) {
    return (
    <div >
        <Image src={'https://images.saymedia-content.com/.image/t_share/MTc0NDYwNzc3ODAxODUyMjY0/top-magic-the-gathering-cards-of-all-time.jpg'} alt={card.name} width={500} height={500}/>
        <h1>{card.name}</h1>
        <h2>x {card.quantity}</h2>
    </div>
)}