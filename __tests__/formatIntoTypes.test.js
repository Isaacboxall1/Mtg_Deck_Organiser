import { formatByCriteria, formatIntoColors, formatIntoRarity, formatIntoTypes } from "@/utility/functions/formatIntoTypes";

describe("formatIntoTypes", () => {
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
                name: "Creature",
                cards: [
                    {
                        name: "Charging Badger",
                        quantity: 1,
                        type: "Creature — Badger",
                        rarity: "common",
                        supertype: "Creature",
                        subtype: "Badger",
                    },
                ],
            },
            { name: "Instant", cards: [] },
            { name: "Sorcery", cards: [] },
            { name: "Enchantment", cards: [] },
            {
                name: "Artifact",
                cards: [
                    {
                        name: "Vedalken Orrery",
                        quantity: 2,
                        type: "Artifact —",
                        rarity: "rare",
                        supertype: "Artifact",
                        subtype: "",
                    },
                    {
                        name: "Sol Ring",
                        quantity: 1,
                        type: "Artifact",
                        rarity: "uncommon",
                        supertype: "Artifact",
                        subtype: "",
                    },
                ],
            },
            { name: "Land", cards: [] },
            { name: "Planeswalker", cards: [] },
            {
                name: "Other",
                cards: [],
            },
        ];
        
        const actual = formatIntoTypes(unsortedList);
        expect(actual).toEqual(expected);
    });
    test('should place cards with unknown types into an "Other" category', () => {
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
            {
                name: "Unknown Type",
                quantity: 1,
                type: "Unknown",
                rarity: "uncommon",
            },
        ];
        const expected = [
            {
                name: "Creature",
                cards: [
                    {
                        name: "Charging Badger",
                        quantity: 1,
                        type: "Creature — Badger",
                        rarity: "common",
                        supertype: "Creature",
                        subtype: "Badger",
                    },
                ],
            },
            { name: "Instant", cards: [] },
            { name: "Sorcery", cards: [] },
            { name: "Enchantment", cards: [] },
            {
                name: "Artifact",
                cards: [
                    {
                        name: "Vedalken Orrery",
                        quantity: 2,
                        type: "Artifact —",
                        rarity: "rare",
                        supertype: "Artifact",
                        subtype: "",
                    },
                    {
                        name: "Sol Ring",
                        quantity: 1,
                        type: "Artifact",
                        rarity: "uncommon",
                        supertype: "Artifact",
                        subtype: "",
                    },
                ],
            },
            { name: "Land", cards: [] },
            { name: "Planeswalker", cards: [] },
            {
                name: "Other",
                cards: [
                    {
                        name: "Unknown Type",
                        quantity: 1,
                        type: "Unknown",
                        rarity: "uncommon",
                        supertype: "Unknown",
                        subtype: "",
                    },
                ],
            },
        ];
        const actual = formatIntoTypes(unsortedList);
        expect(actual).toEqual(expected);
    });
});

