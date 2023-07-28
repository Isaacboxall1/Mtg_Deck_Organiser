import { supabase } from '../../config/supabase.js';
export async function verifyUniqueProfile(user) {
    const { data } = await supabase.from("users").select("*").eq("user_id", user);

    if (data.length === 0) {
        return true;
    }
    else {
        return false;
    }
}