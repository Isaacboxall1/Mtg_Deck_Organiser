import { supabase } from "../../config/supabase";
export async function changeQuantity(card, quantity, userId) {

    if (quantity > 0) {
    const { data, error } = await supabase
    .from('user_cards')
    .update({ quantity: quantity })
    .match({ user_id: userId, card_id: card.id })
    .single()

    if (error)
    console.log(`could not update quantity because of ${error}`)
    }
    else {
        const { data, error } = await supabase
        .from('user_cards')
        .delete()
        .match({ user_id: userId, card_id: card.id })
        .single()
    }

}