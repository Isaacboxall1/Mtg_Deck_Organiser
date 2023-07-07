import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { use, useEffect, useState } from "react";
import { fetchUserCards } from "@/utility/database/fetchusercollection";
import ListHeadings from "../globals/ListHeadings";
import styles from "./listformattedbytype.module.css";
import { superTypeSplit } from "@/utility/functions/formatToStats";
import ListStats from "./ListStats";

// TO DO
// add a search bar to search for cards by name
// add a button to sort by quantity
// add a button to sort by value
// convert different sorting methods into a toggle button
// style the page

export default function ListFormattedByType({sortCriteria}) {


    const [collection, setCollection] = useState([])
    const [updateNeeded , setUpdateNeeded] = useState(false);
    const [typeStats, setTypeStats] = useState([])
    const [uniqueNum, setUniqueNum] = useState(0)

    // when the sort criteria is changed, the collection will be fetched and formatted by the new criteria
    useEffect(() => {
        async function fetchAndFormat() {
            let unsortedCollection = await fetchUserCards(process.env.NEXT_PUBLIC_USER_ID)
            let resortedCollection = formatByCriteria(sortCriteria, [...unsortedCollection])
            setUniqueNum(unsortedCollection.length)
            let sortedTypeStats = formatByCriteria('type', [...unsortedCollection])
            let typeStats = superTypeSplit(sortedTypeStats)
            console.log(typeStats)
            setTypeStats(typeStats)
            setCollection([...resortedCollection])
        }
        fetchAndFormat()
    }, [sortCriteria, updateNeeded])

  

    useEffect(() => {
        console.log(typeStats)
    }, [typeStats])

    // when a change is made to a card in the deck or a card is added, updateNeeded will be set to true
    // this will call the api to get the new collection and update the collection state
    // this will also set updateNeeded to false, so that the api call is not made again

    useEffect(() => {
        setUpdateNeeded(false)
  


    }, [updateNeeded])

    return (

        <div className={styles.fullwidth}>
            <div id={styles.displaylistparent}>
                <ListStats collection={collection} typeStats={typeStats} uniqueNum={uniqueNum}/>
                <div className={styles.leftalignedrow}>
                <ListHeadings/>
                {collection?.map((type, index) => {
                            return type.cards.length < 1 ? null : (
                                <div key={index} className={styles.typegroup}>
                                    <h2>{type.name}</h2>
                                    <DisplayList cardArray={type.cards} setUpdateNeeded={setUpdateNeeded} setCollection={setCollection} collection={collection}/>
                                </div>
                        )}
                )}
                </div>
            </div>
        </div>
    )
}