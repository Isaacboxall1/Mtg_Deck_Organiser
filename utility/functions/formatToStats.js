export function colorSplit(sortedArray) {
    console.log('color split')
    // cardArray is an array of objects. Each object has a color property.
    // this function returns an array of numbers, each representing the number of cards of a given color.
    let colorArray = [{name: 'white', value: 0}, {name: 'blue', value: 0}, {name: 'black', value: 0}, {name: 'red', value: 0}, {name: 'green', value: 0}, {name: 'colorless', value: 0}, {name: 'multicolor', value: 0}];
    sortedArray?.forEach(group => {
        console.log(group)
        group.cards.forEach(card => {
            if (card.colors.length === 0) {
                colorArray[5].value += card.quantity;
            } else {
                card.colors.forEach(color => {
                    switch (color) {
                        case 'W':
                            colorArray[0].value += card.quantity;
                            break;
                        case 'U':
                            colorArray[1].value += card.quantity;
                            break;
                        case 'B':
                            colorArray[2].value += card.quantity;
                            break;
                        case 'R':
                            colorArray[3].value += card.quantity;
                            break;
                        case 'G':
                            colorArray[4].value += card.quantity;
                            break;
                        default:
                            break;
                    }
                })
    }})})
    console.log(colorArray)

    return colorArray;
}

export function superTypeSplit(sortedArray) {
    // cardArray is an array of objects. Each object has a color property.
    // this function returns an array of numbers, each representing the number of cards of a given color.
    let superTypeArray = [{name: 'Basic Land', value: 0}, {name: 'Land', value: 0}, {name: 'Creature', value: 0}, {name: 'Artifact', value: 0}, {name: 'Enchantment', value: 0}, {name: 'Instant', value: 0}, {name: 'Sorcery', value: 0}, {name: 'Planeswalker', value: 0}, {name: 'Tribal', value: 0}];
    
    sortedArray.forEach(group => {
        console.log(group)
        group.cards?.forEach(card => {
            if (card.supertype.length === 0) {
                superTypeArray[1].value += card.quantity;
            } else {
                    switch (card.supertype) {
                        case 'Land':
                            superTypeArray[0].value += card.quantity;
                            break;
                        case 'Creature':
                            superTypeArray[2].value += card.quantity;
                            break;
                        case 'Artifact':
                            superTypeArray[3].value += card.quantity;
                            break;
                        case 'Enchantment':
                            superTypeArray[4].value += card.quantity;
                            break;
                        case 'Instant':
                            superTypeArray[5].value += card.quantity;
                            break;
                        case 'Sorcery':
                            superTypeArray[6].value += card.quantity;
                            break;
                        case 'Planeswalker':
                            superTypeArray[7].value += card.quantity;
                            break;
                        case 'Tribal':
                            superTypeArray[8].value += card.quantity;
                            break;
                        default:
                            break;
                    }
                }
    })})

    console.log(superTypeArray)

    return superTypeArray;
                
}

export function raritySplit(sortedArray) {
    // cardArray is an array of objects. Each object has a color property.
    // this function returns an array of numbers, each representing the number of cards of a given color.
    let rarityArray = [{name: 'Common', value: 0}, {name: 'Uncommon', value: 0}, {name: 'Rare', value: 0}, {name: 'Mythic', value: 0}];
    sortedArray?.forEach(group => {
        group?.cards?.forEach(card => {
            switch (card.rarity) {
                case 'common':
                    rarityArray[0].value += card.quantity;
                    break;
                case 'uncommon':
                    rarityArray[1].value += card.quantity;
                    break;
                case 'rare':
                    rarityArray[2].value += card.quantity;
                    break;
                case 'mythic':
                    rarityArray[3].value += card.quantity;
                    break;
                default:
                    break;
            }})}
    )
    console.log(rarityArray)

    return rarityArray;
}

// let unsortedCollection = await fetchUserCards(process.env.NEXT_PUBLIC_USER_ID)
// let colorSort = formatByCriteria('color', unsortedCollection)
// let sortToColor = colorSplit(colorSort)
// setColorArray(sortToColor)
// let raritySort = formatByCriteria('rarity', unsortedCollection)
// let sortToRarity = raritySplit(raritySort)
// setRarityArray(sortToRarity)
// let supertypeSort = formatByCriteria('type', unsortedCollection)
// let sortToSupertype = superTypeSplit(supertypeSort)
// setSupertypeArray(sortToSupertype)
// setCollection(sortToSupertype)
