import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, BarChart, Bar, Cell } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const BarDiagramInvertColor = ({ data }) => {
    return (
        <div className='fundamental-by-company-border-style'>
            <BarChart width={300} height={150} data={data}>
                <YAxis width={30} type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Bar 
                    type="monotone" 
                    dataKey="y"
                    strokeWidth={2}                     
                >
                {
                    data.map((entry, index) => (
                        <Cell 
                            key={`cell-${index}`} 
                            fill={entry["y"] < 0 ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_RED} 
                            stroke={entry["y"] < 0 ? CONSTANTS.COLOR_DARKGREEN : CONSTANTS.COLOR_DARKRED} 
                            />
                        ))
                }
                </Bar>                  
            </BarChart>
        </div>
    )
}
