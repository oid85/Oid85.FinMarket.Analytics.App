import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalParameterList, 
    fetchCurrentFundamentalParameter, 
    showEditFundamentalParameterPeModal, 
    showEditFundamentalParameterRevenueModal, 
    showEditFundamentalParameterNetProfitModal,
    showEditFundamentalParameterEbitdaModal,
    showEditFundamentalParameterEvModal,
    showEditFundamentalParameterPbvModal,
    showEditFundamentalParameterRoaModal,
    showEditFundamentalParameterNetDebtModal,
    showEditFundamentalParameterMarketCapModal,
    showEditFundamentalParameterDividendModal,
    showEditFundamentalParameterMoexModal
} from '../../redux/actions/fundamentalParameterActions'
import { fetchCurrentInstrument, sagaInstrumentPortfolio, sagaInstrumentSelect } from '../../redux/actions/instrumentActions'
import {EditFundamentalParameterPeModal} from './EditFundamentalParameterPeModal'
import {EditFundamentalParameterRevenueModal} from './EditFundamentalParameterRevenueModal'
import {EditFundamentalParameterNetProfitModal} from './EditFundamentalParameterNetProfitModal'
import {EditFundamentalParameterEbitdaModal} from './EditFundamentalParameterEbitdaModal'
import {EditFundamentalParameterEvModal} from './EditFundamentalParameterEvModal'
import {EditFundamentalParameterPbvModal} from './EditFundamentalParameterPbvModal'
import {EditFundamentalParameterRoaModal} from './EditFundamentalParameterRoaModal'
import {EditFundamentalParameterNetDebtModal} from './EditFundamentalParameterNetDebtModal'
import {EditFundamentalParameterMarketCapModal} from './EditFundamentalParameterMarketCapModal'
import {EditFundamentalParameterDividendModal} from './EditFundamentalParameterDividendModal'
import {EditFundamentalParameterMoexModal} from './EditFundamentalParameterMoexModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { 
    benchmarkChangeColor,
    netProfitColor, 
    peColor, 
    revenueColor, 
    ebitdaColor,
    evColor,
    pbvColor,
    roaColor,
    netDebtColor,
    marketCapColor,
    dividendColor,
    dividendYieldColor,
    evEbitdaColor,
    netDebtEbitdaColor,
    ebitdaRevenueColor,
    deltaMinMaxColor
} from './colorHelper'

export const FundamentalParameterList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalParameterListData = useSelector(state => state.fundamentalParameter.fundamentalParameterListData)    

    useEffect(() => {
        dispatch(sagaFundamentalParameterList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalParameterListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-parameter-container'>
                {
                    fundamentalParameterListData.result.fundamentalParameters.map((fundamentalParameter) => (
                        <div>
                            <div className='horizontal-container'>
                                <div className='ticker-header-cell fundamental-parameter-border-style'>Компания</div>
                                <div className='score-header-cell fundamental-parameter-border-style'>Score</div>
                                <div className='mcftr-change-header-cell fundamental-parameter-border-style'>MCFTR изм. (лучше/хуже индекса)</div>
                                <div className='moex-header-cell fundamental-parameter-border-style'>IMOEX (доля в индексе)</div>
                                <div className='year-header-cell fundamental-parameter-border-style'>Год</div>                    
                                <div className='pe-header-cell fundamental-parameter-border-style'>P / E</div>
                                <div className='pbv-header-cell fundamental-parameter-border-style'>P / BV</div>
                                <div className='roa-header-cell fundamental-parameter-border-style'>ROA, %</div>
                                <div className='ev-ebitda-header-cell fundamental-parameter-border-style'>EV/EBITDA</div>
                                <div className='netdebt-ebitda-header-cell fundamental-parameter-border-style'>NetDebt / EBITDA</div>
                                <div className='ebitda-revenue-header-cell fundamental-parameter-border-style'>EBITDA / Выручка</div>
                                <div className='marketcap-header-cell fundamental-parameter-border-style'>Капит-ция, млрд. руб.</div>
                                <div className='ev-header-cell fundamental-parameter-border-style'>EV, млрд. руб.</div>
                                <div className='ebitda-header-cell fundamental-parameter-border-style'>EBITDA, млрд. руб.</div>
                                <div className='netdebt-header-cell fundamental-parameter-border-style'>Чистый долг, млрд. руб.</div>
                                <div className='revenue-header-cell fundamental-parameter-border-style'>Выручка, млрд. руб.</div>
                                <div className='netprofit-header-cell fundamental-parameter-border-style'>Чистая прибыль (чист. опер. доход), млрд. руб.</div>
                                <div className='dividend-header-cell fundamental-parameter-border-style'>ДД, руб</div>
                                <div className='dividend-yield-header-cell fundamental-parameter-border-style'>ДД, %</div>
                                <div className='price-header-cell fundamental-parameter-border-style'>Цена акции, руб.</div>
                                <div className='delta-min-max-header-cell fundamental-parameter-border-style'>Изм. мин-макс, %</div>                    
                            </div>                            
                            <div className='horizontal-container'>
                                <div className='fundamental-parameter-border-style emitent-cell'>
                                    <div className='number-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.number}</b></div> : <div>{fundamentalParameter.number}</div>}</div>
                                    <div className='ticker-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ticker}</b></div> : <div>{fundamentalParameter.ticker}</div>}</div>
                                    <div className='name-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.name}</b></div> : <div>{fundamentalParameter.name}</div>}</div>
                                    <div className='instrument-button-container'>
                                        <div>
                                            <button className='btn btn-outline-dark instrument-button'
                                                onClick={() => {
                                                    dispatch(fetchCurrentInstrument({ticker: fundamentalParameter.ticker}))
                                                    dispatch(sagaInstrumentSelect())                                                
                                                    dispatch(sagaFundamentalParameterList())
                                                }}><div className='instrument-button-text'>{fundamentalParameter.isSelected ? <div><b>Наблюдать</b></div> : <div><del>Наблюдать</del></div>}</div></button>
                                        </div>
                                        <div>
                                            <button className='btn btn-outline-dark instrument-button'
                                                onClick={() => {
                                                    dispatch(fetchCurrentInstrument({ticker: fundamentalParameter.ticker}))
                                                    dispatch(sagaInstrumentPortfolio()) 
                                                    dispatch(sagaFundamentalParameterList())
                                                }}><div className='instrument-button-text'>{fundamentalParameter.inPortfolio ? <div><b>Портфель</b></div> : <div><del>Портфель</del></div>}</div></button>
                                        </div>                                  
                                    </div>
                                </div>                             
                                <div>
                                    <div className='fundamental-parameter-border-style score-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.score}</b></div> : <div>{fundamentalParameter.score}</div>}</div>
                                    <button className='btn btn-outline-dark score-edit-button'><div className='edit-button-text'>Score</div></button>
                                </div>
                                <div>
                                    <div className='fundamental-parameter-border-style mcftr-change-cell' style={{backgroundColor: benchmarkChangeColor(fundamentalParameter.benchmarkChange)}}>{fundamentalParameter.inPortfolio ? <div><b>{`${fundamentalParameter.benchmarkChange} %`}</b></div> : <div>{`${fundamentalParameter.benchmarkChange} %`}</div>}</div>
                                    <button className='btn btn-outline-dark mcftr-change-edit-button'><div className='edit-button-text'>MCFTR</div></button>
                                </div>                            
                                <div>
                                    <div className='fundamental-parameter-border-style moex-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.moex}</b></div> : <div>{fundamentalParameter.moex}</div>}</div>
                                    <button className='btn btn-outline-dark imoex-edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterMoexModal())
                                            }}><div className='edit-button-text'>IMOEX</div></button>
                                </div>                                                        
                                <div>
                                    {
                                        fundamentalParameter.periods.map((item) => (
                                            <div className='fundamental-parameter-border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark year-edit-button'><div className='edit-button-text'>Year</div></button>
                                </div>                                 
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style pe-cell' style={{backgroundColor: peColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark pe-edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterPeModal())
                                            }}><div className='edit-button-text'>P/E</div></button>
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style pbv-cell' style={{backgroundColor: pbvColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark pbv-edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterPbvModal())
                                            }}><div className='edit-button-text'>P/BV</div></button>
                                </div>    
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style roa-cell' style={{backgroundColor: roaColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark roa-edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterRoaModal())
                                            }}><div className='edit-button-text'>ROA</div></button>
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>EV/EBITDA</div></button>
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>ND/EBITDA</div></button>
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>EBITDA/Rev</div></button>
                                </div>                                                                                    
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style marketcap-cell' style={{backgroundColor: marketCapColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterMarketCapModal())
                                            }}><div className='edit-button-text'>MarketCap</div></button>
                                </div>                            
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style ev-cell' style={{backgroundColor: evColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterEvModal())
                                            }}><div className='edit-button-text'>EV</div></button>
                                </div>                              
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style ebitda-cell' style={{backgroundColor: ebitdaColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterEbitdaModal())
                                            }}><div className='edit-button-text'>EBITDA</div></button>                              
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style netdebt-cell' style={{backgroundColor: netDebtColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterNetDebtModal())
                                            }}><div className='edit-button-text'>NetDebt</div></button>                              
                                </div>                                                        
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style revenue-cell' style={{backgroundColor: revenueColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterRevenueModal())
                                            }}><div className='edit-button-text'>Revenue</div></button>                               
                                </div>    
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style netprofit-cell' style={{backgroundColor: netProfitColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterNetProfitModal())
                                            }}><div className='edit-button-text'>NetProfit</div></button>                              
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style dividend-cell' style={{backgroundColor: dividendColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                            dispatch(showEditFundamentalParameterDividendModal())
                                            }}><div className='edit-button-text'>Dividend</div></button>                              
                                </div>                                
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>DividendYield</div></button>                              
                                </div>                            
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>Price</div></button>
                                </div> 
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item) => (
                                            <div className='fundamental-parameter-border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(item)}}>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                    <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>DeltaMinMax</div></button>
                                </div>                                                       
                            </div>                        
                        </div>
                    ))
                }
            </div>
        }
        <EditFundamentalParameterPeModal />
        <EditFundamentalParameterPbvModal />
        <EditFundamentalParameterRoaModal />
        <EditFundamentalParameterEvModal />
        <EditFundamentalParameterRevenueModal />
        <EditFundamentalParameterNetProfitModal />
        <EditFundamentalParameterEbitdaModal />
        <EditFundamentalParameterNetDebtModal />
        <EditFundamentalParameterMarketCapModal />
        <EditFundamentalParameterDividendModal />
        <EditFundamentalParameterMoexModal />
        </React.Fragment>                
    )
}