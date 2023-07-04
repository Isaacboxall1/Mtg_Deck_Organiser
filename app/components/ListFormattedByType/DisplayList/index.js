import styles from './displaylist.module.css';
import RowDisplay from './RowDisplay';


export default function DisplayList({cardArray, setUpdateNeeded, setCollection, collection}) {

    return (
        <div className={styles.typegroup} >
            {cardArray?.map((card, index) => {
                return (
                    <RowDisplay card={card} key={index} setUpdateNeeded={setUpdateNeeded} setCollection={setCollection} collection={collection}/>          
                    )})}
        </div>
    )}

