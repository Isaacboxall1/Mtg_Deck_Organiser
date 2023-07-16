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