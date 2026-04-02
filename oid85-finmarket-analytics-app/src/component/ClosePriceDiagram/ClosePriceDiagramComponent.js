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

export const ClosePriceDiagramComponent = ({ key, ticker, name, inPortfolio, data, trendState, width, height, recommendation, dividendYield }) => {
    return (
        <div className='close-price-diagram-border-style'>
                <div className='close-price-diagram-ticker'>{inPortfolio ? <div><b>{ticker}</b></div> : <div>{ticker}</div>}</div>
                <div className='close-price-diagram-name'>{inPortfolio ? <div><b>{name}</b></div> : <div>{name}</div>}</div>
                <div className='close-price-diagram-recommendation'>{!recommendation? <div></div> : <div>{inPortfolio ? <div><b>{`Рекомендация: ${recommendation}`}</b></div> : <div>{`Рекомендация: ${recommendation}`}</div>}</div>} </div>          
                <div className='close-price-diagram-dividend-yield'>{!dividendYield? <div></div> : <div>{inPortfolio ? <div><b>{`ДД ${dividendYield} %`}</b></div> : <div>{`ДД ${dividendYield} %`}</div>}</div>} </div>          
            <ComposedChart key = {key} width={width} height={height} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area type="monotone" dataKey="value" strokeWidth={3} stroke={strokeColor(trendState)} fill={fillColor(trendState)} />
                <Line type="monotone" dataKey="consensusPrice" strokeWidth={2} dot={false} stroke={CONSTANTS.COLOR_DARKSLATEGRAY} />
                <Line type="monotone" dataKey="maxTarget" strokeWidth={1} dot={false} stroke={CONSTANTS.COLOR_GRAY} />
                <Line type="monotone" dataKey="minTarget" strokeWidth={1} dot={false} stroke={CONSTANTS.COLOR_GRAY} />
            </ComposedChart>
        </div>
    )
}
