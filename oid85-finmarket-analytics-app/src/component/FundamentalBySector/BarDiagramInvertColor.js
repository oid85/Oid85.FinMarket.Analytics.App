import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, BarChart, Bar, Cell } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const BarDiagramInvertColor = ({ key, data }) => {
    return (
        <div className='fundamental-by-sector-border-style'>
            <BarChart key = {key} width={185} height={70} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis width={25} type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Bar 
                    type="monotone" 
                    dataKey="value"
                    strokeWidth={2}                     
                >
                {
                    data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`} 
                            fill={entry["value"] < 0 ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_RED} 
                            stroke={entry["value"] < 0 ? CONSTANTS.COLOR_DARKGREEN : CONSTANTS.COLOR_DARKRED} 
                            />
                        ))
                }
                </Bar>                     
            </BarChart>
        </div>
    )
}
