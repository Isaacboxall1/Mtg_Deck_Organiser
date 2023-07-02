
export function formatIntoTypes(unsortedList) {

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

        card.type = card.type.split("—")[0].trim();

        switch (card.type) {
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
    console.log(sortedList);
    return sortedList;
}