import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const LineDiagram = ({ key, ticker, name, inPortfolio, data }) => {
    return (
        <div className='fundamental-by-sector-border-style'>
            <div className='fundamental-by-sector-line-diagram-title'>{inPortfolio ? <div><b>{ticker}</b></div> : <div>{ticker}</div>}</div>
            <div className='fundamental-by-sector-line-diagram-name'>{inPortfolio ? <div><b>{name}</b></div> : <div>{name}</div>}</div>
            <AreaChart key = {key} width={250} height={120} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={2} stroke={CONSTANTS.COLOR_STATEBLUE} fill={CONSTANTS.COLOR_LIGHTSKYBLUE} />
            </AreaChart>
        </div>
    )
}
