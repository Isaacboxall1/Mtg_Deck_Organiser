import { supabase } from "@/utility/config/supabase";
export async function fetchProfileInfo(setUser, session, router) {
    console.log("fetching profile info")
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("user_id", session.user.id);

    if (error) console.log(error);

    if (data.length === 1) {
      setUser(data);
      router.push("/collectiondisplay");
    }

    if (data.length > 1) {
      alert(
        "there are more than one user with this id. please contact support."
      );
    }

    if (data.length < 1) {
      router.push("/Login/AccountCreation");
    }
  }