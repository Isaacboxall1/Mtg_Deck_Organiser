import { formatByCriteria } from "@/utility/functions/formatIntoTypes";

describe("formatByCriteria", () => {
    test('should return an array of objects with the correct format given a criteria of "type"', () => {
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
        const actual = formatByCriteria("type", unsortedList);
        expect(actual).toEqual(expected);
    }
    );
    test('should return an array of objects with the correct format given a criteria of "rarity"', () => {
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
                        subtype: "Badger",
                        supertype: "Creature",
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
                        subtype: "",
                        supertype: "Artifact",
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
                        subtype: "",
                        supertype: "Artifact",
                        rarity: "rare",
                    },
                ],
            },
            { name: "Mythic", cards: [] },
        ];
        const actual = formatByCriteria("rarity", unsortedList);
        expect(actual).toEqual(expected);
    }
    );
    test('should return the unsorted list given an invalid criteria', () => {
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
        const expected = unsortedList;
        const actual = formatByCriteria("invalid", unsortedList);
        expect(actual).toEqual(expected);
    }
    );
}
);
