'use client'
import styles from './navbar.module.css'
import LogOutButton from '../globals/LogOutButton'
import { useAuth } from '../ContextProvider'
import { useEffect } from 'react'

export default function NavBar() {

    const { user } = useAuth()
    useEffect(() => {   
        console.log(user)
    }, [user])
    return (
        <div className={styles.NavBar}>

            <h1>NavBar</h1>
            <p>Welcome back {user? user[0].first_name : null}!</p>
            <LogOutButton />
        </div>
    )
}