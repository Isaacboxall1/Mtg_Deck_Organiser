import CardDisplayShort from "@/app/components/globals/CardDisplayShort";
import styles from './displayListShort.module.css'
export default function DisplayListShort({ cardArray }) {
  return (
    <div className={styles.displayListContainer}>
      {cardArray.map((card, index) => {
        return <CardDisplayShort key={index} card={card} />;
      })}
    </div>
  );
}

