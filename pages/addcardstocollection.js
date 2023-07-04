import { useState } from 'react';

export default function AddCardsToCollection() {

    const [cardsToAddArray, setCardsToAddArray] = useState([]);
    const [cardsToAdd, setCardsToAdd] = useState('');

    function handleAddCards() {
        const cardsToAddArray = cardsToAdd.split('\n')
        .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
        .map(card => card.trim());

        setCardsToAddArray(cardsToAddArray);
        console.log(cardsToAddArray);
    }

    function handleInputChange(event) {
        setCardsToAdd(event.target.value);
    }

    return (<div >
        <h1>Add Cards To Collection</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
        <textarea onChange={(e)=> handleInputChange(e)}placeholder='2x Rune Crab' cols={100} style={{resize:'none', minHeight: '200px', maxHeight: "100%"}} ></textarea>
        <button type='submit' onClick={handleAddCards}>Add Cards to Collection</button>
        </form>
        </div>)
        
}