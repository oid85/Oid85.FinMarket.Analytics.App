import React from 'react'
import {useDispatch} from 'react-redux'
import {Ticker} from '../Ticker/Ticker'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorTrend = (trend, delta, inPortfolio) => {
    if (!trend) { return CONSTANTS.COLOR_WHITE }
    if (trend == 1) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED
}

const GetValueDelta = (delta) => {
    if (!delta) { return "" }
    return `${delta} %`
}

export const TrendDynamicData = ({data}) => {
    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='trend-dynamic-border-style'><Ticker value={dataItem.ticker} width={34} height={34} /></div>
                        <div title={`${dataItem.name}`} className='vertical-container trend-dynamic-border-style'>
                            <div className='instrument-ticker-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.ticker}</b></div> : <div>{dataItem.ticker}</div>}</div>                            
                            <div className='instrument-name-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.name}</b></div> : <div>{dataItem.name}</div>}</div>                            
                        </div>                  
                        <div className='vertical-container'>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='trend-dynamic-border-style' style={{backgroundColor: GetColorTrend(item.trend, item.delta, dataItem.inPortfolio)}}>
                                        <div className='trend-cell'>{dataItem.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}</div>
                                        <div className='delta-cell'>{dataItem.inPortfolio ? <div><b>{GetValueDelta(item.delta)}</b></div> : <div>{GetValueDelta(item.delta)}</div>}</div>
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