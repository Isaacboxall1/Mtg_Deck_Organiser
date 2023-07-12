import { calculateValue } from "@/utility/functions/calculateValue";

describe("calculateValue", () => {
    test('returns correct total value' , () => {
        let collection = [{cards: [{name: 'card1', quantity: 4, img:'/example.jpg', price: 1}, {name: 'card2', quantity: 1, img:'/example.jpg', price: 2}] }]
        let total = calculateValue(collection)
        expect(total).toBe(6)
    }
    )
    test("returns 0 when collection is empty", () => {
        let collection = []
        let total = calculateValue(collection)
        expect(total).toBe(0)
    }
    )
    test('returns 0 when collection is invalid formatting' , () => {
        let collection = [{name: 'card1', quantity: 4, img:'/example.jpg'}, {quantity: 1000}]
        let total = calculateValue(collection)
        expect(total).toBe(0)
    }
    )

})
