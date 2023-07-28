'use client'
import React, {useContext, useState, useEffect } from 'react'
import { supabase } from '@/utility/config/supabase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function ContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
        const session = localStorage.getItem('session')
        if (session) {
            setSession(JSON.parse(session))
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);
    
    useEffect(() => {
        if (session) return;
        
        supabase.auth.getSession().then(({ data: { session } }) => {
          localStorage.setItem('session', JSON.stringify(session))
          setSession(session)
        })
    
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          localStorage.setItem('session', JSON.stringify(session))
          setSession(session)
        })
    
        return () => subscription.unsubscribe()
      }, [session])

    const value = {
        user,
        setUser,
        session,
        setSession
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}