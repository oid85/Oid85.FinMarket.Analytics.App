import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, BarChart, Bar } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const BarDiagram = ({ data }) => {
    return (
        <div className='fundamental-by-company-border-style'>
            <BarChart width={800} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <XAxis dataKey="x" />
                <Tooltip />
                <Bar 
                    type="monotone" 
                    dataKey="y" 
                    strokeWidth={2} 
                    label={{ fill: 'white', position: 'insideTop' }}
                    stroke={CONSTANTS.COLOR_MIDNIGHTBLUE} 
                    fill={CONSTANTS.COLOR_STATEBLUE} />
            </BarChart>
        </div>
    )
}
