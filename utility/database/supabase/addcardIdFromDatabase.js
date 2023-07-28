import { supabase } from "../../config/supabase";
export function addCardIdFromDatabase (NameAndQuantityArray) {
    // take in an array of the name and quantity of each card
    // return an array of the name, quantity and id of each card
    // if the card is not found in the database, return an error message as a string and the name of the card
    // if the card is found in the database, return an array of the name, quantity and id of each card

    let IdAndQuantityArray = [];
    let errorArray = [];
    
    NameAndQuantityArray.forEach(async (card) => {
        
        let { data: cardId, error } = await supabase
            .from('oracle_cards')
            .select('id')
            .ilike('card_name', card.name)
            .single();

        if (error) {
            errorArray.push(card.name);
        }
        else if (cardId) {
            card.id = cardId.id;
            IdAndQuantityArray.push({card_id: card.id, quantity: card.quantity});
        }

    }
    )


    return [IdAndQuantityArray, errorArray];
}