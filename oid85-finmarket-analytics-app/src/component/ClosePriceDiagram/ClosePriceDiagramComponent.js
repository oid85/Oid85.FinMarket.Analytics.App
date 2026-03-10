import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'

export const ClosePriceDiagramComponent = ({ key, ticker, name, inPortfolio, data }) => {
    return (
        <div className='close-price-diagram-border-style'>
            <div>{inPortfolio ? <div><b>{ticker}</b></div> : <div>{ticker}</div>}</div>
            <div>{inPortfolio ? <div><b>{name}</b></div> : <div>{name}</div>}</div>
            <AreaChart key = {key} width={470} height={380} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={3} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    )
}
