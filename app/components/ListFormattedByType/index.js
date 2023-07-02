import DisplayList from "./DisplayList";
import { formatIntoTypes } from "@/utility/functions/formatIntoTypes";

export default function ListFormattedByType({cardArray}) {
    
    let sortedList = formatIntoTypes(cardArray);

    return (
        <div>
            {sortedList.map((type, index) => {
                return (
                    <div key={index}>
                        <h2>{type.name}</h2>
                        <DisplayList cardArray={type.cards} />
                    </div>
            )}
            )}
        </div>
    )
}