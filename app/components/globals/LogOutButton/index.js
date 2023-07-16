'use client'

import styles from './logoutbutton.module.css'
import { handleLogOut } from '@/utility/database/supabase/handleLogOut'
import { useAuth } from '../../ContextProvider';
import { useRouter } from 'next/navigation'

export default function LogOutButton() {

    const router = useRouter()

    const { setUser, setSession } = useAuth()

    async function logOutAndHome () {
        await handleLogOut(setSession, setUser); 
        router.push('/')
        }

    return (
        <div className={styles.LogOutButton}>
            <button onClick={logOutAndHome}>Log Out</button>
        </div>
    )
}