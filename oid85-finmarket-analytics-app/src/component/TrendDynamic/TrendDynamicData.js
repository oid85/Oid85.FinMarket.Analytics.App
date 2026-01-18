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
    if (delta > 0) { return CONSTANTS.COLOR_DARKGREEN }
    if (delta < 0) { return CONSTANTS.COLOR_DARKRED }
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
                            <div className='horizontal-container'>
                                <div className='vertical-container ticker-cell border-style' key = {index}>
                                    <div>{item.ticker}</div>
                                </div>                                
                                <div className='vertical-container'>
                                    <div className='horizontal-container'>
                                    {
                                        item.items.map((item, index) => (                                                
                                            <div className='trend-cell border-style' style={{backgroundColor: GetColorTrend(item.trend)}}>
                                                {item.price}
                                            </div>
                                        ))
                                    }     
                                    </div>
                                    <div className='horizontal-container'>
                                    {
                                        item.items.map((item, index) => (
                                            <div className='delta-cell border-style' style={{color: GetColorDelta(item.delta) }}>
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