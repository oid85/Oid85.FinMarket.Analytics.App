import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalByCompany
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
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-price-diagram'>
                            <PriceDiagram data={fundamentalByCompanyData.result.priceDiagramData} trendState={fundamentalByCompanyData.result.trendState} />
                        </div>
                        <div>
                            <div className='horizontal-container'>
                                <Forecast />
                                <Dividend />
                                <DividendAristocrat />
                                <FundamentalScore />
                            </div>     
                            <div className='horizontal-container'>
                                <FundamentalMetric />
                            </div>                                                 
                        </div>                   
                    </div>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика чистой прибыли</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netProfitDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика дивидендов</div>
                            <BarDiagram data={fundamentalByCompanyData.result.dividendDiagramData} />
                        </div>
                    </div>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика P/E</div>
                            <BarDiagram data={fundamentalByCompanyData.result.peDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика P/BV</div>
                            <BarDiagram data={fundamentalByCompanyData.result.pbvDiagramData} />
                        </div>
                    </div>
                    <div className='horizontal-container'>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика EV/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.evEbitdaDiagramData} />
                        </div>
                        <div className='fundamental-by-company-bar-diagram'>
                            <div className='fundamental-by-company-bar-diagram-title'>Динамика NetDebt/EBITDA</div>
                            <BarDiagram data={fundamentalByCompanyData.result.netDebtEbitdaDiagramData} />
                        </div>
                    </div>
                </div>
            </div>
        }

        </React.Fragment>                
    )
}