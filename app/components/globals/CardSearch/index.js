import { queryCard } from "@/utility/database/querycard";
import { useEffect, useState } from "react";

export default function CardSearch (Searchlocation, setSearchReturn) {
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        console.log(searchInput);
    }, [searchInput])

    // onSubmit of form queryCard(searchInput)
    // set searchReturn to the result of queryCard

    return (
        <div className="card-search">
                <form onSubmit={(e)=> e.preventDefault()}>
                    <>
                    <label>Search</label>
                    <input type="text" value={searchInput} placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
                    </>
                    <button type="submit" onClick={()=> queryCard(searchInput)}>Search</button>
                </form>
        </div>
    )
}