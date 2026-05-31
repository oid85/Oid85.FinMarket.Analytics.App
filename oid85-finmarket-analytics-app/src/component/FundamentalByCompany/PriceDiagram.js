import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ComposedChart } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const PriceDiagram = ({data}) => {
    return (
        <div>
            <ComposedChart width={800} height={404} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="ultimateSmootherValue" strokeWidth={3} stroke={CONSTANTS.COLOR_DARKSLATEGRAY} fill={CONSTANTS.COLOR_STATEBLUE} />
                <Line type="monotone" dataKey="priceValue" strokeWidth={1} dot={false} stroke={CONSTANTS.COLOR_DARKSLATEGRAY} />
            </ComposedChart>
        </div>
    )
}
