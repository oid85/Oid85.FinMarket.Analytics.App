import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'
import { fetchCurrentFundamentalParameter, showEditFundamentalParameterModal } from '../../redux/actions/fundamentalParameterActions'

const colorForecast = (forecast) => {
    if (!forecast) { return CONSTANTS.COLOR_WHITE }
    if (forecast.upsidePrc > 10) { return CONSTANTS.COLOR_GREEN }
    if (forecast.upsidePrc > 0) { return CONSTANTS.COLOR_YELLOW }
    if (forecast.upsidePrc <= 0) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

export const Forecast = () => {

    const dispatch = useDispatch()
    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='horizontal-container'>
            <div 
                className='fundamental-by-sector-forecast fundamental-by-company-border-style' 
                style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.consensusForecast)}}>
            <div>Прогноз</div>
                {
                    !fundamentalByCompanyData.result.consensusForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.consensusForecast.upsidePrc} %`}</div>
                }   
            </div>
            <div 
                className='fundamental-by-sector-forecast fundamental-by-company-border-style' 
                style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.nataliaBaffetovnaForecast)}}
                onDoubleClick={() => {
                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'NataliaBaffetovnaForecast', period: new Date().getFullYear() + '', value: fundamentalByCompanyData.result.nataliaBaffetovnaForecast ? fundamentalByCompanyData.result.nataliaBaffetovnaForecast.consensusPrice : 0 }))
                    dispatch(showEditFundamentalParameterModal())
                }}>
                <div>Прогноз NataliBaff</div>
                {
                    !fundamentalByCompanyData.result.nataliaBaffetovnaForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.nataliaBaffetovnaForecast.upsidePrc} %`}</div>
                }                                
            </div>   
            <div 
                className='fundamental-by-sector-forecast fundamental-by-company-border-style' 
                style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.financeMarkerForecast)}}
                onDoubleClick={() => {
                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'FinanceMarkerForecast', period: new Date().getFullYear() + '', value: fundamentalByCompanyData.result.financeMarkerForecast ? fundamentalByCompanyData.result.financeMarkerForecast.consensusPrice : 0 }))
                    dispatch(showEditFundamentalParameterModal())
                }}>
                <div>Прогноз FinanceMarker</div>
                {
                    !fundamentalByCompanyData.result.financeMarkerForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.financeMarkerForecast.upsidePrc} %`}</div>
                }                                
            </div>  
            <div 
                className='fundamental-by-sector-forecast fundamental-by-company-border-style' 
                style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.vladProDengiForecast)}}
                onDoubleClick={() => {
                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'VladProDengiForecast', period: new Date().getFullYear() + '', value: fundamentalByCompanyData.result.vladProDengiForecast ? fundamentalByCompanyData.result.vladProDengiForecast.consensusPrice : 0 }))
                    dispatch(showEditFundamentalParameterModal())
                }}>
                <div>Прогноз VladProDengi</div>
                {
                    !fundamentalByCompanyData.result.vladProDengiForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.vladProDengiForecast.upsidePrc} %`}</div>
                }                                
            </div> 
            <div 
                className='fundamental-by-sector-forecast fundamental-by-company-border-style' 
                style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.predictNetProfitForecast)}}>
                <div>Прогноз PredictNetProfit</div>
                {
                    !fundamentalByCompanyData.result.predictNetProfitForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.predictNetProfitForecast.upsidePrc} %`}</div>
                }                                
            </div>                                              
        </div>
    )
}
