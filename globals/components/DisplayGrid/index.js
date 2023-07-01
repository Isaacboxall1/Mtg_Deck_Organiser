import CardDisplay from "./CardDisplay"

export default function DisplayGrid({ cardArray }) {
    return (
    cardArray = cardArray.map((card, index) => {
        return <CardDisplay card={card}  key={index}/>
    }))}

    