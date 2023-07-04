import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { use, useEffect, useState } from "react";
import { fetchUserCards } from "@/utility/database/fetchusercollection";


export default function ListFormattedByType() {

    const [sortCriteria, setSortCriteria] = useState("type")
    const [collection, setCollection] = useState([])
    const [updateNeeded , setUpdateNeeded] = useState(false);

    useEffect(() => {

        async function fetchAndFormat() {
            let unsortedCollection = await fetchUserCards(process.env.NEXT_PUBLIC_USER_ID, setCollection)
            let resortedCollection = formatByCriteria(sortCriteria, unsortedCollection)
            setCollection(resortedCollection)
        }

        fetchAndFormat()
    }, [sortCriteria, updateNeeded])


    // when a change is made to a card in the deck or a card is added, updateNeeded will be set to true
    // this will call the api to get the new collection and update the collection state
    // this will also set updateNeeded to false, so that the api call is not made again

    useEffect(() => {
        setUpdateNeeded(false)
        console.log("update needed")
    }, [updateNeeded])

    return (

        <div>
        <h2>List By: &#xe658;</h2>
        <button onClick={()=> {setSortCriteria('type')}}>Type</button>
        <button onClick={()=> {setSortCriteria('color')}}>Color</button>
        <button onClick={()=> {setSortCriteria('rarity')}}>Rarity</button>

            {collection?.map((type, index) => {
                        return type.cards.length < 1 ? null : (
                            <div key={index}>
                                <h2>{type.name}</h2>
                                <DisplayList cardArray={type.cards} setUpdateNeeded={setUpdateNeeded} />
                            </div>
                    )}
            )}

        </div>
    )
}