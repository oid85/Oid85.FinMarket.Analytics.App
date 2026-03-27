import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './styles.css'
import {CONSTANTS} from '../../constants'

export const strokeColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_STATEBLUE }
    if (value == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_GREEN }
    if (value == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_RED }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_DARKSLATEGRAY }

    return CONSTANTS.COLOR_STATEBLUE
}

export const fillColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_STATEBLUE }
    if (value == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_LIGHTGREEN }
    if (value == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_LIGHTRED }
    if (value == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_LIGHTYELLOW }

    return CONSTANTS.COLOR_STATEBLUE
}

export const ClosePriceDiagramComponent = ({ key, ticker, name, inPortfolio, data, trendState, width, height }) => {
    return (
        <div className='close-price-diagram-border-style'>
            <div>{inPortfolio ? <div><b>{ticker}</b></div> : <div>{ticker}</div>}</div>
            <div>{inPortfolio ? <div><b>{name}</b></div> : <div>{name}</div>}</div>
            <AreaChart key = {key} width={width} height={height} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={3} stroke={strokeColor(trendState)} fill={fillColor(trendState)} />
            </AreaChart>
        </div>
    )
}
