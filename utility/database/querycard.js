
export async function queryCard (cardName) {
    console.log(cardName);
    fetch(`https://api.scryfall.com/cards/search?q=${cardName}`)
    .then(response => response.json())
    .then(data => {
        console.table(data.data);
        return data;
    }
    )
    .catch(err => console.log(err));
}