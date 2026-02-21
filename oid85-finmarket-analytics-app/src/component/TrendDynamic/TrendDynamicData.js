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
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='vertical-container border-style'>
                            <div className='instrument-ticker-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.ticker}</b></div> : <div>{dataItem.ticker}</div>}</div>
                            <div className='instrument-name-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.name}</b></div> : <div>{dataItem.name}</div>}</div>                            
                        </div>
                        <div className='vertical-container'>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='trend-cell border-style' style={{backgroundColor: GetColorTrend(item.trend)}}>
                                        {dataItem.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}
                                    </div>
                                ))
                            }     
                            </div>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (
                                    <div className='delta-cell border-style' style={{color: GetColorDelta(item.delta) }}>
                                        {dataItem.inPortfolio ? <div><b>{GetValueDelta(item.delta)}</b></div> : <div>{GetValueDelta(item.delta)}</div>}
                                    </div>
                                ))
                            }     
                            </div>      
                        </div>                                    
                    </div>
                ))
            }           
            </div>
        </React.Fragment>                
    )
}