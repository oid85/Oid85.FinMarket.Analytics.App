import React from 'react'
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

export const MomentumTickerStatistic = ({tickerStatisticItem}) => {
    return (
        <React.Fragment>          
            <div className='horizontal-container'>                
                <div className='border-style'><Ticker value={tickerStatisticItem.ticker} width={30} height={30} /></div>
                <div className='momentum-ticker-statistic border-style'>{`Сигналов ${tickerStatisticItem.countBuy} шт.`}</div>
                <div className='momentum-ticker-statistic border-style'>{`Выбито СЛ ${tickerStatisticItem.countTriggerStop} шт.`}</div>
                <div className='momentum-ticker-statistic border-style'>{`Выбито СЛ ${tickerStatisticItem.countTriggerStopPercent} %`}</div>
            </div>
        </React.Fragment>
    )
}