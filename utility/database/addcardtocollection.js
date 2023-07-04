import { supabase } from "../config/supabase"

export async function addCardToCollection(userId, IdAndQuantityArray) {
    
    console.log(IdAndQuantityArray)
    IdAndQuantityArray.forEach((card) => {
        card.user_id = userId
    })
    console.log(IdAndQuantityArray)


    
const { data, error } = await supabase
.from('user_cards')
.insert([
    ...IdAndQuantityArray
])
.select()

if (error) console.error(error)
else console.log(data)
}

    