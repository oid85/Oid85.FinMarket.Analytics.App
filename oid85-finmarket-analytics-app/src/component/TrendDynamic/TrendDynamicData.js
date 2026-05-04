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

const GetValueDelta = (delta) => {
    if (!delta) { return "" }
    return `${delta} %`
}

const GetColorDividendYield = (dividendYield) => {
    if (!dividendYield) { return CONSTANTS.COLOR_WHITE }
    if (dividendYield > 10) { return CONSTANTS.COLOR_GREEN }
    if (dividendYield > 0) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

const GetDividendYieldValue = (dividendYield) => {
    if (!dividendYield) { return '' }
    return `ДД ${dividendYield} %`
}

const GetColorForecast = (forecast) => {
    if (!forecast) { return CONSTANTS.COLOR_WHITE }
    if (forecast.upsidePrc > 10) { return CONSTANTS.COLOR_GREEN }
    if (forecast.upsidePrc > 0) { return CONSTANTS.COLOR_YELLOW }
    if (forecast.upsidePrc <= 0) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

const GetForecastValue = (forecast, suffix) => {
    if (!forecast) { return '' }
    return `Пр. ${suffix} ${forecast.upsidePrc} %`
}

const GetColorScoreValue = (scoreValue) => {
    if (!scoreValue) { return CONSTANTS.COLOR_WHITE }
    if (scoreValue >= 0.5) { return CONSTANTS.COLOR_GREEN }
    return CONSTANTS.COLOR_WHITE
}

const GetColorScoreIndicator = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value) { return CONSTANTS.COLOR_GREEN }
    return CONSTANTS.COLOR_WHITE
}

const GetColorFillData = (value) => {
    if (!value) { return CONSTANTS.COLOR_YELLOW }
    if (value) { return CONSTANTS.COLOR_GREEN }
    return CONSTANTS.COLOR_WHITE
}

export const TrendDynamicData = ({data}) => {

    const dispatch = useDispatch()

    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div title={dataItem.concept} className='vertical-container trend-dynamic-border-style'>
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
                        <div className='trend-dynamic-separator-cell'></div>
                        <div title='Консенсус прогноз Tinkoff' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.forecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.forecast, 'T.')}</b></div> : <div>{GetForecastValue(dataItem.forecast, 'T.')}</div>}</div> 
                        </div>     
                        <div title='Прогноз NataliaBaffetovna' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.nataliaBaffetovnaForecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.nataliaBaffetovnaForecast, 'NB')}</b></div> : <div>{GetForecastValue(dataItem.nataliaBaffetovnaForecast, 'NB')}</div>}</div> 
                        </div>
                        <div title='Прогноз FinanceMarker' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.financeMarkerForecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.financeMarkerForecast, 'FM')}</b></div> : <div>{GetForecastValue(dataItem.financeMarkerForecast, 'FM')}</div>}</div> 
                        </div>       
                        <div title='Прогноз VladProDengi' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.vladProDengiForecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.vladProDengiForecast, 'VPD')}</b></div> : <div>{GetForecastValue(dataItem.vladProDengiForecast, 'VPD')}</div>}</div> 
                        </div>  
                        <div title='Прогноз PredictNetProfit' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.predictNetProfitForecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.predictNetProfitForecast, 'PNP')}</b></div> : <div>{GetForecastValue(dataItem.predictNetProfitForecast, 'PNP')}</div>}</div> 
                        </div>  
                        <div title='Прогноз Mozgovik' className='trend-dynamic-border-style' style={{backgroundColor: GetColorForecast(dataItem.mozgovikForecast)}}>
                            <div className='trend-dynamic-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.mozgovikForecast, 'M')}</b></div> : <div>{GetForecastValue(dataItem.mozgovikForecast, 'M')}</div>}</div> 
                        </div>                                                 
                        <div className='trend-dynamic-separator-cell'></div>                                                                                     
                        <div title='Дивидендная доходность' className='trend-dynamic-border-style' style={{backgroundColor: GetColorDividendYield(dataItem.dividendYield)}}>
                            <div className='trend-dynamic-dividend-yield-cell'>{dataItem.inPortfolio ? <div><b>{GetDividendYieldValue(dataItem.dividendYield)}</b></div> : <div>{GetDividendYieldValue(dataItem.dividendYield)}</div>}</div> 
                        </div>
                        <div title={dataItem.score.score.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.score.colorFill}}>
                            <div className='trend-dynamic-score-value-cell'>{dataItem.inPortfolio ? <div><b>{`Фунд. рейт. ${dataItem.score.score.value}`}</b></div> : <div>{`Фунд. рейт. ${dataItem.score.score.value}`}</div>}</div> 
                        </div>
                        <div title={dataItem.score.pe.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.pe.colorFill}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>PE</b></div> : <div>PE</div>}</div> 
                        </div>
                        <div title={dataItem.score.pbv.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.pbv.colorFill}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>BV</b></div> : <div>BV</div>}</div> 
                        </div>                         
                        <div title={dataItem.score.evEbitda.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.evEbitda.colorFill}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>EV</b></div> : <div>EV</div>}</div> 
                        </div>  
                        <div title={dataItem.score.netDebtEbitda.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.netDebtEbitda.colorFill}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>Чист. долг</b></div> : <div>Чист. долг</div>}</div> 
                        </div>                                                        
                        <div title={dataItem.score.dividendAristocrat.description} className='trend-dynamic-border-style' style={{backgroundColor: dataItem.score.dividendAristocrat.colorFill}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>Див. арист.</b></div> : <div>Див. арист.</div>}</div> 
                        </div>                                                                                
                        <div title={dataItem.inPortfolio ? 'Заполнены данные по фундаменталу' : 'Не заполнены данные по фундаменталу'} className='trend-dynamic-border-style' style={{backgroundColor: GetColorFillData(dataItem.fillData)}}>
                            {
                                dataItem.inPortfolio
                                ? <div className='trend-dynamic-score-indicator-cell'>{dataItem.fillData ? <div><b>Запол. фунд.</b></div> : <div><del><b>Запол. фунд.</b></del></div>}</div>
                                : <div className='trend-dynamic-score-indicator-cell'>{dataItem.fillData ? <div>Запол. фунд.</div> : <div><del>Запол. фунд.</del></div>}</div>
                            }
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