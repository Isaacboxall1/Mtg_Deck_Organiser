import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// this component currently counts the number of unique cards of each type, not taking into account quantity


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