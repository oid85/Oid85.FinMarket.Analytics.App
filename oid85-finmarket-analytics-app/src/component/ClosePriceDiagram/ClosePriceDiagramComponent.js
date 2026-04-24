import React from 'react'
import { AreaChart, Area, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ComposedChart } from 'recharts';
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

export const ClosePriceDiagramComponent = ({ key, ticker, name, inPortfolio, data, trendState, width, height, dividendYield }) => {
    return (
        <div className='close-price-diagram-border-style'>
                <div className='close-price-diagram-ticker'>{inPortfolio ? <div><b>{ticker}</b></div> : <div>{ticker}</div>}</div>
                <div className='close-price-diagram-name'>{inPortfolio ? <div><b>{name}</b></div> : <div>{name}</div>}</div>
                <div className='close-price-diagram-dividend-yield'>{!dividendYield? <div></div> : <div>{inPortfolio ? <div><b>{`ДД ${dividendYield} %`}</b></div> : <div>{`ДД ${dividendYield} %`}</div>}</div>} </div>          
            <ComposedChart key = {key} width={width} height={height} data={data}>
                <YAxis type="number" domain={['auto', 'auto']} fontSize={10} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={3} stroke={strokeColor(trendState)} fill={fillColor(trendState)} />
            </ComposedChart>
        </div>
    )
}
