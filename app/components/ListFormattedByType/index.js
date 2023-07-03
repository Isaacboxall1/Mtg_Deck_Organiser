import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { useEffect, useState } from "react";
import EditList from "../EditList";


export default function ListFormattedByType({cardArray}) {

    const [sortCriteria, setSortCriteria] = useState("type")
    let sortedList = formatByCriteria(sortCriteria, cardArray)
    const [collection, setCollection] = useState(sortedList)
    const [updateNeeded , setUpdateNeeded] = useState(false);

    useEffect(() => {
        let resortedCollection = formatByCriteria(sortCriteria, cardArray)
        setCollection(resortedCollection)
    }, [sortCriteria, cardArray])

    useEffect(() => {
        setUpdateNeeded(false)
        console.log("update needed")
    }, [updateNeeded])

    return (
        <div>
        <h2>Sort by: &#xe658;</h2>
        <button onClick={()=> {setSortCriteria('type')}}>Type</button>
        <button onClick={()=> {setSortCriteria('color')}}>Color</button>
        <button onClick={()=> {setSortCriteria('rarity')}}>Rarity</button>
            {collection.map((type, index) => {
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