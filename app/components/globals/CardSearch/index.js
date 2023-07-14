import { queryCard } from "@/utility/database/querycard";
import { useEffect, useState } from "react";
import styles from './cardsearch.module.css';
import Image from 'next/image';
import ManaSlider from "../selectors/ManaSlider";
import { comfortaaTheme } from '@/utility/muiTheme';
import { ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function CardSearch ({Searchlocation, setSearchReturn}) {
    
    const [searchInput, setSearchInput] = useState('');
    const [manaRange, setManaRange] = useState([0,6]);
    const [moreOptions, setMoreOptions] = useState(false);
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
        <div className={styles.searchBar} id={moreOptions && styles.moreOptions}>
                <form className={styles.searchForm}  onSubmit={(e)=> {e.preventDefault(); handleSearch()}}>
                    <input className={styles.searchInput}type="text" value={searchInput} placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
                    <ThemeProvider theme={comfortaaTheme}>
                    <FormControlLabel control={<Switch defaultChecked />} label="Advanced" checked={moreOptions} onChange={() => setMoreOptions(!moreOptions)}/>
                    </ThemeProvider>
                    <button className={styles.searchButton} type="submit" onClick={handleSearch}><Image src='/search.svg' alt='search icon' height={20} width={20} /></button>

                </form>
               
                <div className={styles.extraOptions} id={moreOptions ? styles.visible : styles.hidden}>
                    <ManaSlider manaRange={manaRange} setManaRange={setManaRange}/>
                </div>
        </div>
    )
}