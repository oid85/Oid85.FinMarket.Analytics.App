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
                    {
                        !fundamentalByCompanyData.result.fundamentalScore.evEbitda.value
                        ? <div></div>
                        :
                        <div 
                            title={fundamentalByCompanyData.result.fundamentalScore.evEbitda.description} 
                            className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                            style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.evEbitda.colorFill}}>
                            <div>EV/EBITDA</div>            
                            <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.evEbitda.value}</div>            
                        </div>                        
                    }
                    {
                        !fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value
                        ? <div></div>
                        :
                        <div 
                            title={fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.description} 
                            className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                            style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.colorFill}}>
                            <div>ND/EBITDA</div>            
                            <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value}</div>            
                        </div>                      
                    }
                    {
                        !fundamentalByCompanyData.result.fundamentalScore.debtRatio.value
                        ? <div></div>
                        :
                        <div 
                            title={fundamentalByCompanyData.result.fundamentalScore.debtRatio.description} 
                            className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                            style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.debtRatio.colorFill}}>
                            <div>Debt Ratio</div>            
                            <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.debtRatio.value}</div>            
                        </div>                      
                    }
                    {
                        !fundamentalByCompanyData.result.fundamentalScore.debtEquity.value
                        ? <div></div>
                        :
                        <div 
                            title={fundamentalByCompanyData.result.fundamentalScore.debtEquity.description} 
                            className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                            style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.debtEquity.colorFill}}>
                            <div>Debt Equity</div>            
                            <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.debtEquity.value}</div>            
                        </div>                      
                    }                                        
                </div>
                <div className='horizontal-container'>                   
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netProfit.colorFill}}>
                        <div>{fundamentalByCompanyData.result.fundamentalScore.netProfit.description}</div>
                    </div>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.fcf.colorFill}}>
                        <div>{fundamentalByCompanyData.result.fundamentalScore.fcf.description}</div>
                    </div>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.eps.colorFill}}>
                        <div>{fundamentalByCompanyData.result.fundamentalScore.eps.description}</div>
                    </div>                                                          
                </div>   
                <div className='horizontal-container'>                   
                    <div
                        title={fundamentalByCompanyData.result.fundamentalScore.roa.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.roa.colorFill}}>
                        <div>ROA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.fundamentalScore.roa.value} %`}</div>            
                    </div>
                    <div 
                        title={fundamentalByCompanyData.result.fundamentalScore.roe.description} 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.roe.colorFill}}>
                        <div>ROE</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.fundamentalScore.roe.value} %`}</div>            
                    </div>
                </div>                
                <div className='horizontal-container'>
                    <div 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: colorTrendState(fundamentalByCompanyData.result.trendState)}}>
                        <div>Краткосрочно</div>
                        <div>{fundamentalByCompanyData.result.trendState}</div>
                    </div>                                                                             
                </div>                               
            </div>            
        }
        </div>
    )
}
