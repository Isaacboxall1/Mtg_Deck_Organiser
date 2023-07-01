export default function DisplayList({cardArray}) {

    return (
        <div>
            {cardArray.map((card, index) => {
                return (
        <div key={index}>
                    <p>{card.name}</p>
                    <p>x {card.quantity}</p>
                    <p>value: {card.price}</p>
                    <p>colors: {card.colors?.map(color=> {return color})}</p>
                    <p>type: {card.type}</p>
                    <p>set: {card.set}</p>
                    <p>artist: {card.artist}</p>
                    <p>text: {card.text}</p>
                    <p>flavor: {card.flavor}</p>
                    <p>power: {card.power}</p>
                    <p>toughness: {card.toughness}</p>
        </div>
            )})}
        </div>
    )}