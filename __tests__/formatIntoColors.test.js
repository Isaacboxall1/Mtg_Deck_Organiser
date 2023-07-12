import { formatIntoColors } from "@/utility/functions/formatIntoTypes";


describe("formatIntoColors", () => {
    test("should return an array of objects with the correct format", () => {
        const unsortedList = [
            {
                name: "Vedalken Orrery",
                quantity: 2,
                type: "Artifact —",
                rarity: "rare",
                colors: ["U"],
            },
            {
                name: "Charging Badger",
                quantity: 1,
                type: "Creature — Badger",
                rarity: "common",
                colors: ["G"],
            },
            {
                name: "Sol Ring",
                quantity: 1,
                type: "Artifact",
                rarity: "uncommon",
                colors: [],
            },
        ];
        
        const expected = [
            { name: "White", cards: [] },
            {
                name: "Blue",
                cards: [
                    {
                        name: "Vedalken Orrery",
                        quantity: 2,
                        type: "Artifact —",
                        subtype: "",
                        supertype: "Artifact",
                        rarity: "rare",
                        colors: ["U"],
                    },
                ],
            },
            { name: "Black", cards: [] },
            { name: "Red", cards: [] },
            {
                name: "Green",
                cards: [
                    {
                        name: "Charging Badger",
                        quantity: 1,
                        type: "Creature — Badger",
                        subtype: "Badger",
                        supertype: "Creature",
                        rarity: "common",
                        colors: ["G"],
                    },
                ],
            },
            {
                name: "Colorless",
                cards: [
                    {
                        name: "Sol Ring",
                        quantity: 1,
                        type: "Artifact",
                        subtype: "",
                        supertype: "Artifact",
                        rarity: "uncommon",
                        colors: [],
                    },
                ],
            },
            { name: "Multicolored", cards: [] },
        ];
        
        const actual = formatIntoColors(unsortedList);
        expect(actual).toEqual(expected);
    });
}
);