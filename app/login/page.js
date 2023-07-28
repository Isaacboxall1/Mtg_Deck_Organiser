"use client";
import styles from "./login.module.css";
import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../../utility/config/supabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseTheme } from "../../utility/styles/logInTheme";
import { useAuth } from "../components/ContextProvider";
import { fetchProfileInfo } from "../../utility/database/supabase/fetchProfileInfo";

export default function LogInPage() {
  const { session, user, setUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    
    async function navigateToCollection() {
      await fetchProfileInfo(setUser, session, router);
    }

    if (session?.user.id) {
      console.log('hello')
      navigateToCollection();
    }
  }, [session, user, router, setUser]);

  if (!session) {
    return (
      <div id={styles.logInPage}>
        <div id={styles.logInSection}>
          <h1 id={styles.logInTitle}>Log in or Create an Account</h1>
          <Auth
            supabaseClient={supabase}
            providers={[]}
            appearance={supabaseTheme}
            theme="dark"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div id="log-in-page">
        <div id="log-in-section">
          <h1 id="log-in-title">Welcome {session.user.email}</h1>
          <h2>You Will Now Be Redirected</h2>
        </div>
      </div>
    );
  }
}
