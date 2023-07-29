import { supabase } from "@/utility/config/supabase";

export async function verifyUniqueUserName(userName) {
  console.log(userName);
  const { data } = await supabase.from("users").select("*").ilike("username", userName);

  if (data.length === 0) {
    return true;
  }
  else {
    return false;
  }
}