export function formatAdvancedQuery (searchTerm, queryObject) {
    
    const query = {
        rarity: "",
        format: "",
        manaRange: [
            0,
            6
        ],
        selectedColors: [
            "W",
            "R",
            "G",
            "C",
            "B"
        ]
    }

    const {rarity, format, manaRange, selectedColors} = queryObject;
    if(searchTerm) {
        query.searchTerm = searchTerm;
    }
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
            query.selectedColors = `c>=${selectedColors.join('')} -c:C`;
        }
        else {
        let removeC = selectedColors.filter(color => color !== 'C');
        query.selectedColors = `c<=${removeC.join('')}`;
        }
    }

    // concatenate all query strings
    let queryString = Object.values(query).join(' ');
    console.log(queryString)
}