import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalRatingList
} from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'

const GetScoreColor = (score) => {
    if (!score) { return CONSTANTS.COLOR_WHITE }
    if (score >= 5) { return CONSTANTS.COLOR_GREEN }
    if (score >= 3) { return CONSTANTS.COLOR_YELLOW }
    if (score >= 0) { return CONSTANTS.COLOR_RED }

    return CONSTANTS.COLOR_WHITE
}

const GetDividendYieldColor = (dividendYield) => {
    if (!dividendYield) { return CONSTANTS.COLOR_WHITE }
    if (dividendYield > 10) { return CONSTANTS.COLOR_GREEN }
    if (dividendYield > 0) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

const GetDividendYieldValue = (dividendYield) => {
    if (!dividendYield) { return '' }
    return `${dividendYield} %`
}

const GetForecastColor = (forecast) => {
    if (!forecast) { return CONSTANTS.COLOR_WHITE }
    if (forecast.upsidePrc > 10) { return CONSTANTS.COLOR_GREEN }
    if (forecast.upsidePrc > 0) { return CONSTANTS.COLOR_YELLOW }
    if (forecast.upsidePrc <= 0) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

const GetForecastValue = (forecast, suffix) => {
    if (!forecast) { return '' }
    return `${suffix} ${forecast.upsidePrc} %`
}

export const FundamentalRatingList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalRatingListData = useSelector(state => state.fundamentalParameter.fundamentalRatingListData)

    useEffect(() => {
        dispatch(sagaFundamentalRatingList())
    }, [])

console.log(fundamentalRatingListData.result)

    return (
        <React.Fragment>
        {
            !fundamentalRatingListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-rating-container'>                                
                <div className='horizontal-container'>
                <div className='fundamental-rating-number-header-cell fundamental-rating-border-style'>№</div>
                <div className='fundamental-rating-ticker-header-cell fundamental-rating-border-style'>Тикер</div>
                <div className='fundamental-rating-name-header-cell fundamental-rating-border-style'>Наименование</div>
                <div className='fundamental-rating-sector-header-cell fundamental-rating-border-style'>Сектор</div>
                <div className='fundamental-rating-score-header-cell fundamental-rating-border-style'>Рейт.</div>
                <div className='fundamental-rating-pe-header-cell fundamental-rating-border-style'>P / E</div>
                <div className='fundamental-rating-pbv-header-cell fundamental-rating-border-style'>P / BV</div>
                <div className='fundamental-rating-ev-ebitda-header-cell fundamental-rating-border-style'>EV / EBITDA</div>
                <div className='fundamental-rating-netdebt-ebitda-header-cell fundamental-rating-border-style'>ND / EBITDA</div>
                <div className='fundamental-rating-dividend-yield-header-cell fundamental-rating-border-style'>ДД, %</div>
                <div className='fundamental-rating-dividend-aristocrat-header-cell fundamental-rating-border-style'>ДА</div>
                <div className='fundamental-rating-netprofit-header-cell fundamental-rating-border-style'>NP</div>
                <div className='fundamental-rating-fcf-header-cell fundamental-rating-border-style'>FCF</div>
                <div className='fundamental-rating-eps-header-cell fundamental-rating-border-style'>EPS</div>   
                <div className='fundamental-rating-separator-cell'></div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. T., %</div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. NB., %</div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. FM., %</div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. VPD., %</div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. PNP., %</div>
                <div className='fundamental-rating-forecast-header-cell fundamental-rating-border-style'>Пр. M., %</div>
                </div>
                {
                    fundamentalRatingListData.result.items.map((fundamentalRatingItem) =>(
                        <div className='horizontal-container'>
                            <div className='fundamental-rating-number-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.number}</b></div> : <div>{fundamentalRatingItem.number}</div>}</div>
                            <div className='fundamental-rating-ticker-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.ticker}</b></div> : <div>{fundamentalRatingItem.ticker}</div>}</div>
                            <div className='fundamental-rating-name-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.name}</b></div> : <div>{fundamentalRatingItem.name}</div>}</div>
                            <div className='fundamental-rating-sector-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.sector}</b></div> : <div>{fundamentalRatingItem.sector}</div>}</div>
                            <div 
                                title='Рейтинг по фундаментальным данным'
                                className='fundamental-rating-score-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetScoreColor(fundamentalRatingItem.score.score.value)}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.score.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.score.value}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pe.description}
                                className='fundamental-rating-pe-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pe.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pe.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pe.value}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pbv.description}
                                className='fundamental-rating-pbv-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pbv.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pbv.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pbv.value}</div>}
                            </div>                                
                            <div 
                                title={fundamentalRatingItem.score.evEbitda.description}
                                className='fundamental-rating-ev-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.evEbitda.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.evEbitda.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.evEbitda.value}</div>}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.netDebtEbitda.description}
                                className='fundamental-rating-netdebt-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netDebtEbitda.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.netDebtEbitda.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.netDebtEbitda.value}</div>}
                            </div>
                            <div                             
                                className='fundamental-rating-dividend-yield-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetDividendYieldColor(fundamentalRatingItem.metric.dividendYield)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetDividendYieldValue(fundamentalRatingItem.metric.dividendYield)}</b></div> 
                                    : <div>{GetDividendYieldValue(fundamentalRatingItem.metric.dividendYield)}</div>}
                            </div>   
                            <div 
                                title={fundamentalRatingItem.score.dividendAristocrat.description}
                                className='fundamental-rating-dividend-aristocrat-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.dividendAristocrat.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>DA</b></div> 
                                    : <div>DA</div>}
                            </div>                                                     
                            <div 
                                title={fundamentalRatingItem.score.netProfit.description}
                                className='fundamental-rating-netprofit-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netProfit.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>NP</b></div> 
                                    : <div>NP</div>}
                            </div>                               
                            <div 
                                title={fundamentalRatingItem.score.fcf.description}
                                className='fundamental-rating-fcf-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.fcf.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>FCF</b></div> 
                                    : <div>FCF</div>}
                            </div>    
                            <div 
                                title={fundamentalRatingItem.score.eps.description}
                                className='fundamental-rating-eps-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.eps.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>EPS</b></div> 
                                    : <div>EPS</div>}
                            </div>
                            <div className='fundamental-rating-separator-cell'></div>                                                                                          
                            <div    
                                title='Консенсус прогноз Tinkoff'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.forecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.forecast, 'T')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.forecast, 'T')}</div>}
                            </div>   
                            <div    
                                title='Прогноз NataliaBaffetovna'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.nataliaBaffetovnaForecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.nataliaBaffetovnaForecast, 'NB')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.nataliaBaffetovnaForecast, 'NB')}</div>}
                            </div>   
                            <div    
                                title='Прогноз FinanceMarker'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.financeMarkerForecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.financeMarkerForecast, 'FM')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.financeMarkerForecast, 'FM')}</div>}
                            </div>
                            <div    
                                title='Прогноз VladProDengi'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.vladProDengiForecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.vladProDengiForecast, 'VPD')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.vladProDengiForecast, 'VPD')}</div>}
                            </div>  
                            <div    
                                title='Прогноз PredictNetProfit'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.predictNetProfitForecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.predictNetProfitForecast, 'PND')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.predictNetProfitForecast, 'PND')}</div>}
                            </div>                            
                            <div    
                                title='Прогноз Mozgovik'                         
                                className='fundamental-rating-forecast-cell fundamental-rating-border-style'
                                style={{backgroundColor: GetForecastColor(fundamentalRatingItem.mozgovikForecast)}}                                 
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetForecastValue(fundamentalRatingItem.mozgovikForecast, 'M')}</b></div> 
                                    : <div>{GetForecastValue(fundamentalRatingItem.mozgovikForecast, 'M')}</div>}
                            </div>                                                                                                                                                      
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}