import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    fetchCurrentFundamentalParameter,
    sagaFundamentalByCompany,
    showEditFundamentalParameterModal
} from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { PriceDiagram } from './PriceDiagram'
import { BarDiagram } from './BarDiagram'
import { BarDiagramInvertColor } from './BarDiagramInvertColor'
import { fetchCurrentInstrument, sagaInstrumentList } from '../../redux/actions/instrumentActions'
import { EditFundamentalParameterModal } from './EditFundamentalParameterModal'

export const FundamentalByCompany = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)
    const instrumentListData = useSelector(state => state.instrument.instrumentListData)

    useEffect(() => {
        dispatch(sagaFundamentalByCompany())
        dispatch(sagaInstrumentList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalByCompanyData.result || !instrumentListData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container fundamental-by-company-container'>
                <div>
                {
                    instrumentListData.result.instruments.filter(item => item.type == 'Share').map((instrument, index) => (
                        <div className='company-button-container'>
                            <button className='btn btn-outline-dark company-button'
                                onClick={() => {
                                    dispatch(fetchCurrentInstrument({ticker: instrument.ticker}))
                                    dispatch(sagaFundamentalByCompany())
                                }}><div className='company-button-text'>{instrument.inPortfolio ? <div><b>{instrument.ticker}</b></div> : <div>{instrument.ticker}</div>}</div></button>
                        </div>))                    
                }                
                </div>
                <div>
                    <div>
                        <div className='fundamental-by-company-ticker'>{fundamentalByCompanyData.result.inPortfolio ? <div><b>{`${fundamentalByCompanyData.result.ticker} (в портфеле)`}</b></div> : <div>{fundamentalByCompanyData.result.ticker}</div>}</div>
                        <div className='fundamental-by-company-name'>{fundamentalByCompanyData.result.name}</div>
                        <div className='fundamental-by-company-sector'>{fundamentalByCompanyData.result.sector}</div>
                    </div>
                    <div 
                        onDoubleClick={() => {
                            dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'DividendPolyticInfo', period: '', extData: fundamentalByCompanyData.result.dividendPolyticInfo }))
                            dispatch(showEditFundamentalParameterModal())
                        }}>
                        <h6>Дивидендная политика</h6>
                        <div className='fundamental-by-company-text'>{fundamentalByCompanyData.result.dividendPolyticInfo}</div>
                    </div>
                    <div 
                        onDoubleClick={() => {
                            dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'Concept', period: '', extData: fundamentalByCompanyData.result.concept }))
                            dispatch(showEditFundamentalParameterModal())
                        }}>
                        <h6>Мысли по компании</h6>
                        <div className='fundamental-by-company-text'>{fundamentalByCompanyData.result.concept}</div>
                    </div>       
                    <div 
                        onDoubleClick={() => {
                            dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'GrowthDriverInfo', period: '', extData: fundamentalByCompanyData.result.growthDriverInfo }))
                            dispatch(showEditFundamentalParameterModal())
                        }}>
                        <h6>Драйверы роста</h6>
                        <div className='fundamental-by-company-text'>{fundamentalByCompanyData.result.growthDriverInfo}</div>
                    </div>
                    <div 
                        onDoubleClick={() => {
                            dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalByCompanyData.result.ticker, type: 'RiskInfo', period: '', extData: fundamentalByCompanyData.result.riskInfo }))
                            dispatch(showEditFundamentalParameterModal())
                        }}>
                        <h6>Риски</h6>
                        <div className='fundamental-by-company-text'>{fundamentalByCompanyData.result.riskInfo}</div>
                    </div> 
                    <div>
                        <div>
                            <h6>Графики цены (динамика за 5 лет)</h6>
                            <PriceDiagram data={fundamentalByCompanyData.result.priceDiagramData} />
                        </div>
                        <div>
                            <div className='horizontal-container'>                                
                                <div 
                                    title='Рейтинг по фундаментальным данным'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.score.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>Фунд. рейт.</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.score.value}
                                    </div>
                                </div>     
                                <div 
                                    title='Капитализация'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.marketCap.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>Market Cap</div>
                                    <div className='fundamental-by-sector-fundamental-market-cap-description'>
                                        {fundamentalByCompanyData.result.fundamentalScore.marketCap.description}
                                    </div>
                                </div>                                                   
                            </div>
                            <div className='horizontal-container'>
                                <div 
                                    title='P/E'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.pe.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>P/E</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.pe.value}
                                    </div>
                                </div>     
                                <div 
                                    title='P/BV'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.pbv.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>P/BV</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.pbv.value}
                                    </div>
                                </div>     
                                {
                                    fundamentalByCompanyData.result.sector != 'Банки'
                                    ?
                                    <div 
                                        title='EV/EBITDA'
                                        className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.evEbitda.colorFill}}>
                                        <div className='fundamental-by-sector-fundamental-score-title'>EV/EBITDA</div>
                                        <div className='fundamental-by-sector-fundamental-score-value'>
                                            {fundamentalByCompanyData.result.fundamentalScore.evEbitda.value}
                                        </div>
                                    </div>
                                    : <div></div>
                                }                                                             
                            </div>
                            <div className='horizontal-container'>
                                <div 
                                    title='Чистая прибыль'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netProfit.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>Чист. приб.</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.netProfit.value}
                                    </div>
                                </div>    
                                <div 
                                    title='FCF'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.fcf.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>FCF</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.fcf.value}
                                    </div>
                                </div>   
                                <div 
                                    title='EPS'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.eps.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>EPS</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.eps.value}
                                    </div>
                                </div>                                                                                   
                            </div>
                            <div className='horizontal-container'>
                                <div 
                                    title='Debt Ratio'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.debtRatio.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>Debt Ratio</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.debtRatio.value}
                                    </div>
                                </div>       
                                <div 
                                    title='Debt Equity'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.debtEquity.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>Debt Equity</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.debtEquity.value}
                                    </div>
                                </div>                                                           
                                {
                                    fundamentalByCompanyData.result.sector != 'Банки'
                                    ?
                                    <div 
                                        title='NetDebt/EBITDA'
                                        className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.colorFill}}>
                                        <div className='fundamental-by-sector-fundamental-score-title'>ND/EBITDA</div>
                                        <div className='fundamental-by-sector-fundamental-score-value'>
                                            {fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value}
                                        </div>
                                    </div>
                                    : <div></div>
                                }    
                            </div>  
                            <div className='horizontal-container'>
                                <div 
                                    title='ROA'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.roa.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>ROA, %</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.roa.value}
                                    </div>
                                </div>     
                                <div 
                                    title='ROE'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.roe.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>ROE, %</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.roe.value}
                                    </div>
                                </div>   
                                {
                                    fundamentalByCompanyData.result.sector != 'Банки'
                                    ?
                                    <div 
                                        title='EBITDA Margin'
                                        className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                        style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.ebitdaRevenue.colorFill}}>
                                        <div className='fundamental-by-sector-fundamental-score-title'>EBITDA Margin</div>
                                        <div className='fundamental-by-sector-fundamental-score-value'>
                                            {fundamentalByCompanyData.result.fundamentalScore.ebitdaRevenue.value}
                                        </div>
                                    </div>
                                    : <div></div>
                                }                                                                
                            </div> 
                            <div className='horizontal-container'>
                                <div 
                                    title='Дивидендная доходность'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.dividendYield.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'>ДД, %</div>
                                    <div className='fundamental-by-sector-fundamental-score-value'>
                                        {fundamentalByCompanyData.result.fundamentalScore.dividendYield.value}
                                    </div>
                                </div>    
                                <div 
                                    title='Стабильность дивидендов'
                                    className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style'
                                    style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.colorFill}}>
                                    <div className='fundamental-by-sector-fundamental-score-title'></div>
                                    <div className='fundamental-by-sector-fundamental-dividend-aristocrat-description'>
                                        {fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.description}
                                    </div>
                                </div>                                
                            </div>                                                                                   
                        </div>
                    </div>
                    <div>
                        <br/>
                        <div>📌 <u>Прибыль</u></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.netProfit.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.fcf.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.eps.text}</div>
                        <br/>
                        <div>📌 <u>Стоимость</u></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.pe.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.pbv.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.evEbitda.text}</div>
                        <br/>
                        <div>📌 <u>Долговая нагрузка</u></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.debtRatio.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.debtEquity.text}</div>
                        <br/>
                        <div>📌 <u>Рентабельность</u></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.roa.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.roe.text}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.ebitdaRevenue.text}</div>
                        <br/>
                        <div>📌 <u>Дивиденды</u></div>      
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.dividendYield.text}</div> 
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.text}</div> 
                        <br/>
                        <div>📌 <u>Динамика по цене</u></div>  
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{`Краткосрочно ${fundamentalByCompanyData.result.trendState}`}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{`Падение от годового максимума ${fundamentalByCompanyData.result.fallingFromMax} %`}</div>                        
                        <br/>                       
                        <div>📌 <u>Фундаментальный рейтинг</u></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;{fundamentalByCompanyData.result.fundamentalScore.score.text}</div>
                        <br/>
                    </div>
                    <h6>Динамика показателей компании</h6>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Чистая прибыль, млрд. руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netProfitDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>FCF, млрд. руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.fcfDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>EPS, руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.epsDiagramData} />
                        </div>                                        
                    </div>
                    <div className='horizontal-container'>
                    <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Дивиденды, руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.dividendDiagramData} />
                        </div>                           
                    </div>                    
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>P/E</div>
                            <BarDiagram data={fundamentalByCompanyData.result.peDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>P/BV</div>
                            <BarDiagram data={fundamentalByCompanyData.result.pbvDiagramData} />
                        </div>
                        {
                            !fundamentalByCompanyData.result.fundamentalScore.evEbitda.value
                            ? <div></div>
                            :
                            <div className='fundamental-by-company-bar-diagram'>
                                <div className='fundamental-by-company-bar-diagram-title'>EV/EBITDA</div>
                                <BarDiagram data={fundamentalByCompanyData.result.evEbitdaDiagramData} />
                            </div>                     
                        }
                        {
                            !fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value
                            ? <div></div>
                            :
                            <div className='fundamental-by-company-bar-diagram'>
                                <div className='fundamental-by-company-bar-diagram-title'>NetDebt/EBITDA</div>
                                <BarDiagramInvertColor data={fundamentalByCompanyData.result.netDebtEbitdaDiagramData} />
                            </div>                  
                        }
                    </div>                    
                    <h6>Сравнение с другими компаниями в секторе</h6>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>P/E</div>
                            <BarDiagram data={fundamentalByCompanyData.result.peSectorDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>P/BV</div>
                            <BarDiagram data={fundamentalByCompanyData.result.pbvSectorDiagramData} />
                        </div>
                        {
                            !fundamentalByCompanyData.result.fundamentalScore.evEbitda.value
                            ? <div></div>
                            :
                            <div className='fundamental-by-company-bar-diagram'>
                                <div className='fundamental-by-company-bar-diagram-title'>EV/EBITDA</div>
                                <BarDiagram data={fundamentalByCompanyData.result.evEbitdaSectorDiagramData} />
                            </div>
                        }
                        {
                            !fundamentalByCompanyData.result.fundamentalScore.netDebtEbitda.value
                            ? <div></div>
                            :
                            <div className='fundamental-by-company-bar-diagram'>
                                <div className='fundamental-by-company-bar-diagram-title'>NetDebt/EBITDA</div>
                                <BarDiagramInvertColor data={fundamentalByCompanyData.result.netDebtEbitdaSectorDiagramData} />
                            </div>
                        }                        
                    </div>
                </div>
            </div>
        }
        <EditFundamentalParameterModal />
        </React.Fragment>                
    )
}