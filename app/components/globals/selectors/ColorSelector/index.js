import styles from './colorselector.module.css';
import ManaIcon from '../../ManaIcon';
export default function ColorSelector() {
    
    return (
    <div className={styles.colorSelectorContainer}>
        <ManaIcon color='W' fill='filled' size={20}/>
        <ManaIcon color='U' fill='filled' size={20}/>
        <ManaIcon color='B' fill='filled' size={20}/>
        <ManaIcon color='R' fill='filled' size={20}/>
        <ManaIcon color='G' fill='filled' size={20}/>
        <ManaIcon color='C' fill='filled' size={20}/>
    </div>
)}