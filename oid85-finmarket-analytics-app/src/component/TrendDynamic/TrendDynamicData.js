import React from 'react'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorTrend = (trend) => {
    if (!trend) { return CONSTANTS.COLOR_WHITE }
    if (trend == 1) { return CONSTANTS.COLOR_GREEN }
    return CONSTANTS.COLOR_RED
}

const GetColorDelta = (delta) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return CONSTANTS.COLOR_GREEN }
    if (delta < 0) { return CONSTANTS.COLOR_RED }
    return CONSTANTS.COLOR_WHITE
}

const GetValueDelta = (delta) => {
    if (!delta) { return "" }
    return delta + " %"
}

export const TrendDynamicData = ({data}) => {

    return (
        <React.Fragment>          
            <div className='vertical-container'>
                <div>
                    {
                        data.map((item, index) => (
                            <div className='horizontal-container border'>
                                <div className='ticker-cell border' key = {index}>{item.ticker}</div>
                                    <div className='vertical-container border'>
                                        <div className='horizontal-container'>
                                        {
                                            item.items.map((item, index) => (                                                
                                                <div className='trend-cell border' style={{backgroundColor: GetColorTrend(item.trend)}}>
                                                </div>
                                            ))
                                        }     
                                        </div>
                                        <div className='horizontal-container'>
                                        {
                                            item.items.map((item, index) => (
                                                <div className='delta-cell border' style={{color: GetColorDelta(item.delta) }}>
                                                    {GetValueDelta(item.delta)}
                                                </div>
                                            ))
                                        }     
                                        </div>      
                                    </div>                                    
                                </div>
                        ))
                    }
                </div>           
            </div>
        </React.Fragment>                
    )
}