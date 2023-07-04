// import ImageDisplayGrid from "@/app/components/ImageDisplayGrid";
import ListFormattedByType from "@/app/components/ListFormattedByType";
import { dummyInfo } from "@/utility/dummydata";

export default function CollectionDisplay () {


    return ( 
        <div>
          <h1>Isaacs Card Collection</h1>          
          <ListFormattedByType cardArray={dummyInfo}/> 
          {/* <ImageDisplayGrid cardArray={dummyInfo}/> */}
        </div>
    )
}
