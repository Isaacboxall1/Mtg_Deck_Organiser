import Link from "next/link";
import Image from "next/image";
import styles from "./navButton.module.css";
export default function NavButton({ location }) {
  let href, text, imgSrc, imgAlt;
  console.log(location);
  switch (location) {
    case "addCardsToCollection":
      href = "/addcardstocollection";
      text = "Add Cards To Collection";
      imgSrc = "icons/addcard.svg";
      imgAlt = "add card icon";
      break;
    case "home":
      href = "/";
      text = "Home";
      imgSrc = "icons/home.svg";
      imgAlt = "home icon";
      break;
    case "userCollection":
      href = "/collectiondisplay";
      text = "Collection";
      imgSrc = "/icons/collection.svg";
      imgAlt = "collection icon";
      break;
    default:
      href = "/";
      text = "Home";
      imgSrc = "/icons/home.svg";
      imgAlt = "home icon";
      break;
  }

  return (
    <Link style={{ textDecoration: "none" }} href={href}>
      <button className={styles.navButton}>
        {text} <Image width="30" height="30" src={imgSrc} alt={imgAlt} />
      </button>
    </Link>
  );
}
