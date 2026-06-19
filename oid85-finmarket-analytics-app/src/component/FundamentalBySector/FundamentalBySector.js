import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalBySector, 
    fetchCurrentSector
} from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { LineDiagram } from './LineDiagram'
import { BarDiagram } from './BarDiagram'
import { BarDiagramInvertColor } from './BarDiagramInvertColor'
import { BubbleDiagram } from './BubbleDiagram'
import { sagaSectorList } from '../../redux/actions/instrumentActions'
import { Ticker } from '../Ticker/Ticker'
import { CONSTANTS } from '../../constants'

const GetFallingFromMaxColor = (fallingFromMax, inPortfolio) => {
    if (!fallingFromMax) { return CONSTANTS.COLOR_WHITE }
    if (fallingFromMax < -10) { return inPortfolio ? CONSTANTS.COLOR_RED : CONSTANTS.COLOR_LIGHTRED }
    if (fallingFromMax < -5) { return inPortfolio ? CONSTANTS.COLOR_YELLOW : CONSTANTS.COLOR_LIGHTYELLOW }
    if (fallingFromMax < 0) { return inPortfolio ? CONSTANTS.COLOR_GREEN : CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}

const GetFallingFromMaxValue = (fallingFromMaxValue) => {
    if (!fallingFromMaxValue) { return '' }
    return `${fallingFromMaxValue} %`
}

export const FundamentalBySector = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalBySectorData = useSelector(state => state.fundamentalParameter.fundamentalBySectorData)   
    const sectorListData = useSelector(state => state.instrument.sectorListData) 
    const currentSector = useSelector(state => state.fundamentalParameter.currentSector)    

    useEffect(() => {
        dispatch(sagaFundamentalBySector())
        dispatch(sagaSectorList())
    }, [])

console.log(fundamentalBySectorData.result)

    return (
        <React.Fragment>
        {
            !fundamentalBySectorData.result || !sectorListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-by-sector-container'>
                <div className='horizontal-container'>
                {
                    sectorListData.result.sectors.map((sector) => (
                        <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: sector}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>{sector}</div></button>
                    </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='fundamental-by-sector-sector-title'>{currentSector.name}</div>
                <div className='fundamental-by-sector-fundamental-score-title'>Фундаментальный рейтинг</div>
                <div className='horizontal-container'>
                    <div className='fundamental-rating-number-header-cell fundamental-rating-border-style'>№</div>
                    <div className='fundamental-rating-border-style' style={{width: 62}}></div>
                    <div className='fundamental-rating-ticker-header-cell fundamental-rating-border-style'>Тикер</div>
                    <div className='fundamental-rating-name-header-cell fundamental-rating-border-style'>Наименование</div>
                    <div className='fundamental-rating-sector-header-cell fundamental-rating-border-style'>Сектор</div>
                    <div className='fundamental-rating-score-header-cell fundamental-rating-border-style'>Рейт.</div>
                    <div className='fundamental-rating-pe-header-cell fundamental-rating-border-style'>P / E</div>
                    <div className='fundamental-rating-pbv-header-cell fundamental-rating-border-style'>P / BV</div>
                    <div className='fundamental-rating-ev-ebitda-header-cell fundamental-rating-border-style'>EV / EBITDA</div>
                    <div className='fundamental-rating-netdebt-ebitda-header-cell fundamental-rating-border-style'>ND / EBITDA</div>
                    <div className='fundamental-rating-debt-ratio-header-cell fundamental-rating-border-style'>Debt Ratio</div>
                    <div className='fundamental-rating-debt-equity-header-cell fundamental-rating-border-style'>Debt Equity</div>
                    <div className='fundamental-rating-dividend-yield-header-cell fundamental-rating-border-style'>ДД, %</div>
                    <div className='fundamental-rating-dividend-aristocrat-header-cell fundamental-rating-border-style'>Стабильность дивидендов</div>
                    <div className='fundamental-rating-netprofit-header-cell fundamental-rating-border-style'>Чистая прибыль</div>
                    <div className='fundamental-rating-fcf-header-cell fundamental-rating-border-style'>FCF</div>
                    <div className='fundamental-rating-eps-header-cell fundamental-rating-border-style'>EPS</div>   
                    <div className='fundamental-rating-roa-header-cell fundamental-rating-border-style'>ROA, %</div>   
                    <div className='fundamental-rating-roe-header-cell fundamental-rating-border-style'>ROE, %</div>   
                    <div className='fundamental-rating-ebitda-revenue-header-cell fundamental-rating-border-style'>EBITDA Margin, %</div>
                    <div className='fundamental-rating-falling-from-max-header-cell fundamental-rating-border-style'>Пад. от год. max, %</div>
                </div>                
                {
                    fundamentalBySectorData.result.fundamentalRatingItems.map((fundamentalRatingItem) =>(
                        <div className='horizontal-container'>
                            <div className='fundamental-rating-number-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.number}</b></div> : <div>{fundamentalRatingItem.number}</div>}</div>
                            <div className='fundamental-rating-border-style'><Ticker value={fundamentalRatingItem.ticker} width={60} height={60} /></div>
                            <div className='fundamental-rating-ticker-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.ticker}</b></div> : <div>{fundamentalRatingItem.ticker}</div>}</div>
                            <div className='fundamental-rating-name-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.name}</b></div> : <div>{fundamentalRatingItem.name}</div>}</div>
                            <div className='fundamental-rating-sector-cell fundamental-rating-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.sector}</b></div> : <div>{fundamentalRatingItem.sector}</div>}</div>
                            <div 
                                title='Рейтинг по фундаментальным данным'
                                className='fundamental-rating-score-cell fundamental-rating-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.score.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.score.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.score.value}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pe.text}
                                className='fundamental-rating-pe-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pe.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pe.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pe.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pbv.text}
                                className='fundamental-rating-pbv-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pbv.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pbv.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pbv.description}</div>}
                            </div>                                
                            <div 
                                title={fundamentalRatingItem.score.evEbitda.text}
                                className='fundamental-rating-ev-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.evEbitda.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.evEbitda.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.evEbitda.description}</div>}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.netDebtEbitda.text}
                                className='fundamental-rating-netdebt-ebitda-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netDebtEbitda.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.netDebtEbitda.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.netDebtEbitda.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.debtRatio.text}
                                className='fundamental-rating-debt-ratio-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtRatio.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.debtRatio.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.debtRatio.description}</div>}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.debtEquity.text}
                                className='fundamental-rating-debt-equity-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtEquity.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.debtEquity.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.debtEquity.description}</div>}
                            </div>                                                       
                            <div                
                                title={fundamentalRatingItem.score.dividendYield.text}             
                                className='fundamental-rating-dividend-yield-cell fundamental-rating-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.dividendYield.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.dividendYield.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.dividendYield.description}</div>}
                            </div>   
                            <div 
                                title={fundamentalRatingItem.score.dividendAristocrat.text}
                                className='fundamental-rating-dividend-aristocrat-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.dividendAristocrat.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.dividendAristocrat.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.dividendAristocrat.description}</div>}
                            </div>                                                     
                            <div 
                                title={fundamentalRatingItem.score.netProfit.text}
                                className='fundamental-rating-netprofit-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netProfit.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.netProfit.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.netProfit.description}</div>}
                            </div>                               
                            <div 
                                title={fundamentalRatingItem.score.fcf.text}
                                className='fundamental-rating-fcf-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.fcf.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.fcf.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.fcf.description}</div>}
                            </div>    
                            <div 
                                title={fundamentalRatingItem.score.eps.text}
                                className='fundamental-rating-eps-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.eps.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.eps.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.eps.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roa.text}
                                className='fundamental-rating-roa-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roa.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.roa.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.roa.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roe.text}
                                className='fundamental-rating-roe-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roe.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.roe.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.roe.description}</div>}
                            </div>                                                      
                            <div 
                                title={fundamentalRatingItem.score.ebitdaRevenue.text}
                                className='fundamental-rating-ebitda-revenue-cell fundamental-rating-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.ebitdaRevenue.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.ebitdaRevenue.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.ebitdaRevenue.description}</div>}
                            </div>
                            <div 
                                title='Падение от годового максимума'
                                className='fundamental-rating-falling-from-max-cell fundamental-rating-border-style' 
                                style={{backgroundColor: GetFallingFromMaxColor(fundamentalRatingItem.fallingFromMax)}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{GetFallingFromMaxValue(fundamentalRatingItem.fallingFromMax)}</b></div> 
                                    : <div>{GetFallingFromMaxValue(fundamentalRatingItem.fallingFromMax)}</div>}
                            </div>
                        </div>
                    ))
                }         
                <div className='fundamental-by-sector-diagram-title'>Графики цены (динамика за 5 лет)</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.priceDiagram.map((diagram, index) => (
                        <LineDiagram
                            key={index}
                            ticker={diagram.ticker}
                            name={diagram.name} 
                            inPortfolio={diagram.inPortfolio} 
                            data={diagram.data} />))
                }                    
                </div>           
                <div className='fundamental-by-sector-diagram-title'>Диаграммы фундаментальных параметров (динамика за пред. 5 лет + TTM)</div>
                <div className='fundamental-by-sector-diagram-title'>Чистая прибыль, млрд. руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.netProfitDiagram.map((diagram, index) => (
                        <BarDiagram key={index} data={diagram.data} />))
                }                        
                </div> 
                {
                    fundamentalBySectorData.result.sector != 'Банки'
                    ?
                    <div>
                        <div className='fundamental-by-sector-diagram-title'>Чистый долг, млрд. руб</div>
                        <div className='horizontal-container'>
                        {
                            fundamentalBySectorData.result.netDebtDiagram.map((diagram, index) => (
                                <BarDiagramInvertColor key={index} data={diagram.data} />))
                        }                        
                        </div>                        
                    </div>
                    : <div></div>
                }      
                <div className='fundamental-by-sector-diagram-title'>Дивиденды, руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.dividendDiagram.map((diagram, index) => (
                        <BarDiagram key={index} data={diagram.data} />))
                }
                </div>
                {
                    fundamentalBySectorData.result.sector != 'Банки'
                    ?
                    <div>
                        <div className='fundamental-by-sector-diagram-title'>EV/EBITDA, NetDebt/EBITDA, MarketCap</div>
                        <div className='horizontal-container'>
                            <BubbleDiagram data={fundamentalBySectorData.result.bubbleDiagram} />
                        </div>                           
                    </div>
                    : <div></div>
                }
            </div>
        }

        </React.Fragment>                
    )
}