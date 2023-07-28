'use client'

import ListFormattedByType from "@/app/components/ListFormattedByType";
import styles from './collectiondisplay.module.css';
import { useAuth } from "@/app/components/ContextProvider";
import NavButton from "@/app/components/globals/NavButton";

export default function CollectionDisplay () {

const { user } = useAuth();
console.log(user?user[0]?.first_name: 'no user id')

    return ( 
        <div className={styles.collectionDisplay}>
          <h1>{user && user[0].first_name}&#39;s collection</h1>
          <NavButton location="addCardsToCollection"/>
          <ListFormattedByType/> 
        </div>
    )
}
