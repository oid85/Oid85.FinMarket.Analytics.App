import React from 'react'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorDelta = (delta, inPortfolio) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    if (delta > -2 && delta <= 0) { return inPortfolio ? CONSTANTS.COLOR_YELLOW : CONSTANTS.COLOR_LIGHTYELLOW }
    if (delta <= -2) { return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

export const WeekTrendDeltaData = ({data}) => {

    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='vertical-container border-style'>
                            <div className='week-trend-delta-instrument-ticker-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.ticker}</b></div> : <div>{dataItem.ticker}</div>}</div>
                            <div className='week-trend-delta-instrument-name-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.name}</b></div> : <div>{dataItem.name}</div>}</div>
                        </div>
                        <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='week-trend-delta-value-cell border-style' style={{backgroundColor: GetColorDelta(item.delta, dataItem.inPortfolio)}}>
                                        <div className='week-trend-delta-price-cell'>{dataItem.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}</div>
                                        <div className='week-trend-delta-delta-cell'>{dataItem.inPortfolio ? <div><b>{`${item.delta} %`}</b></div> : <div>{`${item.delta} %`}</div>}</div>
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