import { superTypeSplit } from "@/utility/functions/formatToStats";

describe('superTypeSplit', () => {
    test('should correctly count the number of cards of each supertype', () => {
        const mockSortedArray = [
            {
                name: 'Creature',
                cards: [
                    { name: 'Bear Cub', quantity: 2 },
                    { name: 'Giant Spider', quantity: 1 }
                ]
            },
            {
                name: 'Instant',
                cards: [
                    { name: 'Giant Growth', quantity: 3 }
                ]
            },
            {
                name: 'Artifact',
                cards: [
                    { name: 'Sol Ring', quantity: 1 },
                    { name: 'Thran Dynamo', quantity: 1 }
                ]
            },
            {
                name: 'Other',
                cards: [
                    { name: 'Unknown Card', quantity: 2 }
                ]
            }
        ];

        const expected = [
            { name: 'Creature', value: 2 },
            { name: 'Instant', value: 1 },
            { name: 'Sorcery', value: 0 },
            { name: 'Enchantment', value: 0 },
            { name: 'Artifact', value: 2 },
            { name: 'Land', value: 0 },
            { name: 'Planeswalker', value: 0 },
            { name: 'Other', value: 1 }
        ];

        expect(superTypeSplit(mockSortedArray)).toEqual(expected);
    });
});