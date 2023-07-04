import styles from './displaylist.module.css';

import RowDisplay from './RowDisplay';


export default function DisplayList({cardArray, setUpdateNeeded}) {

    return (
        <div id={styles.displaylistparent}>
            {cardArray?.map((card, index) => {
                return (
                    <RowDisplay card={card} key={index} setUpdateNeeded={setUpdateNeeded} />          
                    )})}
        </div>
    )}

