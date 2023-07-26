import styles from './editdisplay.module.css'

export default function EditDisplay({quantity, incrementQuantity, decrementQuantity}) {
    
    return (
        <div className={styles.editContainer}>
            <button onClick={incrementQuantity} className={styles.editButton}>+</button>
            <p>x{quantity}</p>
            {quantity > 0 ? <button onClick={decrementQuantity} className={styles.editButton}>-</button> : <button disabled className={styles.editButton}>-</button>}
        </div>
    )
}
    