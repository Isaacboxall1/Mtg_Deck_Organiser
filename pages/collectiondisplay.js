import Image from "next/image";
import DisplayGrid from "@/globals/components/DisplayGrid";

export default function CollectionDisplay () {

    const cardArray = [{name: 'card1', img: '/card1.jpg', quantity: 4}, {name: 'card2', img: '/card2.jpg', quantity: 2}, {name: 'card3', img: '/card3.jpg', quantity: 3}];
    
    return ( 
        <div>
            <DisplayGrid cardArray={cardArray}/>
        </div>
    )
}
