
export async function queryCard (cardName) {
    console.log(cardName);
    return fetch(`https://api.scryfall.com/cards/search?q=${cardName}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        return data.data;
    }
    )
    .catch(err => console.log(err));
}