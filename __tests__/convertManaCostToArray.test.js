import { convertManaCostToArray } from "@/utility/functions/convertManaCostToArray"

describe('convertManaCostToArray', () => {
    test('should split String into Array of values and remove brackets', ()=> {
        let manaCost = '{2}{G}{W}'
        let expected = ['2','G','W']
        const actual = convertManaCostToArray(manaCost) 
        expect(actual).toEqual(expected)
    })
    test('should return empty array for non string inputs', ()=> {
        let manaCost = 4
        let expected = []
        const actual = convertManaCostToArray(manaCost) 
        expect(actual).toEqual(expected)
    })
})
