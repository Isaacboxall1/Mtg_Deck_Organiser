import EditList from "@/app/components/EditList"
import {dummyInfo} from "@/utility/dummydata"

export default function EditCollection() {

    return (
        <div>
            <h1>Edit your Collection</h1>
            <EditList cardArray={dummyInfo}/> 
        </div>
    )

}