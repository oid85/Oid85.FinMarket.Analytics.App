import React from 'react'
import { CONSTANTS } from '../../constants'
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const MomentumPosition = ({position}) => {
    return (
        <React.Fragment>          
            <div className='momentum-current-position border-style' style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}>
                <div className='momentum-container horizontal-container'>
                    <div className='border-style'><Ticker value={position.ticker} width={50} height={50} /></div>
                    <div className='momentum-ticker'>{`${position.number}. ${position.ticker}`}</div>
                </div>
                <div className='momentum-container'>{`${formatNumber(position.size)} шт.`}</div>
                <div className='momentum-container'>{`${formatNumber(position.cost)} руб.`}</div>
                {
                    position.stopPrice
                    ? <div className='momentum-container'>{`SL ${formatNumber(position.stopPrice)} руб.`}</div>
                    : <div></div>
                }                                
            </div>
        </React.Fragment>
    )
}