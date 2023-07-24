

export default function RarityIcon({rarity, size}) {
    let style = styles.outline;
    let rarityHex = '#cec4c2'
    if(!rarity) {
        rarity = 'common';
    }
    if(!size) {
        size = 20;
    }

    switch (rarity) {
        case 'common':
            rarityHex = '#cec4c2';
            break;
        case 'uncommon':
            rarityHex = '#8fbcd2';
            break;
        case 'rare':
            rarityHex = '#999999';
            break;
        case 'mythic':
            rarityHex = '#f9ac90';
            break;
        default:
            rarityHex = '#cec4c2'
            break;
    }

    return (
        <div id={style} className={styles.rarityContainer} style={{backgroundColor: rarityHex}}>
        <Image src={`/rarity/${rarity}.svg`} alt={`${rarity} rarity`} height={size} width={size} style={{fill: fill}}/>
        </div>
    )


}