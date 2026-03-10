import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const ClosePriceDiagramComponent = ({ key, ticker, name, data }) => {
    return (
        <div>
            <div>{ticker}</div>
            <div>{name}</div>
            <AreaChart key = {key} width={300} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    )
}
