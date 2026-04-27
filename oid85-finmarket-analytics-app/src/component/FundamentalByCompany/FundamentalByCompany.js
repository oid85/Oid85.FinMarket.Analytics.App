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
import { fetchCurrentInstrument, sagaInstrumentList } from '../../redux/actions/instrumentActions'
import { Forecast } from './Forecast'
import { Dividend } from './Dividend'
import { FundamentalScore } from './FundamentalScore'
import { FundamentalMetric } from './FundamentalMetric'
import { DividendAristocrat } from './DividendAristocrat'
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
                    instrumentListData.result.instruments.filter(item => item.type == 'Share').filter(item => item.isSelected).map((instrument, index) => (
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
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-price-diagram'>
                            <PriceDiagram data={fundamentalByCompanyData.result.priceDiagramData} trendState={fundamentalByCompanyData.result.trendState} />
                        </div>
                        <div>
                            <div className='horizontal-container'>
                                <Forecast />
                            </div>    
                            <div className='horizontal-container'>
                                <FundamentalScore />                                
                                <Dividend />
                                <DividendAristocrat />                                
                            </div>                              
                            <div className='horizontal-container'>
                                <FundamentalMetric />
                            </div>                                                 
                        </div>                   
                    </div>
                    <h6>Динамика показателей компании</h6>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Чистая прибыль, млрд. руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netProfitDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Дивиденды, руб.</div>
                            <BarDiagram data={fundamentalByCompanyData.result.dividendDiagramData} />
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
                            <div className='fundamental-by-company-bar-diagram-title'>P/E</div>
                            <BarDiagram data={fundamentalByCompanyData.result.peDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>P/BV</div>
                            <BarDiagram data={fundamentalByCompanyData.result.pbvDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>EV/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.evEbitdaDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>NetDebt/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netDebtEbitdaDiagramData} />
                        </div>                        
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
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>EV/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.evEbitdaSectorDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>NetDebt/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netDebtEbitdaSectorDiagramData} />
                        </div>
                    </div>
                </div>
            </div>
        }
        <EditFundamentalParameterModal />
        </React.Fragment>                
    )
}