import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorForecast = (forecast) => {
    if (!forecast) { return CONSTANTS.COLOR_WHITE }
    if (forecast.upsidePrc > 10) { return CONSTANTS.COLOR_GREEN }
    if (forecast.upsidePrc > 0) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

export const Forecast = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='horizontal-container'>
            <div className='fundamental-by-sector-forecast fundamental-by-company-border-style' style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.consensusForecast)}}>
            <div>Прогноз 1</div>
                {
                    !fundamentalByCompanyData.result.consensusForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.consensusForecast.upsidePrc} %`}</div>
                }   
            </div>
            <div className='fundamental-by-sector-forecast fundamental-by-company-border-style' style={{backgroundColor: colorForecast(fundamentalByCompanyData.result.nataliaBaffetovnaForecast)}}>
                <div>Прогноз 2</div>
                {
                    !fundamentalByCompanyData.result.nataliaBaffetovnaForecast ? <div></div> : <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.nataliaBaffetovnaForecast.upsidePrc} %`}</div>
                }                                
            </div>                
        </div>
    )
}
