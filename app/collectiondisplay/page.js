'use client'

import ListFormattedByType from "@/app/components/ListFormattedByType";
import styles from './collectiondisplay.module.css';
import { useAuth } from "@/app/components/ContextProvider";

export default function CollectionDisplay () {

const { user } = useAuth();

    return ( 
        <div className={styles.collectionDisplay}>
          <h1>{user && user[0].first_name}&#39;s collection</h1>
          <ListFormattedByType/> 
        </div>
    )
}
