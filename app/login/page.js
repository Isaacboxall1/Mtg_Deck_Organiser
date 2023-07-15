'use client'

import { Auth } from '@supabase/auth-ui-react'
import {supabase} from '../../Utility/config/supabase'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {handleLogOut} from '../../Utility/database/supabase/handleLogOut'
import { supabaseTheme } from '../../utility/styles/logInTheme'

export default function LogInPage() {
const [session, setSession] = useState(null)
const [user, setUser] = useState(null)

useEffect(() => {
    if (session) return;
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [session])

useEffect(() => {
    if (session?.user.id) {
        console.log(session.user.id)
    }
}, [session])

useEffect(() => {
   
  async function fetchProfileInfo() {

  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('user_id', session.user.id)

setUser(data)
}

async function navigateToCollection() {
    await fetchProfileInfo()
    if (user) {
    router.push('/collectiondisplay')
    }
}

  }, [session, user])

  function logOutAndHome () {
    handleLogOut(setSession, setUser); 
    };

  if (!session) {
    return (<div id="log-in-page">
    <div id="log-in-section">
      <h1 id="log-in-title">Log in or Create an Account</h1>
      <Auth supabaseClient={supabase} providers={[]} appearance={supabaseTheme} theme="dark" />
    </div>
  </div>)

    } else {
    return (
        <div id="log-in-page">
            <div id="log-in-section">
                <h1 id="log-in-title">Welcome {session.user.email}</h1>
                <button onClick={logOutAndHome}>Log Out</button>
            </div>
        </div>
    )
  }

}