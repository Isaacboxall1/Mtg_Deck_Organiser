'use client'

import ListFormattedByType from "@/app/components/ListFormattedByType";
import { useState } from "react";
import styles from './collectiondisplay.module.css';
import GroupToggle from "@/app/components/globals/GroupToggle";
import Link from "next/link";
import Image from "next/image";
import NavButton from "@/app/components/globals/NavButton";

export default function CollectionDisplay () {

  // allow log in so that users can have their own collections
  // add link to home page to navigate to your collection
  const [sortCriteria, setSortCriteria] = useState("type")

    return ( 
        <div className={styles.collectionDisplay}>

          <h1>Isaacs Card Collection</h1>
          {/* <Link href="/addcardstocollection"><button>Add Cards To Collection <Image width='40' height='40' src='/addcard.svg' alt='add card icon'/></button></Link> */}
          <NavButton location="addCardsToCollection"/>
          <GroupToggle setSortCriteria={setSortCriteria} sortCriteria={sortCriteria}/>
          <ListFormattedByType sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/> 
        </div>
    )
}
