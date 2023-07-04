export function formatCardsToUpload(cardArray) {
    // take in an Array of strings in format 'quantityInNumber cardName'
    // return an Array of objects in format {quantity: quantityInNumber, name: cardName}

    let formattedCards = [];

    cardArray.forEach(card => {

        let cardName = card.split(/\d+/)[1].trim();
        let cardQuantity = card.split(/\D+/)[0];
        let formattedCard = {quantity: cardQuantity, name: cardName};
        formattedCards.push(formattedCard);
    }
    )

    return formattedCards;
}