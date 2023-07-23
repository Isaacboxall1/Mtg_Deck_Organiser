import CardImageDisplay from "./CardImageDisplay"
import { formatIntoTypes } from "@/utility/functions/formatIntoTypes"

export default function ImageDisplayGrid({ cardArray }) {
    let sortedList = formatIntoTypes(cardArray)

    return (
        <>
        {sortedList.map((type, index) => {
            return type.cards.length < 1 ? null : (
                <div key={index}>
                    <h2>{type.name}</h2>
                    {type.cards.map((card, index) => {
                        return <CardImageDisplay card={card}  key={index}/>
                    }
                    )}
                </div>
            )
                    }
        )}
        
        </>
    )
    
    // return ( 
    // {   sortedList.map((card, index) => {
    //     return (<CardImageDisplay card={card}  key={index}/>
    //     )
    //         }       
    //     )
    // }
    // )

}

    