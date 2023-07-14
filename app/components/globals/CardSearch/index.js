import { queryCard } from "@/utility/database/querycard";
import { useEffect, useState } from "react";
import styles from './cardsearch.module.css';
import Image from 'next/image';
import ManaSlider from "../selectors/ManaSlider";
import { comfortaaTheme } from '@/utility/muiTheme';
import { ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ColorSelector from "../selectors/ColorSelector";
import DropDownSelector from "../selectors/DropDownSelector";

export default function CardSearch ({Searchlocation, setSearchReturn}) {
    
    const [searchInput, setSearchInput] = useState('');
    const [manaRange, setManaRange] = useState([0,6]);
    const [moreOptions, setMoreOptions] = useState(false);
    const [rarity, setRarity] = useState('');
    const [format, setFormat] = useState('');
    const [selectedColors, setSelectedColors] = useState(['W', 'U', 'B', 'R', 'G', 'C']);
    const [searchParams, setSearchParams] = useState({rarity: '', format: '', manaRange: [0,6], selectedColors: ['W', 'U', 'B', 'R', 'G', 'C']});

    useEffect(() => {
        if(moreOptions) {
        setSearchParams({rarity, format, manaRange, selectedColors});
        }
    }, [rarity, format, manaRange, selectedColors, moreOptions])

    useEffect(() => {
        console.log(searchInput);
        console.log(searchParams);
    }, [searchInput, searchParams])

    async function handleSearch() { 
        let array = await queryCard(searchInput);
        setSearchReturn(array);
    }

    const dropdownProps = {
        rarity,
        setRarity,
        format,
        setFormat
    }

    return (
        <div className={styles.searchBar} id={moreOptions ? styles.moreOptions : null}>
                <form className={styles.searchForm}  onSubmit={(e)=> {e.preventDefault(); handleSearch()}}>
                    <input className={styles.searchInput} type="text" value={searchInput} placeholder='Search' onChange={(e) => setSearchInput(e.target.value)}/>
                    <ThemeProvider theme={comfortaaTheme}>
                    <FormControlLabel control={<Switch/>} label="Advanced" checked={moreOptions} onChange={() => setMoreOptions(!moreOptions)}/>
                    </ThemeProvider>
                    <button className={styles.searchButton} type="submit" onClick={handleSearch}><Image src='/search.svg' alt='search icon' height={20} width={20} /></button>
                </form>
                <div className={styles.extraOptions} id={moreOptions ? styles.visible : styles.hidden}>
                    <ManaSlider manaRange={manaRange} setManaRange={setManaRange}/>
                    <ColorSelector selectedColors={selectedColors} setSelectedColors={setSelectedColors}/>
                    <DropDownSelector {...dropdownProps}/>
                </div>

        </div>
    )
}