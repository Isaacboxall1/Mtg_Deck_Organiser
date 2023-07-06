// fetch users card collection from supabase here
import { supabase } from "@/utility/config/supabase";

export async function fetchUserCards(user_id, setCollection) {
    // Get user_cards for a specific user
    let { data: user_cards, error } = await supabase
      .from('user_cards')
      .select('card_id, quantity')
      .eq('user_id', user_id);
    
    if (error) console.error(error);
    else {
      // Get the related card_ids
      const cardIds = user_cards.map(card => card.card_id);
  
      // Get the related cards
      let { data: all_cards, error } = await supabase
        .from('oracle_cards')
        .select('*')
        .in('id', cardIds);

    // add quantity to each card
      if (error) console.error(error);
      else { all_cards.forEach(card => {
        const user_card = user_cards.find(user_card => user_card.card_id === card.id);
        card.quantity = user_card.quantity;
      }
    );
    // set the collection state
    return all_cards}
    }

  }