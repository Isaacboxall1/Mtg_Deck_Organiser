import ManaIcon from '../globals/ManaIcon';
import styles from './deckpreview.module.css';
import Image from 'next/image';
export default function DeckPreview(deckDetails) {
  return <div className={styles.DeckPreviewContainer}>
        <h1 className={styles.DeckTitle}>Gisa Deck</h1>
    <div className={styles.CardArtBox}>
        <Image src="https://cards.scryfall.io/art_crop/front/7/7/779e3944-4342-4151-9963-87e8d41fd2ff.jpg?1680135257" alt='card' width={320} height={230} />
    </div>
    <div className={styles.DeckDetails}>
    <div className={styles.ColorsContainer}>
        <ManaIcon color="U" size={20} fill="none"/>
        <ManaIcon color="B" size={20} fill="none"/>
        <ManaIcon color="R" size={20} fill="none"/>
        <ManaIcon color="G" size={20} fill="none"/>
        <ManaIcon color="W" size={20} fill="none"/>
        </div>
        <h3>EDH/Commander</h3>
        <h5>1 day ago</h5>
        
    </div>
  </div>;
}