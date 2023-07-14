export function formatCardsToUpload(cardArray) {
    let formattedCards = [];

    cardArray.forEach(card => {
        // Remove 'x' if it exists right after the quantity
        let cardInfo = card.replace(/(\d+)\s*x\s*/g, '$1 ').trim().split(' ');

        let cardQuantity = cardInfo[0];
        let cardName = cardInfo.slice(1).join(' ');

        let formattedCard = {quantity: parseInt(cardQuantity), name: cardName};
        formattedCards.push(formattedCard);
    })

    return formattedCards;
}