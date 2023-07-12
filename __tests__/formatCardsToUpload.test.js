import { formatCardsToUpload } from "@/utility/functions/formatCardsToUpload";

test("should return an array of objects with the correct format", () => {
   const cardsToAddArray = [
         '2 Vedalken Orrery',
            '1 Charging Badger',  
            '1 Sol Ring',
   ];
    const expected = [
        {name: 'Vedalken Orrery', quantity: 2},
        {name: 'Charging Badger', quantity: 1},
        {name: 'Sol Ring', quantity: 1},
    ];
    const actual = formatCardsToUpload(cardsToAddArray);
    expect(actual).toEqual(expected);
    });