import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ComposedChart } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'
import { fillColor, strokeColor } from './colorHelper';

export const PriceDiagram = ({data, trendState }) => {
    return (
        <div className='fundamental-by-sector-border-style'>
            <ComposedChart width={800} height={404} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="ultimateSmootherValue" strokeWidth={3} stroke={strokeColor(trendState)} fill={fillColor(trendState)} />
                <Line type="monotone" dataKey="priceValue" strokeWidth={1} dot={false} stroke={CONSTANTS.COLOR_GRAY} />
                <Line type="monotone" dataKey="consensusPriceValue" strokeWidth={3} dot={false} stroke={CONSTANTS.COLOR_MIDNIGHTBLUE} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="nataliaBaffetovnaConsensusPriceValue" strokeWidth={3} dot={false} stroke={CONSTANTS.COLOR_DARKGREEN} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="financeMarkerConsensusPriceValue" strokeWidth={3} dot={false} stroke={CONSTANTS.COLOR_DARKSLATEGRAY} strokeDasharray="5 5" />
            </ComposedChart>
        </div>
    )
}
