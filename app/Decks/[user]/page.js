import styles from './alluserdecks.module.css'
import DeckPreview from '@/app/components/DeckPreview';
export default function UserDecks({ params }) {
  return (
    <div className={styles.PageContainer}>
      <DeckPreview />
    </div>
  );
}
