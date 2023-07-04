import ListFormattedByType from "@/app/components/ListFormattedByType";
import { useState } from "react";
import styles from './collectiondisplay.module.css';
import GroupToggle from "@/app/components/ListFormattedByType/GroupToggle";

export default function CollectionDisplay () {

  const [sortCriteria, setSortCriteria] = useState("type")

    return ( 
        <div className={styles.collectionDisplay}>
          <h1>Isaacs Card Collection</h1>
          <GroupToggle setSortCriteria={setSortCriteria} sortCriteria={sortCriteria}/>
          <ListFormattedByType sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/> 
        </div>
    )
}
