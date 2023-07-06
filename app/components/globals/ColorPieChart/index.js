
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { colorSplit} from '@/utility/functions/formatToStats';
export default function ColorPieChart({cardList}) {

  const [colorArray, setColorArray] = useState([])

  useEffect(() => {
    console.log(cardList)
    let colorInfo = colorSplit(cardList)
    console.log(colorInfo)
    setColorArray(colorInfo)
  }, [cardList])


    const COLORS = ['rgb(248, 231, 185)', 'rgb(14, 104, 171)', 'rgb(20, 20, 20)', 'rgb(221, 32, 42)', 'rgb(0, 115, 62)', 'rgb(200,200,200)',];
  
    
const data = [
    { name: 'White', value: 30 },
    { name: 'Black', value: 41 },
    { name: 'Blue', value: 12 },
    { name: 'Green', value: 30 },
    { name: 'red', value: 30 },
    
  ];

    return ( 
    <div style={{width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ResponsiveContainer width='100%' height="100%">
     <PieChart width={300} height={500}>
     <Pie
       data={colorArray}
       cx={143}
       cy={150}
       innerRadius={60}
       outerRadius={80}
       fill="#8884d8"
       paddingAngle={5}
       dataKey="value"
     >
       {colorArray.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} onClick={console.log(entry.data)}/>
       ))}
     </Pie>
   </PieChart>
     </ResponsiveContainer>
     </div>)
}