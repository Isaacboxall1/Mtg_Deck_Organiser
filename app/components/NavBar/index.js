"use client";
import styles from "./navbar.module.css";
import LogOutButton from "../globals/LogOutButton";
import { useAuth } from "../ContextProvider";
import { useEffect } from "react";
import LogInButton from "../globals/LogInButton";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);
  
  if (user) {
    return (
      <div className={styles.NavBar}>
        <Link href="/" className={styles.link}>
          <div className={styles.logoAndTitle}>
            <Image
              src="/logo/jankboxblack.svg"
              alt="Jank Box Logo"
              height={40}
              width={40}
            />
            <h1>Jank Box</h1>
          </div>{" "}
        </Link>
        <p>Welcome back {user ? user[0]?.first_name : null}!</p>

        <Link href="/collectiondisplay" className={styles.link}>
          Collection
        </Link>
        <Link href="/addcardstocollection" className={styles.link}>
          Add Cards
        </Link>
        <Link href="/addcardstocollection/search" className={styles.link}>
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
        </Link>
        <LogOutButton />
      </div>
    );
  } else {
    return (
      <div className={styles.NavBar}>
        <Link href="/" className={styles.link}>
          <div className={styles.logoAndTitle}>
            <Image
              src="/logo/jankboxblack.svg"
              alt="Jank Box Logo"
              height={40}
              width={40}
            />
            <h1>Jank Box</h1>
          </div>
        </Link>
        <Link href="/collectiondisplay" className={styles.link}>
          Collection
        </Link>
        <Link href="/addcardstocollection" className={styles.link}>
          Add Cards
        </Link>
        <Link href="/addcardstocollection/search" className={styles.link}>
          <Image
            src="/icons/search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
        </Link>
        <LogInButton />
      </div>
    );
  }
}
