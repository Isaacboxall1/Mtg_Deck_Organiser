export async function queryCard (cardName) {
    return fetch(`https://api.scryfall.com/cards/search?q= ${cardName} -is:funny game:paper or t:${cardName} -is:funny game:paper`)
    .then(response => response.json())
    .then(data => {
        return data.data;
    }
    )
    .catch(err => console.log(err));
}