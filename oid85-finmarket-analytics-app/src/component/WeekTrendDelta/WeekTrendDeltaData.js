import React from 'react'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorDelta = (delta) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return CONSTANTS.COLOR_GREEN }
    if (delta > -2 && delta <= 0) { return CONSTANTS.COLOR_YELLOW }
    if (delta <= -2) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

export const WeekTrendDeltaData = ({data}) => {

    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((item) => (
                    <div className='horizontal-container'>
                        <div className='vertical-container border-style'>
                            <div className='week-trend-delta-instrument-ticker-cell'>{item.inPortfolio ? <div><b>{item.ticker}</b></div> : <div>{item.ticker}</div>}</div>
                            <div className='week-trend-delta-instrument-name-cell'>{item.inPortfolio ? <div><b>{item.name}</b></div> : <div>{item.name}</div>}</div>
                        </div>
                        <div className='horizontal-container'>
                            {
                                item.items.map((item) => (                                                
                                    <div className='week-trend-delta-value-cell border-style' style={{backgroundColor: GetColorDelta(item.delta)}}>
                                        <div className='week-trend-delta-price-cell'>{item.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}</div>
                                        <div className='week-trend-delta-delta-cell'>{item.inPortfolio ? <div><b>{`${item.delta} %`}</b></div> : <div>{`${item.delta} %`}</div>}</div>
                                    </div>
                                ))
                            }     
                            </div>                                   
                    </div>
                ))
            }           
            </div>
        </React.Fragment>                
    )
}