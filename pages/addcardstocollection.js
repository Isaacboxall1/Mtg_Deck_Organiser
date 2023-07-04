import { useState } from 'react';
import { formatCardsToUpload } from '../utility/functions/formatCardsToUpload';

export default function AddCardsToCollection() {

    const [cardsToAddArray, setCardsToAddArray] = useState([]);
    const [cardsToAdd, setCardsToAdd] = useState('');

    function handleInputChange(event) {
        setCardsToAdd(event.target.value);
    }

    function handleAddCards() {
        const cardsToAddArray = cardsToAdd.split('\n')
        .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
        .map(card => card.trim());
        console.log(cardsToAddArray);
        let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
        setCardsToAddArray(cardsFormattedToUpload);
        console.log(cardsFormattedToUpload);
    }

    return (<div >
        <h1>Add Cards To Collection</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
        <textarea onChange={(e)=> handleInputChange(e)}placeholder='2x Rune Crab' cols={100} style={{resize:'none', minHeight: '500px'}} ></textarea>
        <button type='submit' onClick={handleAddCards}>Add Cards to Collection</button>
        </form>
        </div>)
        
}