'use client'

import { useState } from 'react';
import { formatCardsToUpload } from '../../utility/functions/formatCardsToUpload';
import { addCardIdFromDatabase } from '../../utility/database/supabase/addcardIdFromDatabase';
import { addCardToCollection } from '../../utility/database/supabase/addcardtocollection';
import CardsNotFound from '@/app/components/globals/CardsNotFound';
import NavButton from '../components/globals/NavButton';
import styles from './addcardstocollection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { handleAddCards } from '@/utility/database/supabase/handleAddCards';

// TO DO
// Styling
// tests
// page does not currently check for duplicates
// suggestions based on cards not found
// search for cards individually
// search for cards in bulk
// add error handling for invalid input
// add error handling for no quantity added

export default function AddCardsToCollection() {

    const [cardsNotFound, setCardsNotFound] = useState([]);
    const [cardsToAddInput, setCardsToAddInput] = useState('');
   
    function handleInputChange(event) {
        setCardsToAddInput(event.target.value);
    }
    async function addCards() {
        setCardsNotFound([]);
        const { cardsNotFound, message } = await handleAddCards(
            cardsToAddInput,
            addCardToCollection
        );
    
        setCardsNotFound(cardsNotFound);
        setCardsToAddInput(message);
    }

    return (<div className={styles.addCardsToCollectionContainer}>
        <h1>Add Cards To Collection</h1>
        <NavButton location='userCollection'/>
        <form className={styles.addCardsForm} onSubmit={(e)=> e.preventDefault()}>
            <textarea className={styles.inputBox} onChange={(e)=> handleInputChange(e)} placeholder='2 Vedalken Orrery' value={cardsToAddInput} cols={100} style={{resize:'none', minHeight: '300px'}} ></textarea>
            <button type='submit' onClick={addCards} className={styles.addCardsButton}>
                Add to Collection 
                <Image width={30} height={30} src='/collection.svg' alt='add cards icon'/>
            </button>
            {cardsNotFound.length > 0 && <h2>Cards Not Found</h2>}
            <CardsNotFound cardsNotFound={cardsNotFound}/>
        </form>
        <h3>You can also now find cards to add using Search</h3>
        <Link href='/addcardstocollection/search'>Search</Link>
        </div>)
}