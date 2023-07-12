import { formatIntoRarity } from "@/utility/functions/formatIntoTypes";


describe("formatIntoRarity", () => {
    test("should return an array of objects with the correct format", () => {
        const unsortedList = [
            {
                name: "Vedalken Orrery",
                quantity: 2,
                type: "Artifact —",
                rarity: "rare",
            },
            {
                name: "Charging Badger",
                quantity: 1,
                type: "Creature — Badger",
                rarity: "common",
            },
            {
                name: "Sol Ring",
                quantity: 1,
                type: "Artifact",
                rarity: "uncommon",
            },
        ];
        const expected = [
            {
                name: "Common",
                cards: [
                    {
                        name: "Charging Badger",
                        quantity: 1,
                        type: "Creature — Badger",
                        rarity: "common",
                    },
                ],
            },
            {
                name: "Uncommon",
                cards: [
                    {
                        name: "Sol Ring",
                        quantity: 1,
                        type: "Artifact",
                        rarity: "uncommon",
                    },
                ],
            },
            {
                name: "Rare",
                cards: [
                    {
                        name: "Vedalken Orrery",
                        quantity: 2,
                        type: "Artifact —",
                        rarity: "rare",
                    },
                ],
            },
            { name: "Mythic", cards: [] },
        ];
        
        
        const actual = formatIntoRarity(unsortedList);
        expect(actual).toMatchObject(expected);
    }
    )}
);

