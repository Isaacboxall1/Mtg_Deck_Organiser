import ColorPieChart from "../../globals/ColorPieChart"
import SimpleBarChart from "../../globals/TypeGraph"
import { useEffect, useState } from "react"
import styles from "./liststats.module.css"
import Image from "next/image"
import { calculateValue } from "@/utility/functions/calculateValue"

export default function ListStats({collection, typeStats, uniqueNum}) {
    
    const [totalValue, setTotalValue] = useState(0)
      // when the collection is updated, the total value will be calculated
      useEffect(() => {
        let total = calculateValue(collection)
        setTotalValue(total)
    }, [collection])

    return (
        <div className={styles.alignedrow} id={styles.statsSection}>
        
        <ColorPieChart cardList={collection}/>
        <SimpleBarChart typeStats={typeStats}/>
        <div className={styles.textstats}>
            <div className={styles.spacedrow}>
                <Image width='50' height='50' className={styles.icon} src="icons/price.svg" alt="coins"/>
                <h3>£{totalValue}</h3>
            </div>
            <div className={styles.spacedrow}>
                <Image width='50' height='50' className={styles.icon} src="icons/cardstack.svg" alt="cards"/>
                <h3>{uniqueNum} Unique Cards</h3>
            </div>
        </div>
        
        </div>
    )
}