import Image from "next/image";

export default function RarityIcon({ rarity, size }) {
  if (!rarity) {
    rarity = "common";
  }
  if (!size) {
    size = 20;
  }
  return (
    <div
      id={style}
    >
      <Image
        src={`/rarity/${rarity}.svg`}
        alt={`${rarity} rarity`}
        height={size}
        width={size}
      />
    </div>
  );
}
