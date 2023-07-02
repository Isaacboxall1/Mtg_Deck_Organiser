import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";
import { useState } from "react";

export default function ListFormattedByType({cardArray}) {

    const [sortCriteria, setSortCriteria] = useState("type")

    let sortedList = formatByCriteria(sortCriteria, cardArray)
    return (
        <div>
        <h2>Sort by: &#xe658;</h2>
        <button onClick={()=> {setSortCriteria('type')}}>Type</button>
        <button onClick={()=> {setSortCriteria('color')}}>Color</button>
        <button onClick={()=> {setSortCriteria('rarity')}}>Rarity</button>
            {sortedList.map((type, index) => {
                        return type.cards.length < 1 ? null : (
                            <div key={index}>
                                <h2>{type.name}</h2>
                                <DisplayList cardArray={type.cards} />
                            </div>
                    )}
            )}
        </div>
    )
}