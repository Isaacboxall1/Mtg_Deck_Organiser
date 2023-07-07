import { useState } from 'react';
import { formatCardsToUpload } from '../utility/functions/formatCardsToUpload';
import { addCardIdFromDatabase } from '../utility/functions/addcardIdFromDatabase';
import { addCardToCollection } from '../utility/database/addcardtocollection';
import CardsNotFound from '@/app/components/globals/CardsNotFound';
import Link from 'next/link';
// TO DO
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
        const cardsToAddArray = cardsToAddInput.split('\n')
        .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
        .map(card => card.trim());
        let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
        let [cardsMatchedToId, cardsNotFound] = addCardIdFromDatabase(cardsFormattedToUpload);
        setCardsNotFound(cardsNotFound)
        setTimeout(() => {addCardToCollection(process.env.NEXT_PUBLIC_USER_ID, cardsMatchedToId); setCardsToAddInput('');}, 1000);

        }

    return (<div >
        <h1>Add Cards To Collection</h1>
        <Link href="/collectiondisplay"><button>Back to Collection</button></Link>
        <form onSubmit={(e)=> e.preventDefault()}>
        <textarea onChange={(e)=> handleInputChange(e)} placeholder='2 Vedalken Orrery' value={cardsToAddInput} cols={100} style={{resize:'none', minHeight: '500px'}} ></textarea>
        <button type='submit' onClick={handleAddCards}>Add Cards to Collection</button>
        <h2>Cards Not Found</h2>
        <CardsNotFound cardsNotFound={cardsNotFound}/>
        </form>
        </div>)
        
}