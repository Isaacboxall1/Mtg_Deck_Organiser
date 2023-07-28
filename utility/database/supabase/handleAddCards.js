import { formatCardsToUpload } from "../../functions/formatCardsToUpload";
import { addCardIdFromDatabase } from "./addcardIdFromDatabase";
import { addCardToCollection } from "./addcardtocollection";

export async function handleAddCards(cardsToAddInput, userId) {
    const cardsToAddArray = cardsToAddInput.split('\n')
    .filter(card => card.trim() !== '' && card.toLowerCase() !== 'deck')
    .map(card => card.trim());

    if (cardsToAddArray.length < 1) {
        alert('Please enter a card to add to your collection');
        return;
    }
    
    let cardsFormattedToUpload = formatCardsToUpload(cardsToAddArray);
    let [cardsMatchedToId, cardsNotFound] = addCardIdFromDatabase(cardsFormattedToUpload);
    let message = 'Adding cards to your collection...'

    setTimeout(() => {
        addCardToCollection(userId, cardsMatchedToId); 
        if(cardsMatchedToId.length > 0) {alert(`successfully added ${cardsMatchedToId.length} cards to your collection`)}
        else {alert('no valid cards could be found in your input')}
    }, 500);

    return { cardsNotFound, message };
}