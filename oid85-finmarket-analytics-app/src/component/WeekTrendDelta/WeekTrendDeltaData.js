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
                            <div className='week-trend-delta-instrument-ticker-cell'>{item.ticker}</div>
                            <div className='week-trend-delta-instrument-name-cell'>{item.name}</div>
                        </div>
                        <div className='horizontal-container'>
                            {
                                item.items.map((item) => (                                                
                                    <div className='week-trend-delta-value-cell border-style' style={{backgroundColor: GetColorDelta(item.delta)}}>
                                        <div className='week-trend-delta-price-cell'>{item.price}</div>
                                        <div className='week-trend-delta-delta-cell'>{`${item.delta} %`}</div>
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