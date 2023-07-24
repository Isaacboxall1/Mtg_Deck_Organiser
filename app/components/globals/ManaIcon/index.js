import Image from 'next/image'
import styles from './manaicon.module.css'

export default function ManaIcon({color, fill, size, num}) {
    let style = styles.outline;
    let colorHex = '#cec4c2'
    if(!color) {
        color = 'C';
    }
    if(!size) {
        size = 20;
    }

    switch (fill) {
        case 'filled':
            style = styles.filled;
            break;
        case 'outline':
            style = styles.outline;
            break;
        case 'none':
            style = styles.none;
            break;
        default:
            break;
    }

    switch (color) {
        case 'W':
            colorHex = '#f5f4dc';
            break;
        case 'U':
            colorHex = '#8fbcd2';
            break;
        case 'B':
            colorHex = '#999999';
            break;
        case 'R':
            colorHex = '#f9ac90';
            break;
        case 'G':
            colorHex = '#a5c296';
            break;
        default:
            colorHex = '#cec4c2'
            break;
    }

    if(!num) {
    return (
        <div id={style} className={styles.manaContainer} style={{backgroundColor: colorHex}}>
        <Image src={`/mana/${color}.svg`} alt={`${color} mana`} height={size} width={size} style={{fill: fill}}/>
        </div>
    )
    } else if (num > 0) {
        return (
            <div id={style} className={styles.manaContainer} style={{backgroundColor: colorHex}}>
            <Image src={`/mana/${color}.svg`} alt={`${color} mana`} height={size} width={size} style={{fill: fill}}/>
            </div>
        )
    } 
    }
