import styles from './grouptoggle.module.css';
export default function GroupToggle({setSortCriteria, sortCriteria}) {

    return ( 
    <div className={styles.groupToggleContainer}>
        <label>Group By:</label>
    <div className={styles.groupToggle}>
    <button className={sortCriteria === 'type' ? styles.active : 'inactive'} onClick={()=> {setSortCriteria('type')}}>Type</button>
    <button className={sortCriteria === 'color' ? styles.active : 'inactive'} onClick={()=> {setSortCriteria('color')}}>Color</button>
    <button className={sortCriteria === 'rarity' ? styles.active : 'inactive'} onClick={()=> {setSortCriteria('rarity')}}>Rarity</button>
    </div>
    </div>)
}
