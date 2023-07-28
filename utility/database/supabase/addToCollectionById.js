import { supabase } from "../../config/supabase";
export async function addToCollectionById(cardId, quantity, userId) {
    const {data, error} = await supabase
    .from('user_cards')
    .insert(
        { user_id: userId, card_id: cardId, quantity: quantity }
    )
    .select()
    if (error) console.error(error)
}