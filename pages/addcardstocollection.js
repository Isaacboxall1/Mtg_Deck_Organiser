import { useState } from 'react';
import { formatCardsToUpload } from '../utility/functions/formatCardsToUpload';
import { addCardIdFromDatabase } from '../utility/functions/addcardIdFromDatabase';
import { addCardToCollection } from '../utility/database/addcardtocollection';
export default function AddCardsToCollection() {

    const [cardsNotFound, setCardsNotFound] = useState([]);
    const [cardsToAdd, setCardsToAdd] = useState('');

    function handleInputChange(event) {
        setCardsToAdd(event.target.value);
    }

    async function handleAddCards() {
        const cardsToAddArray = cardsToAdd.split('\n')
        .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
        .map(card => card.trim());
        console.log(cardsToAddArray);
        let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
        let [cardsMatchedToId, cardsNotFound] = addCardIdFromDatabase(cardsFormattedToUpload);
        setCardsNotFound(cardsNotFound)
        setTimeout(() => {addCardToCollection(process.env.NEXT_PUBLIC_USER_ID, cardsMatchedToId)}, 1000);
        console.log('cards successfully added to your collection')

        }

    

    return (<div >
        <h1>Add Cards To Collection</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
        <textarea onChange={(e)=> handleInputChange(e)}placeholder='2x Rune Crab' cols={100} style={{resize:'none', minHeight: '500px'}} ></textarea>
        <button type='submit' onClick={handleAddCards}>Add Cards to Collection</button>
        <h2>Cards Not Found</h2>
        <ul>
        {cardsNotFound.map((card, index) => {
            return <li key={index}>{card}</li>
        })}
        </ul>
        
        </form>
        </div>)
        
}