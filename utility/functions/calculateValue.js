export function calculateValue (collection) {
    let total = 0
    
        collection?.forEach(type => {
            type.cards?.forEach(card => {
                total += card.price * card.quantity
            })
        })
        // round the total to 2 decimal places
        total = Math.round(total * 100) / 100
        return total
}