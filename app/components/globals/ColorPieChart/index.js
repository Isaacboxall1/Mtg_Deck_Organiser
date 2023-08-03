import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import colors from "@/utility/colors";
import { useState, useEffect } from "react";
import { colorSplit } from "@/utility/functions/formatToStats";
export default function ColorPieChart({ cardList }) {
  
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    let colorInfo = colorSplit(cardList);

    setColorArray(colorInfo);
  }, [cardList]);

  const {white , blue , black , red , green , colorless} = colors;

  const colorHexArray = [
    white,
    blue,
    black,
    red,
    green,
    colorless,
  ];

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 3px 3px 8px #c3c3c3, inset -3px -3px 8px #ffffff",
        borderRadius: "50%",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={colorArray}
            cx={95}
            cy={95}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            
          >
            {colorArray.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colorHexArray[index % colorHexArray.length]}
                onClick={console.log(entry.data)}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
