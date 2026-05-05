import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorTrendState = (trendState) => {
    if (!trendState) { return CONSTANTS.COLOR_WHITE }

    if (trendState == 'ТРЕНД ВВЕРХ') { return CONSTANTS.COLOR_GREEN }
    if (trendState == 'ТРЕНД ВНИЗ') { return CONSTANTS.COLOR_LIGHTRED }
    if (trendState == 'НЕТ ТРЕНДА') { return CONSTANTS.COLOR_YELLOW }

    return CONSTANTS.COLOR_WHITE
}

export const FundamentalMetric = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div>
        {
            !fundamentalByCompanyData.result.companyFundamentalMetric || !fundamentalByCompanyData.result.fundamentalScore
            ? <div></div>
            :
            <div>
                <div className='horizontal-container'>
                    <div
                        title={fundamentalByCompanyData.result.fundamentalScore.pe.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.pe.colorFill}}>
                        <div>P/E</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.pe.value}</div>            
                    </div>
                    <div 
                        title={fundamentalByCompanyData.result.fundamentalScore.pbv.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.pbv.colorFill}}>
                        <div>P/BV</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.pbv.value}</div>            
                    </div>
                    <div 
                        title={fundamentalByCompanyData.result.fundamentalScore.evEbitda.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.evEbitda.colorFill}}>
                        <div>EV/EBITDA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.evEbitda.value}</div>            
                    </div>
                    <div 
                        title={fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.colorFill}}>
                        <div>ND/EBITDA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value}</div>            
                    </div>                    
                </div>
                <div className='horizontal-container'>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: colorTrendState(fundamentalByCompanyData.result.trendState)}}>
                        <div>{fundamentalByCompanyData.result.trendState}</div>
                    </div>                    
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netProfit.colorFill}}>
                        <div>Рост чистой прибыли</div>
                    </div>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.fcf.colorFill}}>
                        <div>Рост FCF</div>
                    </div>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.eps.colorFill}}>
                        <div>Рост EPS</div>
                    </div>                                                          
                </div>                
            </div>            
        }
        </div>
    )
}
