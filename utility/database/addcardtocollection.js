import { supabase } from "../config/supabase"

export async function addCardToCollection(userId, IdAndQuantityArray) {
    if (IdAndQuantityArray.length === 0) return;
    
    IdAndQuantityArray.forEach((card) => {
        card.user_id = userId
    })
    console.log(IdAndQuantityArray)


    
const { data, error } = await supabase
.from('user_cards')
.upsert([
    ...IdAndQuantityArray
])
.select()

if (error) console.error(error)
else console.log(data)
}

    
