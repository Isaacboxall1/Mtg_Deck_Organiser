import Image from "next/image";
import DisplayGrid from "@/app/globals/components/ImageDisplayGrid";
import DisplayList from "@/app/globals/components/DisplayList";

export default function CollectionDisplay () {

    const cardArray = [{name: 'card1', img: '/card1.jpg', quantity: 4}, {name: 'card2', img: '/card2.jpg', quantity: 2}, {name: 'card3', img: '/card3.jpg', quantity: 3}];

    return ( 
        <div>
          <DisplayList cardArray={cardArray}/> 
        </div>
    )
}
