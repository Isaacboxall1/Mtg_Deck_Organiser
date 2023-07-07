import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    value: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    value: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    value: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    value: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    value: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    value: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    value: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function SimpleBarChart({typeStats}) {

    console.log(typeStats)

    return (
        <div style={{width: '400px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={400}
          layout="vertical" 
          height={200}
          data={typeStats}
          margin={{
            top: 5,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
        <XAxis type="number" dataKey="value"/>
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
 
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
}