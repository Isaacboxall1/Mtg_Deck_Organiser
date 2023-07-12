import { colorSplit } from "@/utility/functions/formatToStats"; 

describe('colorSplit', () => {
    test('should correctly count the number of cards of each color', () => {
        const mockSortedArray = [
            {
                cards: [
                    { colors: ['W'], quantity: 2 },
                    { colors: ['U'], quantity: 1 },
                    { colors: ['B'], quantity: 3 },
                    { colors: ['R'], quantity: 1 },
                    { colors: ['G'], quantity: 2 },
                    { colors: [], quantity: 1 }
                ]
            },
            {
                cards: [
                    { colors: ['W', 'U'], quantity: 2 },
                    { colors: [], quantity: 3 }
                ]
            }
        ];

        const expected = [
            { name: 'White', value: 4 },
            { name: 'Blue', value: 3 },
            { name: 'Black', value: 3 },
            { name: 'Red', value: 1 },
            { name: 'Green', value: 2 },
            { name: 'Colorless', value: 4 },
            { name: 'Multicolor', value: 0 }
        ];

        expect(colorSplit(mockSortedArray)).toEqual(expected);
    });
});
