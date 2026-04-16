import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.css'
import {CONSTANTS} from '../../constants'
import { sagaWeekTrendDelta } from '../../redux/actions/weekTrendDeltaActions'
import { fetchCurrentInstrument, sagaInstrumentPortfolio } from '../../redux/actions/instrumentActions'

const GetColorDelta = (delta, inPortfolio) => {
    if (!delta) { return CONSTANTS.COLOR_WHITE }
    if (delta > 0) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    if (delta > -2 && delta <= 0) { return inPortfolio ? CONSTANTS.COLOR_YELLOW : CONSTANTS.COLOR_LIGHTYELLOW }
    if (delta <= -2) { return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED }
    return CONSTANTS.COLOR_WHITE
}

const GetColorTrendState = (trendState, inPortfolio) => {
    if (!trendState) { return CONSTANTS.COLOR_WHITE }
    if (trendState == 'ТРЕНД ВВЕРХ') { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    if (trendState == 'ТРЕНД ВНИЗ') { return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED }
    if (trendState == 'НЕТ ТРЕНДА') { return inPortfolio ? CONSTANTS.COLOR_YELLOW : CONSTANTS.COLOR_LIGHTYELLOW }
    return CONSTANTS.COLOR_WHITE
}

const GetColorFallingFromMax = (fallingFromMax, inPortfolio) => {
    if (!fallingFromMax) { return CONSTANTS.COLOR_WHITE }
    if (fallingFromMax < -10) { return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED }
    if (fallingFromMax < -5) { return inPortfolio ? CONSTANTS.COLOR_YELLOW : CONSTANTS.COLOR_LIGHTYELLOW }
    if (fallingFromMax < 0) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
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

const GetPriceValue = (price) => {
    if (!price) { return '' }
    return price
}

const GetDeltaValue = (delta) => {
    if (!delta) { return '' }
    return `${delta} %`
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

const GetColorForecast = (forecast) => {
    if (!forecast) { return CONSTANTS.COLOR_WHITE }
    if (forecast.upsidePrc > 10) { return CONSTANTS.COLOR_GREEN }
    if (forecast.upsidePrc > 0) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

const GetForecastValue = (forecast) => {
    if (!forecast) { return '' }
    return `Прогноз ${forecast.upsidePrc} %`
}

export const WeekTrendDeltaData = ({data}) => {

    const dispatch = useDispatch()
    
    return (
        <React.Fragment>          
            <div className='vertical-container'>
            {
                data.map((dataItem) => (
                    <div className='horizontal-container'>
                        <div className='vertical-container week-trend-border-style'>
                            <div className='week-trend-delta-instrument-ticker-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.ticker}</b></div> : <div>{dataItem.ticker}</div>}</div>
                            <div className='week-trend-delta-instrument-name-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.name}</b></div> : <div>{dataItem.name}</div>}</div>
                        </div>
                        <div className='horizontal-container'>
                            {
                                dataItem.items.map((item) => (                                                
                                    <div className='week-trend-delta-value-cell week-trend-border-style' style={{backgroundColor: GetColorDelta(item.delta, dataItem.inPortfolio)}}>
                                        <div className='week-trend-delta-price-cell'>{dataItem.inPortfolio ? <div><b>{GetPriceValue(item.price)}</b></div> : <div>{GetPriceValue(item.price)}</div>}</div>
                                        <div className='week-trend-delta-delta-cell'>{dataItem.inPortfolio ? <div><b>{GetDeltaValue(item.delta)}</b></div> : <div>{GetDeltaValue(item.delta)}</div>}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='week-trend-separator-cell'></div>
                        <div title='Направление тренда' className='week-trend-border-style' style={{backgroundColor: GetColorTrendState(dataItem.trendState, dataItem.inPortfolio)}}>
                            <div className='week-trend-delta-trend-state-cell'>{dataItem.inPortfolio ? <div><b>{dataItem.trendState}</b></div> : <div>{dataItem.trendState}</div>}</div>
                        </div> 
                        <div title='Падение от максимума' className='week-trend-border-style' style={{backgroundColor: GetColorFallingFromMax(dataItem.fallingFromMax, dataItem.inPortfolio)}}>
                            <div className='week-trend-delta-falling-from-max-cell'>{dataItem.inPortfolio ? <div><b>{`${dataItem.fallingFromMax} % от max`}</b></div> : <div>{`${dataItem.fallingFromMax} % от max`}</div>}</div>
                        </div> 
                        <div title='Прогноз' className='week-trend-border-style' style={{backgroundColor: GetColorForecast(dataItem.forecast)}}>
                            <div className='week-trend-delta-forecast-cell'>{dataItem.inPortfolio ? <div><b>{GetForecastValue(dataItem.forecast)}</b></div> : <div>{GetForecastValue(dataItem.forecast)}</div>}</div> 
                        </div>                          
                        <div title='Дивидендная доходность' className='week-trend-border-style' style={{backgroundColor: GetColorDividendYield(dataItem.dividendYield)}}>
                            <div className='week-trend-delta-dividend-yield-cell'>{dataItem.inPortfolio ? <div><b>{GetDividendYieldValue(dataItem.dividendYield)}</b></div> : <div>{GetDividendYieldValue(dataItem.dividendYield)}</div>}</div>
                        </div>    
                        <div title='Рейтинг по фундаменталу' className='week-trend-border-style' style={{backgroundColor: GetColorScoreValue(dataItem.score.scoreValue)}}>
                            <div className='week-trend-delta-score-value-cell'>{dataItem.inPortfolio ? <div><b>{`Фунд. рейт. ${dataItem.score.scoreValue}`}</b></div> : <div>{`Фунд. рейт. ${dataItem.score.scoreValue}`}</div>}</div> 
                        </div>
                        <div title='P/E <= 5' className='week-trend-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.peOk)}}>
                            <div className='week-trend-delta-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>PE</b></div> : <div>PE</div>}</div> 
                        </div>
                        <div title='EV/EBITDA <= 3.5' className='trend-dynamic-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.evOk)}}>
                            <div className='trend-dynamic-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>EV</b></div> : <div>EV</div>}</div> 
                        </div>                           
                        <div title='P/BV <= 1' className='week-trend-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.pbvOk)}}>
                            <div className='week-trend-delta-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>BV</b></div> : <div>BV</div>}</div> 
                        </div>          
                        <div title='Дивидендный аристократ' className='week-trend-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.isDividendAristocrat)}}>
                            <div className='week-trend-delta-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>Див. арист.</b></div> : <div>Див. арист.</div>}</div> 
                        </div>                               
                        <div title='Рост чистой прибыли' className='week-trend-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.netProfitOk)}}>
                            <div className='week-trend-delta-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>Чист. приб.</b></div> : <div>Чист. приб.</div>}</div> 
                        </div>       
                        <div title='Долговая нагрузка' className='week-trend-border-style' style={{backgroundColor: GetColorScoreIndicator(dataItem.score.netDebtOk)}}>
                            <div className='week-trend-delta-score-indicator-cell'>{dataItem.inPortfolio ? <div><b>Чист. долг</b></div> : <div>Чист. долг</div>}</div> 
                        </div>                                                
                        <div className='week-trend-border-style'>
                            <div className='instrument-button-container'>
                                <button className='btn btn-outline-dark instrument-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentInstrument({ticker: dataItem.ticker}))
                                        dispatch(sagaInstrumentPortfolio()) 
                                        dispatch(sagaWeekTrendDelta())
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