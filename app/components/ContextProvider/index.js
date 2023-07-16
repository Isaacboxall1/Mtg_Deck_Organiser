'use client'

import React, {useContext, useState } from 'react'

const AuthContext = React.createContext()

export default function ContextProvider({children}) {
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)

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