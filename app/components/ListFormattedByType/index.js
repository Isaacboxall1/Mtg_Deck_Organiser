import DisplayList from "./DisplayList";
import { formatByCriteria } from "@/utility/functions/formatIntoTypes";

export default function ListFormattedByType({cardArray}) {
    
    let sortedList = formatByCriteria("type", cardArray)
    return (
        <div>
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