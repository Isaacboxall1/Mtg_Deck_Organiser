import { formatCardsToUpload } from "../functions/formatCardsToUpload";
import { addCardIdFromDatabase } from "./addcardIdFromDatabase";

export async function handleAddCards(cardsToAddInput, addCardToCollection) {
    const cardsToAddArray = cardsToAddInput.split('\n')
    .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
    .map(card => card.trim());

    if (cardsToAddArray.length < 1) {
        alert('Please enter a card to add to your collection');
        return;
    }
    
    let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
    let [cardsMatchedToId, cardsNotFound] = addCardIdFromDatabase(cardsFormattedToUpload);
    const userId = process.env.NEXT_PUBLIC_USER_ID;
    let message = 'Adding Cards to Collection...';

    setTimeout(() => {
        addCardToCollection(userId, cardsMatchedToId); 
        if(cardsMatchedToId.length > 0) {alert(`successfully added ${cardsMatchedToId.length} cards to your collection`)}
        else {alert('no valid cards could be found in your input')}
    }, 500);

    return { cardsNotFound, message };
}