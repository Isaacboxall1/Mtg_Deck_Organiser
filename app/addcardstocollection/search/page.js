'use client'
import styles from './search.module.css'
import CardSearch from "@/app/components/globals/CardSearch"

export default function AddToCollectionSearch() {
    
    return (

    <div className={styles.searchForCollectionContainer}>
    <h1>Search for Cards To Add To Your Collection</h1>
    <CardSearch/>
    </div>
)}