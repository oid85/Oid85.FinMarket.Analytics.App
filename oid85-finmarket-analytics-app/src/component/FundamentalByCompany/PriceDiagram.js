import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ComposedChart } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const PriceDiagram = ({data}) => {
    return (
        <div>
            <ComposedChart className='fundamental-by-company-border-style' width={500} height={300} data={data}>                
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />                                
                <Area type="monotone" dataKey="priceValue" strokeWidth={1} stroke={CONSTANTS.COLOR_STATEBLUE} fill={CONSTANTS.COLOR_LIGHTSKYBLUE} />
                <Line type="monotone" dataKey="ultimateSmootherValue" strokeWidth={2} dot={false} stroke={CONSTANTS.COLOR_DARKSLATEGRAY} />
            </ComposedChart>
        </div>
    )
}
