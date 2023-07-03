
function formatIntoTypes(unsortedList) {

    const sortedList = [
        {name: "Creature", cards: []},
        {name: "Instant", cards: []},
        {name: "Sorcery", cards: []},
        {name: "Enchantment", cards: []},
        {name: "Artifact", cards: []},
        {name: "Land", cards: []},
        {name: "Planeswalker", cards: []},
        {name: "Other", cards: []}
]

    unsortedList.forEach(card => {

        let supertype = card.type.split("—")[0].trim();
        let subtype = card.type.split("—")[1]?.trim();
        card.supertype = supertype;
        card.subtype = subtype;

        switch (card.supertype) {
            case "Legendary Creature":
            case "Creature":
                sortedList[0].cards.push(card);
                break;
            case "Instant":
                sortedList[1].cards.push(card);
                break;
            case "Sorcery":
                sortedList[2].cards.push(card);
                break;
            case "Enchantment":
                sortedList[3].cards.push(card);
                break;
            case "Legendary Artifact":
                sortedList[4].cards.push(card);
                break;
            case "Basic Land":
            case "Land":
            case "Land Creature":
            case "Legendary Land":
                sortedList[5].cards.push(card);
                break;
            case "Planeswalker":
            case "Legendary Planeswalker":
                sortedList[6].cards.push(card);
                break;
            default:
                sortedList[7].cards.push(card);
                break;
        }
    }
    )
    return sortedList;
}

function formatIntoColors(unsortedList) {
    
        const sortedList = [
            {name: "White", cards: []},
            {name: "Blue", cards: []},
            {name: "Black", cards: []},
            {name: "Red", cards: []},
            {name: "Green", cards: []},
            {name: "Colorless", cards: []},
            {name: "Multicolored", cards: []}
    ]
    
        unsortedList.forEach(card => {
    

            let supertype = card.type.split("—")[0].trim();
            let subtype = card.type.split("—")[1]?.trim();
            card.supertype = supertype;
            card.subtype = subtype;

            if (card.colors.length > 1) {
                sortedList[6].cards.push(card);
            } else if (card.colors.length < 1) {
                sortedList[5].cards.push(card);
            } else {
                switch (card.colors[0]) {
                    case "W":
                        sortedList[0].cards.push(card);
                        break;
                    case "U":
                        sortedList[1].cards.push(card);
                        break;
                    case "B":
                        sortedList[2].cards.push(card);
                        break;
                    case "R":
                        sortedList[3].cards.push(card);
                        break;
                    case "G":
                        sortedList[4].cards.push(card);
                        break;
                    default:
                        break;
                }
            }
        }
        )
        return sortedList;
    }

function formatIntoRarity (unsortedList) {

        const sortedList = [
            {name: "Common", cards: []},
            {name: "Uncommon", cards: []},
            {name: "Rare", cards: []},
            {name: "Mythic", cards: []}
        ]

        unsortedList.forEach(card => {

            let supertype = card.type.split("—")[0].trim();
            let subtype = card.type.split("—")[1]?.trim();
            card.supertype = supertype;
            card.subtype = subtype;

            switch (card.rarity) {
                case "common":
                    sortedList[0].cards.push(card);
                    break;
                case "uncommon":
                    sortedList[1].cards.push(card);
                    break;
                case "rare":
                    sortedList[2].cards.push(card);
                    break;
                case "mythic":
                    sortedList[3].cards.push(card);
                    break;
                default:
                    break;
            }
        })
        return sortedList;
    }

    export function formatByCriteria(criteria, unsortedList) {
        // if criteria is "type", "color", or "rarity", use the appropriate function

        switch (criteria) {
            case "type":
                return formatIntoTypes(unsortedList);
            case "color":
                return formatIntoColors(unsortedList);
            case "rarity":
                return formatIntoRarity(unsortedList);
            default:
                return unsortedList;
    }
}