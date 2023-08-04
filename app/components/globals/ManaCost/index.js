import ManaIcon from "../ManaIcon";
import styles from "./manacost.module.css";
import { convertManaCostToArray } from "@/utility/functions/convertManaCostToArray";
export default function ManaCost({manaCost, size}) {
  
  const formattedManaCost = convertManaCostToArray(manaCost);

  return (
    <div className={styles.manaCostContainer}>
      {formattedManaCost.map((mana, index) => {
        return <ManaIcon key={index} value={mana} size={size} fill='none'/>;
      })}
    </div>
  );
}
