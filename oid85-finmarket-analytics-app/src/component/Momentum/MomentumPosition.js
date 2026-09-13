import React from 'react'
import { CONSTANTS } from '../../constants'
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

const GetColor = (position) => {
    if (!position) { return CONSTANTS.COLOR_WHITE }    
    if (position.profitPercent == 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    if (position.profitPercent < 0) { return CONSTANTS.COLOR_LIGHTRED }
    return CONSTANTS.COLOR_LIGHTGREEN
}

export const MomentumPosition = ({position}) => {
    return (
        <React.Fragment>          
            <div className='momentum-current-position border-style' style={{backgroundColor: GetColor(position)}}>
                <div className='momentum-container horizontal-container'>
                    <div className='border-style'><Ticker value={position.ticker} width={50} height={50} /></div>
                    <div className='momentum-ticker'>{`${position.number}. ${position.ticker}`}</div>
                </div>
                {
                    position.ticker != 'MON'
                    ? <div className='momentum-container'>{`${formatNumber(position.size)} шт.`}</div>
                    : <div></div>
                }                                   
                <div className='momentum-container'>{`${formatNumber(position.cost)} руб.`}</div>
                {
                    position.stopPrice
                    ? <div className='momentum-container'>{`SL ${formatNumber(position.stopPrice)} руб.`}</div>
                    : <div></div>
                }
                {
                    position.currentStopSizePercent
                    ? <div className='momentum-container'>{`SL ${formatNumber(position.currentStopSizePercent)} %`}</div>
                    : <div></div>
                }
                {
                    position.profitPercent
                    ? <div className='momentum-container'>{`PR ${formatNumber(position.profitPercent)} %`}</div>
                    : <div></div>
                }                
            </div>
        </React.Fragment>
    )
}