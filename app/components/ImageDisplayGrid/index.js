import CardImageDisplay from "./CardImageDisplay"

export default function ImageDisplayGrid({ cardArray }) {
    return (
    cardArray = cardArray.map((card, index) => {
        return <CardImageDisplay card={card}  key={index}/>
    }))}

    