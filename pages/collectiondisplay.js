// import ImageDisplayGrid from "@/app/components/ImageDisplayGrid";
import ListFormattedByType from "@/app/components/ListFormattedByType";
import { dummyInfo } from "@/utility/dummydata";
import { useState } from "react";

export default function CollectionDisplay () {

  const [sortCriteria, setSortCriteria] = useState("type")

    return ( 
        <div>
          <h1>Isaacs Card Collection</h1>          
          <ListFormattedByType sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/> 
          {/* <ImageDisplayGrid cardArray={dummyInfo}/> */}
        </div>
    )
}
