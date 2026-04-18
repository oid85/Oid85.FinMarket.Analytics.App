import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorPe = (metric) => {
    if (!metric) { return CONSTANTS.COLOR_WHITE }
    if (!metric.pe) { return CONSTANTS.COLOR_WHITE }

    if (metric.pe <= 3) { return CONSTANTS.COLOR_GREEN }
    if (metric.pe <= 5) { return CONSTANTS.COLOR_YELLOW }
    if (metric.pe > 5) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

const colorPbv = (metric) => {
    if (!metric) { return CONSTANTS.COLOR_WHITE }
    if (!metric.pbv) { return CONSTANTS.COLOR_WHITE }

    if (metric.pbv <= 1) { return CONSTANTS.COLOR_GREEN }
    if (metric.pbv <= 1.5) { return CONSTANTS.COLOR_YELLOW }
    if (metric.pbv > 1.5) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

const colorRoa = (metric) => {
    if (!metric) { return CONSTANTS.COLOR_WHITE }
    if (!metric.roa) { return CONSTANTS.COLOR_WHITE }

    if (metric.roa > 10) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

const colorEvEbitda = (metric) => {
    if (!metric) { return CONSTANTS.COLOR_WHITE }
    if (!metric.evEbitda) { return CONSTANTS.COLOR_WHITE }

    if (metric.evEbitda < 0) { return CONSTANTS.COLOR_RED }
    if (metric.evEbitda > 0 && metric.evEbitda <= 3.5) { return CONSTANTS.COLOR_GREEN }
    if (metric.evEbitda > 3.5 && metric.evEbitda <= 5) { return CONSTANTS.COLOR_YELLOW }
    if (metric.evEbitda > 5) { return CONSTANTS.COLOR_LIGHTRED }

    return CONSTANTS.COLOR_WHITE
}

const colorNetDebtEbitda = (metric) => {
    if (!metric) { return CONSTANTS.COLOR_WHITE }
    if (!metric.netDebtEbitda) { return CONSTANTS.COLOR_WHITE }

    if (metric.netDebtEbitda >= 3.0) { return CONSTANTS.COLOR_LIGHTRED }
    if (metric.netDebtEbitda < 3.0 && metric.netDebtEbitda >= 1.5) { return CONSTANTS.COLOR_YELLOW }
    if (metric.netDebtEbitda < 1.5) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

const colorGrowthNetProfit = (score) => {
    if (!score) { return CONSTANTS.COLOR_WHITE }
    if (!score.netProfitOk) { return CONSTANTS.COLOR_WHITE }

    if (score.netProfitOk) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

const colorLowNetDebt = (score) => {
    if (!score) { return CONSTANTS.COLOR_WHITE }
    if (!score.netDebtOk) { return CONSTANTS.COLOR_WHITE }

    if (score.netDebtOk) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

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
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorPe(fundamentalByCompanyData.result.companyFundamentalMetric)}}>
                        <div>P/E</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.companyFundamentalMetric.pe}</div>            
                    </div>
                    <div 
                        title='P/BV (Price-to-Book Value) - это финансовый мультипликатор, сравнивающий рыночную цену компании с ее балансовой стоимостью (чистыми активами). Показывает, сколько инвесторы готовы платить за 1 рубль собственных средств компании. P/BV = Капитализация / Собственный капитал. Низкое значение (<1) может указывать на недооценку, высокое (>1) - на переоценку или ожидания роста'
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: colorPbv(fundamentalByCompanyData.result.companyFundamentalMetric)}}>
                        <div>P/BV</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.companyFundamentalMetric.pbv}</div>             
                    </div>
                    <div 
                        title='ROA (Return on Assets) - рентабельность активов, демонстрирует эффективность использования ресурсов для генерации прибыли. ROA = Чистая прибыль / Средняя стоимость активов. Нормальным считается уровень 8–12%. Для розничной торговли высокий ROA считается нормой (5–15%), для банков он ниже (1–2%)' 
                        className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' 
                        style={{backgroundColor: colorRoa(fundamentalByCompanyData.result.companyFundamentalMetric)}}>
                        <div>ROA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.companyFundamentalMetric.roa} %`}</div>            
                    </div>
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorEvEbitda(fundamentalByCompanyData.result.companyFundamentalMetric)}}>
                        <div>EV/EBITDA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.companyFundamentalMetric.evEbitda}</div>                            
                    </div>
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorNetDebtEbitda(fundamentalByCompanyData.result.companyFundamentalMetric)}}>
                        <div>NetDebt/EBITDA</div>            
                        <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.companyFundamentalMetric.netDebtEbitda}</div>                              
                    </div>
                </div>
                <div className='horizontal-container'>
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorTrendState(fundamentalByCompanyData.result.trendState)}}>
                        <div>{fundamentalByCompanyData.result.trendState}</div>
                    </div>                    
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorGrowthNetProfit(fundamentalByCompanyData.result.fundamentalScore)}}>
                        <div>Рост чистой прибыли</div>
                    </div>
                    <div className='fundamental-by-sector-fundamental-metric-indicator fundamental-by-company-border-style' style={{backgroundColor: colorLowNetDebt(fundamentalByCompanyData.result.fundamentalScore)}}>
                        <div>Низкая долговая нагрузка</div>
                    </div>                    
                </div>                
            </div>            
        }
        </div>
    )
}
