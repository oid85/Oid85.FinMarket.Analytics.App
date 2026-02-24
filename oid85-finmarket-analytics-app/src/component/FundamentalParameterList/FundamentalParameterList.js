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
    showEditFundamentalParameterDividendYieldModal,
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
import {EditFundamentalParameterDividendYieldModal} from './EditFundamentalParameterDividendYieldModal'
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
            <div className='fundamental-parameter-container border-style'>
                <div className='horizontal-container'>
                    <div className='ticker-header-cell border-style'>Компания</div>
                    <div className='score-header-cell border-style'>Score</div>
                    <div className='mcftr-change-header-cell border-style'>MCFTR изм. (лучше/хуже индекса)</div>
                    <div className='moex-header-cell border-style'>IMOEX (доля в индексе)</div>
                    <div className='year-header-cell border-style'>Год</div>                    
                    <div className='pe-header-cell border-style'>P / E</div>
                    <div className='pbv-header-cell border-style'>P / BV</div>
                    <div className='roa-header-cell border-style'>ROA, %</div>
                    <div className='ev-ebitda-header-cell border-style'>EV/EBITDA</div>
                    <div className='netdebt-ebitda-header-cell border-style'>NetDebt / EBITDA</div>
                    <div className='ebitda-revenue-header-cell border-style'>EBITDA / Выручка</div>
                    <div className='marketcap-header-cell border-style'>Капит-ция, млрд. руб.</div>
                    <div className='ev-header-cell border-style'>EV, млрд. руб.</div>
                    <div className='ebitda-header-cell border-style'>EBITDA, млрд. руб.</div>
                    <div className='netdebt-header-cell border-style'>Чистый долг, млрд. руб.</div>
                    <div className='revenue-header-cell border-style'>Выручка, млрд. руб.</div>
                    <div className='netprofit-header-cell border-style'>Чистая прибыль, млрд. руб.</div>
                    <div className='dividend-yield-header-cell border-style'>ДД, %</div>
                    <div className='price-header-cell border-style'>Цена акции, руб.</div>
                    <div className='delta-min-max-header-cell border-style'>Изм. мин-макс, %</div>                    
                </div>
                {
                    fundamentalParameterListData.result.fundamentalParameters.map((fundamentalParameter) => (
                        <div className='horizontal-container'>
                            <div className='border-style emitent-cell'>
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
                                <div className='border-style score-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.score}</b></div> : <div>{fundamentalParameter.score}</div>}</div>
                                <button className='btn btn-outline-dark score-edit-button'><div className='edit-button-text'>Score</div></button>
                            </div>
                            <div>
                                <div className='border-style mcftr-change-cell' style={{backgroundColor: benchmarkChangeColor(fundamentalParameter.benchmarkChange)}}>{fundamentalParameter.inPortfolio ? <div><b>{`${fundamentalParameter.benchmarkChange} %`}</b></div> : <div>{`${fundamentalParameter.benchmarkChange} %`}</div>}</div>
                                <button className='btn btn-outline-dark mcftr-change-edit-button'><div className='edit-button-text'>MCFTR</div></button>
                            </div>                            
                            <div>
                                <div className='border-style moex-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.moex}</b></div> : <div>{fundamentalParameter.moex}</div>}</div>
                                <button className='btn btn-outline-dark imoex-edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterMoexModal())
                                        }}><div className='edit-button-text'>IMOEX</div></button>
                            </div>                                                        
                            <div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2019</b></div> : <div>2019</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2020</b></div> : <div>2020</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2021</b></div> : <div>2021</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2022</b></div> : <div>2022</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2023</b></div> : <div>2023</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2024</b></div> : <div>2024</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2025</b></div> : <div>2025</div>}</div>
                                <div className='border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>2026</b></div> : <div>2026</div>}</div>
                                <button className='btn btn-outline-dark year-edit-button'><div className='edit-button-text'>Year</div></button>
                            </div>                                 
                            <div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2019}</b></div> : <div>{fundamentalParameter.pe2019}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2020}</b></div> : <div>{fundamentalParameter.pe2020}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2021}</b></div> : <div>{fundamentalParameter.pe2021}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2022}</b></div> : <div>{fundamentalParameter.pe2022}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2023}</b></div> : <div>{fundamentalParameter.pe2023}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2024}</b></div> : <div>{fundamentalParameter.pe2024}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2025}</b></div> : <div>{fundamentalParameter.pe2025}</div>}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pe2026}</b></div> : <div>{fundamentalParameter.pe2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterPeModal())
                                        }}><div className='edit-button-text'>P/E</div></button>
                            </div>
                            <div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2019}</b></div> : <div>{fundamentalParameter.pbv2019}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2020}</b></div> : <div>{fundamentalParameter.pbv2020}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2021}</b></div> : <div>{fundamentalParameter.pbv2021}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2022}</b></div> : <div>{fundamentalParameter.pbv2022}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2023}</b></div> : <div>{fundamentalParameter.pbv2023}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2024}</b></div> : <div>{fundamentalParameter.pbv2024}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2025}</b></div> : <div>{fundamentalParameter.pbv2025}</div>}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.pbv2026}</b></div> : <div>{fundamentalParameter.pbv2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterPbvModal())
                                        }}><div className='edit-button-text'>P/BV</div></button>
                            </div>    
                            <div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2019}</b></div> : <div>{fundamentalParameter.roa2019}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2020}</b></div> : <div>{fundamentalParameter.roa2020}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2021}</b></div> : <div>{fundamentalParameter.roa2021}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2022}</b></div> : <div>{fundamentalParameter.roa2022}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2023}</b></div> : <div>{fundamentalParameter.roa2023}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2024}</b></div> : <div>{fundamentalParameter.roa2024}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2025}</b></div> : <div>{fundamentalParameter.roa2025}</div>}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.roa2026}</b></div> : <div>{fundamentalParameter.roa2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterRoaModal())
                                        }}><div className='edit-button-text'>ROA</div></button>
                            </div>
                            <div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2019}</b></div> : <div>{fundamentalParameter.evEbitda2019}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2020}</b></div> : <div>{fundamentalParameter.evEbitda2020}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2021}</b></div> : <div>{fundamentalParameter.evEbitda2021}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2022}</b></div> : <div>{fundamentalParameter.evEbitda2022}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2023}</b></div> : <div>{fundamentalParameter.evEbitda2023}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2024}</b></div> : <div>{fundamentalParameter.evEbitda2024}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2025}</b></div> : <div>{fundamentalParameter.evEbitda2025}</div>}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.evEbitda2026}</b></div> : <div>{fundamentalParameter.evEbitda2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>EV/EBITDA</div></button>
                            </div>
                            <div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2019}</b></div> : <div>{fundamentalParameter.netDebtEbitda2019}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2020}</b></div> : <div>{fundamentalParameter.netDebtEbitda2020}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2021}</b></div> : <div>{fundamentalParameter.netDebtEbitda2021}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2022}</b></div> : <div>{fundamentalParameter.netDebtEbitda2022}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2023}</b></div> : <div>{fundamentalParameter.netDebtEbitda2023}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2024}</b></div> : <div>{fundamentalParameter.netDebtEbitda2024}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2025}</b></div> : <div>{fundamentalParameter.netDebtEbitda2025}</div>}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebtEbitda2026}</b></div> : <div>{fundamentalParameter.netDebtEbitda2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>ND/EBITDA</div></button>
                            </div>
                            <div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2019}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2019}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2020}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2020}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2021}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2021}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2022}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2022}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2023}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2023}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2024}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2024}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2025}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2025}</div>}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitdaRevenue2026}</b></div> : <div>{fundamentalParameter.ebitdaRevenue2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>EBITDA/Rev</div></button>
                            </div>                                                                                    
                            <div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2019}</b></div> : <div>{fundamentalParameter.marketCap2019}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2020}</b></div> : <div>{fundamentalParameter.marketCap2020}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2021}</b></div> : <div>{fundamentalParameter.marketCap2021}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2022}</b></div> : <div>{fundamentalParameter.marketCap2022}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2023}</b></div> : <div>{fundamentalParameter.marketCap2023}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2024}</b></div> : <div>{fundamentalParameter.marketCap2024}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2025}</b></div> : <div>{fundamentalParameter.marketCap2025}</div>}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.marketCap2026}</b></div> : <div>{fundamentalParameter.marketCap2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterMarketCapModal())
                                        }}><div className='edit-button-text'>MarketCap</div></button>
                            </div>                            
                            <div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2019}</b></div> : <div>{fundamentalParameter.ev2019}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2020}</b></div> : <div>{fundamentalParameter.ev2020}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2021}</b></div> : <div>{fundamentalParameter.ev2021}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2022}</b></div> : <div>{fundamentalParameter.ev2022}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2023}</b></div> : <div>{fundamentalParameter.ev2023}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2024}</b></div> : <div>{fundamentalParameter.ev2024}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2025}</b></div> : <div>{fundamentalParameter.ev2025}</div>}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ev2026}</b></div> : <div>{fundamentalParameter.ev2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterEvModal())
                                        }}><div className='edit-button-text'>EV</div></button>
                            </div>                              
                            <div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2019}</b></div> : <div>{fundamentalParameter.ebitda2019}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2020}</b></div> : <div>{fundamentalParameter.ebitda2020}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2021}</b></div> : <div>{fundamentalParameter.ebitda2021}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2022}</b></div> : <div>{fundamentalParameter.ebitda2022}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2023}</b></div> : <div>{fundamentalParameter.ebitda2023}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2024}</b></div> : <div>{fundamentalParameter.ebitda2024}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2025}</b></div> : <div>{fundamentalParameter.ebitda2025}</div>}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ebitda2026}</b></div> : <div>{fundamentalParameter.ebitda2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterEbitdaModal())
                                        }}><div className='edit-button-text'>EBITDA</div></button>                              
                            </div>
                            <div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2019}</b></div> : <div>{fundamentalParameter.netDebt2019}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2020}</b></div> : <div>{fundamentalParameter.netDebt2020}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2021}</b></div> : <div>{fundamentalParameter.netDebt2021}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2022}</b></div> : <div>{fundamentalParameter.netDebt2022}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2023}</b></div> : <div>{fundamentalParameter.netDebt2023}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2024}</b></div> : <div>{fundamentalParameter.netDebt2024}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2025}</b></div> : <div>{fundamentalParameter.netDebt2025}</div>}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netDebt2026}</b></div> : <div>{fundamentalParameter.netDebt2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterNetDebtModal())
                                        }}><div className='edit-button-text'>NetDebt</div></button>                              
                            </div>                                                        
                            <div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2019}</b></div> : <div>{fundamentalParameter.revenue2019}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2020}</b></div> : <div>{fundamentalParameter.revenue2020}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2021}</b></div> : <div>{fundamentalParameter.revenue2021}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2022}</b></div> : <div>{fundamentalParameter.revenue2022}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2023}</b></div> : <div>{fundamentalParameter.revenue2023}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2024}</b></div> : <div>{fundamentalParameter.revenue2024}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2025}</b></div> : <div>{fundamentalParameter.revenue2025}</div>}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.revenue2026}</b></div> : <div>{fundamentalParameter.revenue2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterRevenueModal())
                                        }}><div className='edit-button-text'>Revenue</div></button>                               
                            </div>    
                            <div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2019}</b></div> : <div>{fundamentalParameter.netProfit2019}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2020}</b></div> : <div>{fundamentalParameter.netProfit2020}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2021}</b></div> : <div>{fundamentalParameter.netProfit2021}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2022}</b></div> : <div>{fundamentalParameter.netProfit2022}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2023}</b></div> : <div>{fundamentalParameter.netProfit2023}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2024}</b></div> : <div>{fundamentalParameter.netProfit2024}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2025}</b></div> : <div>{fundamentalParameter.netProfit2025}</div>}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.netProfit2026}</b></div> : <div>{fundamentalParameter.netProfit2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterNetProfitModal())
                                        }}><div className='edit-button-text'>NetProfit</div></button>                              
                            </div>
                            <div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2019}</b></div> : <div>{fundamentalParameter.dividendYield2019}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2020}</b></div> : <div>{fundamentalParameter.dividendYield2020}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2021}</b></div> : <div>{fundamentalParameter.dividendYield2021}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2022}</b></div> : <div>{fundamentalParameter.dividendYield2022}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2023}</b></div> : <div>{fundamentalParameter.dividendYield2023}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2024}</b></div> : <div>{fundamentalParameter.dividendYield2024}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2025}</b></div> : <div>{fundamentalParameter.dividendYield2025}</div>}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.dividendYield2026}</b></div> : <div>{fundamentalParameter.dividendYield2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterDividendYieldModal())
                                        }}><div className='edit-button-text'>DividendYield</div></button>                              
                            </div>                            
                            <div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2019}</b></div> : <div>{fundamentalParameter.price2019}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2020}</b></div> : <div>{fundamentalParameter.price2020}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2021}</b></div> : <div>{fundamentalParameter.price2021}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2022}</b></div> : <div>{fundamentalParameter.price2022}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2023}</b></div> : <div>{fundamentalParameter.price2023}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2024}</b></div> : <div>{fundamentalParameter.price2024}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2025}</b></div> : <div>{fundamentalParameter.price2025}</div>}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.price2026}</b></div> : <div>{fundamentalParameter.price2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>Price</div></button>
                            </div> 
                            <div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2019)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2019}</b></div> : <div>{fundamentalParameter.deltaMinMax2019}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2020)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2020}</b></div> : <div>{fundamentalParameter.deltaMinMax2020}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2021)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2021}</b></div> : <div>{fundamentalParameter.deltaMinMax2021}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2022)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2022}</b></div> : <div>{fundamentalParameter.deltaMinMax2022}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2023)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2023}</b></div> : <div>{fundamentalParameter.deltaMinMax2023}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2024)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2024}</b></div> : <div>{fundamentalParameter.deltaMinMax2024}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2025)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2025}</b></div> : <div>{fundamentalParameter.deltaMinMax2025}</div>}</div>
                                <div className='border-style delta-min-max-cell' style={{backgroundColor: deltaMinMaxColor(fundamentalParameter.deltaMinMax2026)}}>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.deltaMinMax2026}</b></div> : <div>{fundamentalParameter.deltaMinMax2026}</div>}</div>
                                <button className='btn btn-outline-dark edit-button'><div className='edit-button-text'>DeltaMinMax</div></button>
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
        <EditFundamentalParameterDividendYieldModal />
        <EditFundamentalParameterMoexModal />
        </React.Fragment>                
    )
}