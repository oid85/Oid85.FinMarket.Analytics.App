import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.css'
import {CONSTANTS} from '../../constants'
import { fetchCurrentInstrument, sagaInstrumentPortfolio } from '../../redux/actions/instrumentActions'
import { sagaTrendDynamic } from '../../redux/actions/trendDynamicActions'

const GetColorTrend = (trend, delta, inPortfolio) => {
    if (!trend) { return CONSTANTS.COLOR_WHITE }
    if (trend == 1) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED
}

const GetColorDelta = (delta) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return CONSTANTS.COLOR_DARKGREEN }
    if (delta < 0) { return CONSTANTS.COLOR_DARKRED }
    return CONSTANTS.COLOR_WHITE
}

const GetValueDelta = (delta) => {
    if (!delta) { return "" }
    if (delta > 3) return `(!!!) ${delta} %`
    if (delta > 2) return `(!!) ${delta} %`
    if (delta > 1) return `(!) ${delta} %`
    if (delta < -3) return `(!!!) ${delta} %`
    if (delta < -2) return `(!!) ${delta} %`
    if (delta < -1) return `(!) ${delta} %`

    return `${delta} %`
}

const GetColorDividendYield = (dividendYield, inPortfolio) => {
    if (!dividendYield) { return CONSTANTS.COLOR_WHITE }
    if (dividendYield > 10) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }

    return CONSTANTS.COLOR_WHITE
}

const GetDividendYieldValue = (dividendYield) => {
    if (!dividendYield) { return '' }
    return `ДД ${dividendYield} %`
}

export const TrendDynamicData = ({data}) => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='vertical-container trend-dynamic-border-style'>
                            <div className='instrument-ticker-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.ticker}</b></div> : <div>{dataItem.ticker}</div>}</div>
                            <div className='instrument-name-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.name}</b></div> : <div>{dataItem.name}</div>}</div>                            
                        </div>
                        <div className='vertical-container'>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='trend-cell trend-dynamic-border-style' style={{backgroundColor: GetColorTrend(item.trend, item.delta, dataItem.inPortfolio)}}>
                                        {dataItem.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}
                                    </div>
                                ))
                            }     
                            </div>
                            <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (
                                    <div className='delta-cell trend-dynamic-border-style' style={{color: GetColorDelta(item.delta) }}>
                                        {dataItem.inPortfolio ? <div><b>{GetValueDelta(item.delta)}</b></div> : <div>{GetValueDelta(item.delta)}</div>}
                                    </div>
                                ))
                            }     
                            </div>      
                        </div> 
                        <div className='trend-dynamic-separator-cell'></div>
                        <div className='trend-dynamic-border-style' style={{backgroundColor: GetColorDividendYield(dataItem.dividendYield)}}>
                            <div className='trend-dynamic-dividend-yield-cell'>{dataItem.inPortfolio ? <div><b>{GetDividendYieldValue(dataItem.dividendYield)}</b></div> : <div>{GetDividendYieldValue(dataItem.dividendYield)}</div>}</div> 
                        </div>                          
                        <div className='trend-dynamic-border-style'>
                            <div className='instrument-button-container'>
                                <button className='btn btn-outline-dark instrument-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentInstrument({ticker: dataItem.ticker}))
                                        dispatch(sagaInstrumentPortfolio())
                                        dispatch(sagaTrendDynamic())
                                    }}><div className='instrument-button-text'>{dataItem.inPortfolio ? <div><b>Портфель</b></div> : <div><del>Портфель</del></div>}</div></button>
                            </div> 
                        </div>                                                                                  
                    </div>
                ))
            }           
            </div>
        </React.Fragment>                
    )
}