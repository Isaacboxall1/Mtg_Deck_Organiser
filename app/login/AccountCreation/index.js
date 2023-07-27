import { useState } from "react";
import { supabase } from "@/utility/config/supabase";
import "./accountcreation.css";
import { useAuth } from "@/app/components/ContextProvider";
import { useRouter } from "next/navigation";


export default function AccountCreator(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [activePP, setActivePP] = useState("");
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const { session } = useAuth();
   const router = useRouter();
  // create a submit profile function that checks if the user has entered a first name, last name, and profile picture
  // if they have, submit the profile to the database
  // if they have not, alert them to fill out all fields
  // then query the database for their profile info
  // if there is no profile info, redirect to account creation page
  // if there is profile info, redirect to explore page
  async function submitProfile() {
    console.log(firstName, lastName, profilePic, session.user.id);

    if (firstName && lastName && profilePic && session.user.id) {
      const { data, error } = await supabase.from("users").insert([
        {
          first_name: firstName,
          last_name: lastName,
          profile_img: profilePic,
          user_id: session.user.id,
          username: userName,
        },
      ]);
      if (error) {
        alert(error);
      } else {
        router.push("/collectiondisplay");
      }
    } else {
      alert("Please fill out all fields");
    }
  }

  return (
    <div id="account-creation-page">
      <h1>Hi There!</h1>
      <h1>Please Set Up Your Account with some Basic Info To Get Started</h1>
      <form
        className="account-creation-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h3>Select a Profile Picture</h3>
          <img
            src="./assets/pp/pp1.webp"
            alt="profile option"
            id={activePP === 1 ? "active" : ""}
            className="profile-picture-option"
            onClick={() => {
              setProfilePic("./assets/pp/pp1.webp");
              setActivePP(1);
            }}
          />
          <img
            src="./assets/pp/pp2.webp"
            alt="profile option"
            id={activePP === 2 ? "active" : ""}
            className="profile-picture-option"
            onClick={() => {
              setProfilePic("./assets/pp/pp2.webp");
              setActivePP(2);
            }}
          />
          <img
            src="./assets/pp/pp3.webp"
            alt="profile option"
            id={activePP === 3 ? "active" : ""}
            className="profile-picture-option"
            onClick={() => {
              setProfilePic("./assets/pp/pp3.webp");
              setActivePP(3);
            }}
          />
        </div>
        <label className="username-label" aria-hidden="false" htmlFor="first">
          Enter a First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          id="first"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label className="username-label" aria-hidden="false" htmlFor="last">
          Enter a Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          id="last"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label className="username-label" aria-hidden="false" htmlFor="last">
          Enter a Username
        </label>
        <input
          type="text"
          placeholder="Username"
          id="first"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className="searchButton" onClick={submitProfile}>
          Save Profile
        </button>
      </form>
    </div>
  );
}
