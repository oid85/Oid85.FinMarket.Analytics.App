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
                    <div className='fundamental-by-sector-number-header-cell fundamental-by-sector-border-style'>№</div>
                    <div className='fundamental-by-sector-border-style' style={{width: 62}}></div>
                    <div className='fundamental-by-sector-ticker-header-cell fundamental-by-sector-border-style'>Тикер</div>
                    <div className='fundamental-by-sector-name-header-cell fundamental-by-sector-border-style'>Наименование</div>
                    <div className='fundamental-by-sector-sector-header-cell fundamental-by-sector-border-style'>Сектор</div>
                    <div className='fundamental-by-sector-score-header-cell fundamental-by-sector-border-style'>Рейт.</div>
                    <div className='fundamental-by-sector-pe-header-cell fundamental-by-sector-border-style'>P / E</div>
                    <div className='fundamental-by-sector-pbv-header-cell fundamental-by-sector-border-style'>P / BV</div>
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-ev-ebitda-header-cell fundamental-by-sector-border-style'>EV / EBITDA</div>
                        : <div></div>
                    }                    
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-netdebt-ebitda-header-cell fundamental-by-sector-border-style'>ND / EBITDA</div>  
                        : <div></div>
                    }                                        
                    <div className='fundamental-by-sector-debt-ratio-header-cell fundamental-by-sector-border-style'>Debt Ratio</div>
                    <div className='fundamental-by-sector-debt-equity-header-cell fundamental-by-sector-border-style'>Debt Equity</div>
                    <div className='fundamental-by-sector-dividend-yield-header-cell fundamental-by-sector-border-style'>ДД, %</div>
                    <div className='fundamental-by-sector-dividend-aristocrat-header-cell fundamental-by-sector-border-style'>Стабильность дивидендов</div>
                    <div className='fundamental-by-sector-netprofit-header-cell fundamental-by-sector-border-style'>Чистая прибыль</div>
                    <div className='fundamental-by-sector-fcf-header-cell fundamental-by-sector-border-style'>FCF</div>
                    <div className='fundamental-by-sector-eps-header-cell fundamental-by-sector-border-style'>EPS</div>   
                    <div className='fundamental-by-sector-roa-header-cell fundamental-by-sector-border-style'>ROA, %</div>   
                    <div className='fundamental-by-sector-roe-header-cell fundamental-by-sector-border-style'>ROE, %</div>   
                    {
                        currentSector.name != 'Банки'
                        ?
                        <div className='fundamental-by-sector-ebitda-revenue-header-cell fundamental-by-sector-border-style'>EBITDA Margin, %</div>
                        : <div></div>
                    }                                        
                    <div className='fundamental-by-sector-falling-from-max-header-cell fundamental-by-sector-border-style'>Пад. от год. max, %</div>
                </div>                
                {
                    fundamentalBySectorData.result.fundamentalRatingItems.map((fundamentalRatingItem) =>(
                        <div className='horizontal-container'>
                            <div className='fundamental-by-sector-number-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.number}</b></div> : <div>{fundamentalRatingItem.number}</div>}</div>
                            <div className='fundamental-by-sector-border-style'><Ticker value={fundamentalRatingItem.ticker} width={60} height={60} /></div>
                            <div className='fundamental-by-sector-ticker-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.ticker}</b></div> : <div>{fundamentalRatingItem.ticker}</div>}</div>
                            <div className='fundamental-by-sector-name-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.name}</b></div> : <div>{fundamentalRatingItem.name}</div>}</div>
                            <div className='fundamental-by-sector-sector-cell fundamental-by-sector-border-style'>{fundamentalRatingItem.inPortfolio ? <div><b>{fundamentalRatingItem.sector}</b></div> : <div>{fundamentalRatingItem.sector}</div>}</div>
                            <div 
                                title='Рейтинг по фундаментальным данным'
                                className='fundamental-by-sector-score-cell fundamental-by-sector-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.score.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.score.value}</b></div> 
                                    : <div>{fundamentalRatingItem.score.score.value}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pe.text}
                                className='fundamental-by-sector-pe-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pe.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pe.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pe.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.pbv.text}
                                className='fundamental-by-sector-pbv-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.pbv.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.pbv.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.pbv.description}</div>}
                            </div> 
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.evEbitda.text}
                                    className='fundamental-by-sector-ev-ebitda-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.evEbitda.colorFill}}
                                    >{fundamentalRatingItem.inPortfolio 
                                        ? <div><b>{fundamentalRatingItem.score.evEbitda.description}</b></div> 
                                        : <div>{fundamentalRatingItem.score.evEbitda.description}</div>}
                                </div> 
                                : <div></div>
                            }                                                             
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.netDebtEbitda.text}
                                    className='fundamental-by-sector-netdebt-ebitda-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.netDebtEbitda.colorFill}}
                                    >{fundamentalRatingItem.inPortfolio 
                                        ? <div><b>{fundamentalRatingItem.score.netDebtEbitda.description}</b></div> 
                                        : <div>{fundamentalRatingItem.score.netDebtEbitda.description}</div>}
                                </div> 
                                : <div></div>
                            }
                            <div 
                                title={fundamentalRatingItem.score.debtRatio.text}
                                className='fundamental-by-sector-debt-ratio-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtRatio.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.debtRatio.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.debtRatio.description}</div>}
                            </div> 
                            <div 
                                title={fundamentalRatingItem.score.debtEquity.text}
                                className='fundamental-by-sector-debt-equity-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.debtEquity.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.debtEquity.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.debtEquity.description}</div>}
                            </div>                                                       
                            <div                
                                title={fundamentalRatingItem.score.dividendYield.text}             
                                className='fundamental-by-sector-dividend-yield-cell fundamental-by-sector-border-style'
                                style={{backgroundColor: fundamentalRatingItem.score.dividendYield.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.dividendYield.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.dividendYield.description}</div>}
                            </div>   
                            <div 
                                title={fundamentalRatingItem.score.dividendAristocrat.text}
                                className='fundamental-by-sector-dividend-aristocrat-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.dividendAristocrat.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.dividendAristocrat.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.dividendAristocrat.description}</div>}
                            </div>                                                     
                            <div 
                                title={fundamentalRatingItem.score.netProfit.text}
                                className='fundamental-by-sector-netprofit-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.netProfit.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.netProfit.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.netProfit.description}</div>}
                            </div>                               
                            <div 
                                title={fundamentalRatingItem.score.fcf.text}
                                className='fundamental-by-sector-fcf-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.fcf.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.fcf.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.fcf.description}</div>}
                            </div>    
                            <div 
                                title={fundamentalRatingItem.score.eps.text}
                                className='fundamental-by-sector-eps-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.eps.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.eps.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.eps.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roa.text}
                                className='fundamental-by-sector-roa-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roa.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.roa.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.roa.description}</div>}
                            </div>
                            <div 
                                title={fundamentalRatingItem.score.roe.text}
                                className='fundamental-by-sector-roe-cell fundamental-by-sector-border-style' 
                                style={{backgroundColor: fundamentalRatingItem.score.roe.colorFill}}
                                >{fundamentalRatingItem.inPortfolio 
                                    ? <div><b>{fundamentalRatingItem.score.roe.description}</b></div> 
                                    : <div>{fundamentalRatingItem.score.roe.description}</div>}
                            </div> 
                            {
                                currentSector.name != 'Банки'
                                ?
                                <div 
                                    title={fundamentalRatingItem.score.ebitdaRevenue.text}
                                    className='fundamental-by-sector-ebitda-revenue-cell fundamental-by-sector-border-style' 
                                    style={{backgroundColor: fundamentalRatingItem.score.ebitdaRevenue.colorFill}}
                                    >{fundamentalRatingItem.inPortfolio 
                                        ? <div><b>{fundamentalRatingItem.score.ebitdaRevenue.description}</b></div> 
                                        : <div>{fundamentalRatingItem.score.ebitdaRevenue.description}</div>}
                                </div> 
                                : <div></div>
                            }
                            <div 
                                title='Падение от годового максимума'
                                className='fundamental-by-sector-falling-from-max-cell fundamental-by-sector-border-style' 
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