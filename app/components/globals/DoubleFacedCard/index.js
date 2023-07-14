import styles from './doublefacedcard.module.css'
import { useState } from 'react';
export default function DoubleFacedCard({front, back}) {
    
    const [flipped, setFlipped] = useState(false);

    return (


  <div className={styles.deck}>
  <div className={styles.card + ' ' + (flipped ? styles.flipped : null) }>
    <div className={ styles.front + ' ' + styles.face } style={{backgroundImage: `url(${front})`}} onClick={()=> setFlipped(!flipped)}>
      </div>
      <div className={styles.back + ' ' + styles.face } onClick={()=> setFlipped(!flipped)} style={{backgroundImage: `url(${back})`}}>
      </div>
    </div>
  </div>


)}