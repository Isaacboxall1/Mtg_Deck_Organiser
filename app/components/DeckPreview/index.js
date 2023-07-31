'use client'

import ManaIcon from "../globals/ManaIcon";
import styles from "./deckpreview.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DeckPreview({deckDetails}) {

  const { title, colors, format, date, cardArt, user } = deckDetails;
    const router = useRouter();

  return (
    <div className={styles.DeckPreviewContainer} onClick={()=> router.push(`/Decks/${user}/${title}`)}>
      <h1 className={styles.DeckTitle}>{title}</h1>
      <div className={styles.CardArtBox}>
        <Image src={cardArt} alt="card" width={340} height={230} />
      </div>
      <div className={styles.DeckDetails}>
        <div className={styles.ColorsContainer}>
          {colors.map((color, index) => {
            return <ManaIcon key={index} color={color} size={20} fill="none" />;
          })}
        </div>
        <h3>{format}</h3>
        <h5>{date}</h5>
      </div>
    </div>
  );
}
