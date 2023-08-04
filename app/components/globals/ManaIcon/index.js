import Image from "next/image";
import styles from "./manaicon.module.css";
import { colors } from "@/utility/colors";

export default function ManaIcon({ value, fill, size}) {
  let style = styles.outline;

  const { colorless, white, blue, black, red, green } = colors;
  let color;
  let num;

  if(typeof value == 'string') {
    color = value
  }
  else if(typeof value == 'number') {
    num = value
  }
  else return;

  let colorHex = colorless;

  if (!size) {
    size = 20;
  }

  switch (fill) {
    case "filled":
      style = styles.filled;
      break;
    case "outline":
      style = styles.outline;
      break;
    case "none":
      style = styles.none;
      break;
    case "inset":
      style = styles.inset;
      break;
    default:
      break;
  }

  switch (color) {
    case "W":
      colorHex = white;
      break;
    case "U":
      colorHex = blue;
      break;
    case "B":
      colorHex = black;
      break;
    case "R":
      colorHex = red;
      break;
    case "G":
      colorHex = green;
      break;
    default:
      colorHex = colorless;
      break;
  }

  if (num || num === 0) {
    return (
      <div
        id={style}
        className={styles.manaContainer}
        style={{ backgroundColor: colorHex }}
      >
        <Image
          src={`/mana/cost/${num}.svg`}
          alt={`${num} cmc`}
          height={size}
          width={size}
          style={{ fill: fill }}
        />
      </div>
    );
  } else {
    return (
      <div
        id={style}
        className={styles.manaContainer}
        style={{ backgroundColor: colorHex }}
      >
        <Image
          src={`/mana/${color}.svg`}
          alt={`${color} mana`}
          height={size}
          width={size}
          style={{ fill: fill }}
        />
      </div>
    );
  }
}
