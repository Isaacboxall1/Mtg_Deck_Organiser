'use client'
import styles from './navbar.module.css'
import LogOutButton from '../globals/LogOutButton'
import { useAuth } from '../ContextProvider'
import { useEffect } from 'react'
import LogInButton from '../globals/LogInButton'
import Link from 'next/link'

export default function NavBar() {

    const { user } = useAuth()
    useEffect(() => {   
        console.log(user)
    }, [user])
    if(user) {
    return (
        <div className={styles.NavBar}>
            <h1><Link href='/'>NavBar</Link></h1>
            <p>Welcome back {user? user[0].first_name : null}!</p>
            <LogOutButton />
        </div>
    )
    } else {
        return (
            <div className={styles.NavBar}>
              <h1><Link href='/'>NavBar</Link></h1>
                <LogInButton/>
            </div>
        )
    }
}