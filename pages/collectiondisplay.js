import ListFormattedByType from "@/app/components/ListFormattedByType";
import { useState } from "react";
import styles from './collectiondisplay.module.css';
import GroupToggle from "@/app/components/globals/GroupToggle";
import Link from "next/link";

export default function CollectionDisplay () {

  // allow log in so that users can have their own collections
  // add link to home page to navigate to your collection
  const [sortCriteria, setSortCriteria] = useState("type")

    return ( 
        <div className={styles.collectionDisplay}>

          <h1>Isaacs Card Collection</h1>
          <Link href="/addcardstocollection"><button>Add Cards To Collection +</button></Link>
          <GroupToggle setSortCriteria={setSortCriteria} sortCriteria={sortCriteria}/>
          <ListFormattedByType sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/> 
        </div>
    )
}
