'use client'
import styles from './search.module.css'
import CardSearch from "@/app/components/globals/CardSearch"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { addToCollectionById } from '@/utility/database/addToCollectionById';

export default function AddToCollectionSearch() {

    const userId = process.env.NEXT_PUBLIC_USER_ID

    const [searchReturn, setSearchReturn] = useState('');

    useEffect(() => {
        console.log(searchReturn);
    }, [searchReturn])

    return (
    <div className={styles.searchForCollectionContainer}>
    <h1>Search for Cards To Add To Your Collection</h1>
    <CardSearch searchLocation='allcards' setSearchReturn={setSearchReturn}/>
    <div className={styles.searchReturnContainer}>
        <ul className={styles.searchReturnList}>
        {searchReturn && searchReturn.map((card) => {
            return (
                <li className={styles.searchReturnCard} key={card.id}>
                    <Image src={card.image_uris?.small} alt={card.name} width={100} height={200}/>
                    <h3>{card.name}</h3>
                    <button onClick={async ()=> await addToCollectionById(card.id, 1,'3b37684c-a075-4b4b-9fe6-6973a26fe766')}>add to collection</button>
                </li>
            )
        })}
        </ul>
    </div>
    </div>
    )
}
