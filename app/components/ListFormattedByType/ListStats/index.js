import ColorPieChart from "../../globals/ColorPieChart"
import SimpleBarChart from "../../globals/TypeGraph"
import { useEffect, useState } from "react"
import styles from "./liststats.module.css"

export default function ListStats({collection, typeStats, uniqueNum}) {
    
    const [totalValue, setTotalValue] = useState(0)
      // when the collection is updated, the total value will be calculated
      useEffect(() => {
        let total = 0
        collection?.forEach(type => {
            type.cards.forEach(card => {
                total += card.price * card.quantity
            })
        })
        // round the total to 2 decimal places
        total = Math.round(total * 100) / 100
        console.log(total)
        setTotalValue(total)
    }, [collection])

    return (
        <div className={styles.alignedrow} id={styles.statsSection}>
        
        <ColorPieChart cardList={collection}/>
        <SimpleBarChart typeStats={typeStats}/>
        <div className={styles.textstats}>
            <h3>Estimated Value: £{totalValue}</h3>
            <h3>Unique Cards: {uniqueNum}</h3>
        </div>
        
        </div>
    )
}