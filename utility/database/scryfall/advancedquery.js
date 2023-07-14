export function formatAdvancedQuery (searchTerm, queryObject) {

    const {rarity, format, manaRange, selectedColors} = queryObject;
    const query = {};

    if(rarity) {
        query.rarity = `r:${rarity}`;
    }
    if(format) {
        query.format = `f:${format}`;
    }
    if(manaRange) {
        if(manaRange[0] === 0 && manaRange[1] === 6) {
            query.manaRange = '';
        }
        else if (manaRange[0] === 0) {
            query.manaRange = `cmc<=${manaRange[1]}`;
        }
        else if (manaRange[1] === 6) {
            query.manaRange = `cmc>=${manaRange[0]}`;
        }
        else {
        query.manaRange = `cmc>=${manaRange[0]} cmc<=${manaRange[1]}`;
        }
    }

    if(selectedColors) {
        if(!selectedColors.includes('C')) {
            query.selectedColors = `c<=${selectedColors.join('')} -c:C`;
        }
        else {
        let removeC = selectedColors.filter(color => color !== 'C');
        query.selectedColors = `c<=${removeC.join('')}`;
        }
    }

    // concatenate all query strings
    let queryString = Object.values(query).join(' ');
    console.log(queryString)
    return queryString;
}

export async function advancedQuery(searchTerm, QueryObject) {
    const query = formatAdvancedQuery(searchTerm, QueryObject);
    return fetch(`https://api.scryfall.com/cards/search?q=${query} -is:funny ${searchTerm} game:paper or t:${searchTerm} game:paper -is:funny`)
    .then(response => response.json())
    .then(data => {
        return data.data;
    }
    )
    .catch(err => console.log(err));
}