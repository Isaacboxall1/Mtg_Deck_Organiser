import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";
import { colorSplit } from "@/utility/functions/formatToStats";
export default function ColorPieChart({ cardList }) {
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    let colorInfo = colorSplit(cardList);

    setColorArray(colorInfo);
  }, [cardList]);

  const COLORS = [
    "rgb(248, 231, 185)",
    "rgb(14, 104, 171)",
    "rgb(20, 20, 20)",
    "rgb(221, 32, 42)",
    "rgb(0, 115, 62)",
    "rgb(200,200,200)",
  ];

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
                fill={COLORS[index % COLORS.length]}
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
