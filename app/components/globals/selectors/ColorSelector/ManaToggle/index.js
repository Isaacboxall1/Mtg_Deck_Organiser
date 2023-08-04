import ManaIcon from "../../../ManaIcon";
import { useState, useEffect } from "react";
import styles from "./manatoggle.module.css";

export default function ManaToggle({
  appendToActiveArray,
  removeFromActiveArray,
  color,
  selectedColors,
}) {
  const [active, setActive] = useState(true);
  function handleClick() {
    if (active && selectedColors.includes(color)) {
      removeFromActiveArray(color);
      setActive(!active);
    } else if (!active && !selectedColors.includes(color)) {
      appendToActiveArray(color);
      setActive(!active);
    }
  }

  return (
    <div
      onClick={handleClick}
      className={active ? styles.active : styles.inactive}
    >
      {active ? <ManaIcon value={color} fill="filled" size={20} /> : <ManaIcon value={color} fill="inset" size={20} />}
    </div>
  );
}
