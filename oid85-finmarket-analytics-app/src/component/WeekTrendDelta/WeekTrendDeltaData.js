import React from 'react'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorDelta = (delta) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return CONSTANTS.COLOR_GREEN }
    if (delta < 0) { return CONSTANTS.COLOR_RED }
    return CONSTANTS.COLOR_WHITE
}

const GetTextValue = (item) => {
    if (!item) { return "" }
    return item.price + " (" + item.delta + " %)"
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
                                    <div className='week-trend-delta-delta-cell border-style' style={{backgroundColor: GetColorDelta(item.delta)}}>
                                        {GetTextValue(item)}
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