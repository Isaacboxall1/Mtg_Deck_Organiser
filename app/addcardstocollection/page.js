'use client'

import { useState } from 'react';
import { formatCardsToUpload } from '../../utility/functions/formatCardsToUpload';
import { addCardIdFromDatabase } from '../../utility/functions/addcardIdFromDatabase';
import { addCardToCollection } from '../../utility/database/addcardtocollection';
import CardsNotFound from '@/app/components/globals/CardsNotFound';
import NavButton from '../components/globals/NavButton';
import styles from './addcardstocollection.module.css';
import Image from 'next/image';
// TO DO
// Styling
// tests
// page does not currently check for duplicates
// suggestions based on cards not found
// search for cards individually
// search for cards in bulk

export default function AddCardsToCollection() {

    const [cardsNotFound, setCardsNotFound] = useState([]);
    const [cardsToAddInput, setCardsToAddInput] = useState('');

    function handleInputChange(event) {
        setCardsToAddInput(event.target.value);
    }

    async function handleAddCards() {
        setCardsNotFound([]);
        const cardsToAddArray = cardsToAddInput.split('\n')
        .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
        .map(card => card.trim());
        let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
        let [cardsMatchedToId, cardsNotFound] = addCardIdFromDatabase(cardsFormattedToUpload);
        setCardsNotFound(cardsNotFound)
        setCardsToAddInput('Adding Cards to Collection...');
        setTimeout(() => {addCardToCollection(process.env.NEXT_PUBLIC_USER_ID, cardsMatchedToId); setCardsToAddInput(''); alert(`successfully added ${cardsMatchedToId.length} cards to your collection`)}, 1000);
        }

    return (<div className={styles.addCardsToCollectionContainer}>
        <h1>Add Cards To Collection</h1>
        <NavButton location='userCollection'/>
        <form className={styles.addCardsForm} onSubmit={(e)=> e.preventDefault()}>
            <textarea className={styles.inputBox} onChange={(e)=> handleInputChange(e)} placeholder='2 Vedalken Orrery' value={cardsToAddInput} cols={100} style={{resize:'none', minHeight: '500px'}} ></textarea>
            <button type='submit' onClick={handleAddCards} className={styles.addCardsButton}>
                Add to Collection 
                <Image width={30} height={30} src='/collection.svg' alt='add cards icon'/>
            </button>
            {cardsNotFound.length > 0 && <h2>Cards Not Found</h2>}
            <CardsNotFound cardsNotFound={cardsNotFound}/>
        </form>
        </div>)
}