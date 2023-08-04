import ManaIcon from "../ManaIcon";
import { convertManaCostToArray } from "@/utility/functions/convertManaCostToArray";
export default function ManaCost({manaCost}) {
  
  const formattedManaCost = convertManaCostToArray(manaCost);

  return (
    <div>
      {formattedManaCost.map((mana, index) => {
        return <ManaIcon key={index} value={mana} />;
      })}
    </div>
  );
}
