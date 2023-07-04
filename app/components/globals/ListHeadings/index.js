import styles from './listheadings.module.css';
export default function ListHeadings() {
    
    return (
        <div className={styles.columnlayoutlong}>
            <b>Card Name</b>
            <b>Colors</b>
            <b>Supertype</b>
            <b>Subtype</b> 
            <b>Rarity</b>
            <b>CMC</b>
            <b>Est. Value</b>
            <b>Quantity</b>
        </div>

    )
}