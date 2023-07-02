import Image from "next/image";
import DisplayGrid from "@/app/components/ImageDisplayGrid";
import ListFormattedByType from "@/app/components/ListFormattedByType";
import { dummyInfo } from "@/utility/dummydata";

export default function CollectionDisplay () {

    const cardArray = [{name: 'card1', img: '/card1.jpg', quantity: 4, type: "Creature — Human Knight"}, {name: 'card2', img: '/card2.jpg', quantity: 2, type: "Legendary Artifact — Equipment"}, {name: 'card3', img: '/card3.jpg', quantity: 3, type: "Basic Land — Plains"}];

    return ( 
        <div>
          <h1>Isaacs Card Collection</h1>          
          <button>Edit</button>
          <ListFormattedByType cardArray={dummyInfo}/> 
        </div>
    )
}
