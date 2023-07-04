// export function formatCardsToUpload(cardArray) {
//     // take in an Array of strings in format 'quantityInNumber cardName'
//     // return an Array of objects in format {quantity: quantityInNumber, name: cardName}

//     let formattedCards = [];

//     cardArray.forEach(card => {

//         let cardName = card.split(/\d+/)[1].trim();
//         let cardQuantity = card.split(/\D+/)[0];
//         let formattedCard = {quantity: cardQuantity, name: cardName};
//         formattedCards.push(formattedCard);
//     }
//     )
    
//     return formattedCards;
// }

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