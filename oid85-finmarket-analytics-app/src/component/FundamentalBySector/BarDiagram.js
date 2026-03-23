import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, BarChart, Bar } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const BarDiagram = ({ key, data }) => {
    return (
        <div className='fundamental-by-sector-border-style'>
            <BarChart key = {key} width={250} height={70} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Bar type="monotone" dataKey="value" strokeWidth={2} stroke={CONSTANTS.COLOR_GREEN} fill={CONSTANTS.COLOR_LIGHTGREEN} />
            </BarChart>
        </div>
    )
}
