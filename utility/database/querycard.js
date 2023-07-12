
export async function queryCard (cardName) {
    console.log(cardName);
    fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    }
    )
    .catch(err => console.log(err));
}