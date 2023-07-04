import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { use, useEffect, useState } from "react";
import { fetchUserCards } from "@/utility/database/fetchusercollection";
import ListHeadings from "./ListHeadings";
import styles from "./listformattedbytype.module.css";

// TO DO
// add a search bar to search for cards by name
// add a button to sort by quantity
// add a button to sort by value
// convert different sorting methods into a toggle button
// style the page

export default function ListFormattedByType({sortCriteria}) {

    const [totalValue, setTotalValue] = useState(0)
    const [collection, setCollection] = useState([])
    const [updateNeeded , setUpdateNeeded] = useState(false);

    // when the sort criteria is changed, the collection will be fetched and formatted by the new criteria
    useEffect(() => {
        async function fetchAndFormat() {
            let unsortedCollection = await fetchUserCards(process.env.NEXT_PUBLIC_USER_ID)
            let resortedCollection = formatByCriteria(sortCriteria, [...unsortedCollection])
            setCollection([...resortedCollection])
        }
        fetchAndFormat()
    }, [sortCriteria, updateNeeded])

    // when the collection is updated, the total value will be calculated
    useEffect(() => {
        let total = 0
        collection.forEach(type => {
            type.cards.forEach(card => {
                total += card.price * card.quantity
            })
        })
        // round the total to 2 decimal places
        total = Math.round(total * 100) / 100
        setTotalValue(total)
    }, [collection])

    // when a change is made to a card in the deck or a card is added, updateNeeded will be set to true
    // this will call the api to get the new collection and update the collection state
    // this will also set updateNeeded to false, so that the api call is not made again

    useEffect(() => {
        setUpdateNeeded(false)
        console.log("update needed")
    }, [updateNeeded])

    return (

        <div className={styles.fullwidth}>
       <div className={styles.alignedrow}><h2>Collection Estimated Value:</h2><h3>£{totalValue}</h3></div>
        <div id={styles.displaylistparent}>
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
    )
}