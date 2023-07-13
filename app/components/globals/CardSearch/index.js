import { queryCard } from "@/utility/database/querycard";
import { useEffect, useState } from "react";
import styles from './cardsearch.module.css';
import Image from 'next/image';

export default function CardSearch ({Searchlocation, setSearchReturn}) {
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        console.log(searchInput);
    }, [searchInput])

    async function handleSearch() { 
        let array = await queryCard(searchInput);
        setSearchReturn(array);
    }
    // onSubmit of form queryCard(searchInput)
    // set searchReturn to the result of queryCard

    return (
        <div className={styles.searchBar}>
                <form className={styles.searchForm} onSubmit={(e)=> {e.preventDefault(); handleSearch()}}>
                    <>
                    <input className={styles.searchInput}type="text" value={searchInput} placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
                    </>
                    <button className={styles.searchButton} type="submit" onClick={handleSearch}><Image src='/search.svg' alt='search icon' height={20} width={20} /></button>
                </form>
        </div>
    )
}