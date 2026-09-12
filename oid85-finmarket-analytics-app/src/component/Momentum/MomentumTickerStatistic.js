import React from 'react'
import { CONSTANTS } from '../../constants';
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

const GetColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 60) { return CONSTANTS.COLOR_LIGHTRED }
    if (value > 50) { return CONSTANTS.COLOR_LIGHTYELLOW }
    return CONSTANTS.COLOR_LIGHTGREEN
}

export const MomentumTickerStatistic = ({tickerStatisticItem}) => {
    return (
        <React.Fragment>          
            <div className='horizontal-container'>                
                <div className='momentum-ticker-statistic-number border-style'>{tickerStatisticItem.number}</div>
                <div className='border-style'><Ticker value={tickerStatisticItem.ticker} width={30} height={30} /></div>                
                <div className='momentum-ticker-statistic-ticker border-style' style={{backgroundColor: GetColor(tickerStatisticItem.countTriggerStopPercent)}}>{`${tickerStatisticItem.ticker}`}</div>
                <div className='momentum-ticker-statistic-value border-style' style={{backgroundColor: GetColor(tickerStatisticItem.countTriggerStopPercent)}}>{`${tickerStatisticItem.countBuy} шт.`}</div>
                <div className='momentum-ticker-statistic-value border-style' style={{backgroundColor: GetColor(tickerStatisticItem.countTriggerStopPercent)}}>{`${tickerStatisticItem.countTriggerStop} шт.`}</div>
                <div className='momentum-ticker-statistic-value border-style' style={{backgroundColor: GetColor(tickerStatisticItem.countTriggerStopPercent)}}>{`${tickerStatisticItem.countTriggerStopPercent} %`}</div>
            </div>
        </React.Fragment>
    )
}