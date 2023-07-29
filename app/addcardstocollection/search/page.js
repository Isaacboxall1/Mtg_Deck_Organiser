'use client'
import styles from './search.module.css'
import CardSearch from "@/app/components/globals/CardSearch"
import { useState } from 'react';
import Image from 'next/image';
import { addToCollectionById } from '@/utility/database/supabase/addToCollectionById';
import DoubleFacedCard from '@/app/components/globals/DoubleFacedCard';
import { useAuth } from '@/app/components/ContextProvider';

export default function AddToCollectionSearch() {

    const { user } = useAuth()
    let userId = null;
    if(user) {
    userId = user[0].id;
    }

    const [searchReturn, setSearchReturn] = useState('');


    return (
    <div className={styles.searchForCollectionContainer}>
    <h1>Search for Cards To Add To Your Collection</h1>
    <CardSearch searchLocation='allcards' setSearchReturn={setSearchReturn}/>
    <div className={styles.searchReturnContainer}>
        <ul className={styles.searchReturnList}>
        {searchReturn && searchReturn.map((card) => {
            return (
                <li className={styles.searchReturnCard} key={card.id}>
                    {
                        card.image_uris ? <Image src={card.image_uris?.normal} alt={card.name} width={280} height={400}/>
                        : <DoubleFacedCard front={card.card_faces[0].image_uris.normal} back={card.card_faces[1].image_uris.normal}/>
                    }
                    {user? <button onClick={async ()=> await addToCollectionById(card.id, 1, userId)}>Add to Collection</button> : <></>}
                </li>
            )
        })}
        </ul>
    </div>
    </div>
    )
}
