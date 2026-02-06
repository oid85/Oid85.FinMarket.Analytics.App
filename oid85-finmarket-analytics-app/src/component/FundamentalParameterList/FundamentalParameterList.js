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
    ebitdaRevenueColor
} from '../../colorHelper'

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
                    <div className='year-header-cell border-style'>Год</div>
                    <div className='moex-header-cell border-style'>IMOEX</div>
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
                </div>
                {
                    fundamentalParameterListData.result.fundamentalParameters.map((fundamentalParameter) => (
                        <div className='horizontal-container'>
                            <div className='border-style emitent-cell'>
                                <div className='ticker-cell'>{fundamentalParameter.ticker}</div>
                                <div className='name-cell'>{fundamentalParameter.name}</div>
                            </div>                             
                            <div>
                                <div className='border-style year-cell'>2019</div>
                                <div className='border-style year-cell'>2020</div>
                                <div className='border-style year-cell'>2021</div>
                                <div className='border-style year-cell'>2022</div>
                                <div className='border-style year-cell'>2023</div>
                                <div className='border-style year-cell'>2024</div>
                                <div className='border-style year-cell'>2025</div>
                                <div className='border-style year-cell'>2026</div>
                            </div>  
                            <div>
                                <div className='border-style moex-cell'>{fundamentalParameter.moex}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterMoexModal())
                                        }}><div className='edit-button-text'>IMOEX</div></button>
                            </div>                               
                            <div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2019)}}>{fundamentalParameter.pe2019}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2020)}}>{fundamentalParameter.pe2020}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2021)}}>{fundamentalParameter.pe2021}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2022)}}>{fundamentalParameter.pe2022}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2023)}}>{fundamentalParameter.pe2023}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2024)}}>{fundamentalParameter.pe2024}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2025)}}>{fundamentalParameter.pe2025}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2026)}}>{fundamentalParameter.pe2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterPeModal())
                                        }}><div className='edit-button-text'>P/E</div></button>
                            </div>
                            <div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2019)}}>{fundamentalParameter.pbv2019}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2020)}}>{fundamentalParameter.pbv2020}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2021)}}>{fundamentalParameter.pbv2021}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2022)}}>{fundamentalParameter.pbv2022}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2023)}}>{fundamentalParameter.pbv2023}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2024)}}>{fundamentalParameter.pbv2024}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2025)}}>{fundamentalParameter.pbv2025}</div>
                                <div className='border-style pbv-cell' style={{backgroundColor: pbvColor(fundamentalParameter.pbv2026)}}>{fundamentalParameter.pbv2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterPbvModal())
                                        }}><div className='edit-button-text'>P/BV</div></button>
                            </div>    
                            <div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2019)}}>{fundamentalParameter.roa2019}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2020)}}>{fundamentalParameter.roa2020}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2021)}}>{fundamentalParameter.roa2021}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2022)}}>{fundamentalParameter.roa2022}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2023)}}>{fundamentalParameter.roa2023}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2024)}}>{fundamentalParameter.roa2024}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2025)}}>{fundamentalParameter.roa2025}</div>
                                <div className='border-style roa-cell' style={{backgroundColor: roaColor(fundamentalParameter.roa2026)}}>{fundamentalParameter.roa2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterRoaModal())
                                        }}><div className='edit-button-text'>ROA</div></button>
                            </div>
                            <div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2019)}}>{fundamentalParameter.evEbitda2019}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2020)}}>{fundamentalParameter.evEbitda2020}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2021)}}>{fundamentalParameter.evEbitda2021}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2022)}}>{fundamentalParameter.evEbitda2022}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2023)}}>{fundamentalParameter.evEbitda2023}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2024)}}>{fundamentalParameter.evEbitda2024}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2025)}}>{fundamentalParameter.evEbitda2025}</div>
                                <div className='border-style ev-ebitda-cell' style={{backgroundColor: evEbitdaColor(fundamentalParameter.evEbitda2026)}}>{fundamentalParameter.evEbitda2026}</div>
                            </div>
                            <div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2019)}}>{fundamentalParameter.netDebtEbitda2019}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2020)}}>{fundamentalParameter.netDebtEbitda2020}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2021)}}>{fundamentalParameter.netDebtEbitda2021}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2022)}}>{fundamentalParameter.netDebtEbitda2022}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2023)}}>{fundamentalParameter.netDebtEbitda2023}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2024)}}>{fundamentalParameter.netDebtEbitda2024}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2025)}}>{fundamentalParameter.netDebtEbitda2025}</div>
                                <div className='border-style netdebt-ebitda-cell' style={{backgroundColor: netDebtEbitdaColor(fundamentalParameter.netDebtEbitda2026)}}>{fundamentalParameter.netDebtEbitda2026}</div>
                            </div>
                            <div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2019)}}>{fundamentalParameter.ebitdaRevenue2019}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2020)}}>{fundamentalParameter.ebitdaRevenue2020}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2021)}}>{fundamentalParameter.ebitdaRevenue2021}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2022)}}>{fundamentalParameter.ebitdaRevenue2022}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2023)}}>{fundamentalParameter.ebitdaRevenue2023}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2024)}}>{fundamentalParameter.ebitdaRevenue2024}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2025)}}>{fundamentalParameter.ebitdaRevenue2025}</div>
                                <div className='border-style ebitda-revenue-cell' style={{backgroundColor: ebitdaRevenueColor(fundamentalParameter.ebitdaRevenue2026)}}>{fundamentalParameter.ebitdaRevenue2026}</div>
                            </div>                                                                                    
                            <div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2019)}}>{fundamentalParameter.marketCap2019}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2020)}}>{fundamentalParameter.marketCap2020}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2021)}}>{fundamentalParameter.marketCap2021}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2022)}}>{fundamentalParameter.marketCap2022}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2023)}}>{fundamentalParameter.marketCap2023}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2024)}}>{fundamentalParameter.marketCap2024}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2025)}}>{fundamentalParameter.marketCap2025}</div>
                                <div className='border-style marketcap-cell' style={{backgroundColor: marketCapColor(fundamentalParameter.marketCap2026)}}>{fundamentalParameter.marketCap2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterMarketCapModal())
                                        }}><div className='edit-button-text'>MarketCap</div></button>
                            </div>                            
                            <div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2019)}}>{fundamentalParameter.ev2019}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2020)}}>{fundamentalParameter.ev2020}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2021)}}>{fundamentalParameter.ev2021}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2022)}}>{fundamentalParameter.ev2022}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2023)}}>{fundamentalParameter.ev2023}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2024)}}>{fundamentalParameter.ev2024}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2025)}}>{fundamentalParameter.ev2025}</div>
                                <div className='border-style ev-cell' style={{backgroundColor: evColor(fundamentalParameter.ev2026)}}>{fundamentalParameter.ev2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterEvModal())
                                        }}><div className='edit-button-text'>EV</div></button>
                            </div>                              
                            <div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2019)}}>{fundamentalParameter.ebitda2019}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2020)}}>{fundamentalParameter.ebitda2020}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2021)}}>{fundamentalParameter.ebitda2021}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2022)}}>{fundamentalParameter.ebitda2022}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2023)}}>{fundamentalParameter.ebitda2023}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2024)}}>{fundamentalParameter.ebitda2024}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2025)}}>{fundamentalParameter.ebitda2025}</div>
                                <div className='border-style ebitda-cell' style={{backgroundColor: ebitdaColor(fundamentalParameter.ebitda2026)}}>{fundamentalParameter.ebitda2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterEbitdaModal())
                                        }}><div className='edit-button-text'>EBITDA</div></button>                              
                            </div>
                            <div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2019)}}>{fundamentalParameter.netDebt2019}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2020)}}>{fundamentalParameter.netDebt2020}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2021)}}>{fundamentalParameter.netDebt2021}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2022)}}>{fundamentalParameter.netDebt2022}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2023)}}>{fundamentalParameter.netDebt2023}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2024)}}>{fundamentalParameter.netDebt2024}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2025)}}>{fundamentalParameter.netDebt2025}</div>
                                <div className='border-style netdebt-cell' style={{backgroundColor: netDebtColor(fundamentalParameter.netDebt2026)}}>{fundamentalParameter.netDebt2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterNetDebtModal())
                                        }}><div className='edit-button-text'>NetDebt</div></button>                              
                            </div>                                                        
                            <div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2019)}}>{fundamentalParameter.revenue2019}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2020)}}>{fundamentalParameter.revenue2020}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2021)}}>{fundamentalParameter.revenue2021}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2022)}}>{fundamentalParameter.revenue2022}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2023)}}>{fundamentalParameter.revenue2023}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2024)}}>{fundamentalParameter.revenue2024}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2025)}}>{fundamentalParameter.revenue2025}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2026)}}>{fundamentalParameter.revenue2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterRevenueModal())
                                        }}><div className='edit-button-text'>Revenue</div></button>                               
                            </div>    
                            <div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2019)}}>{fundamentalParameter.netProfit2019}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2020)}}>{fundamentalParameter.netProfit2020}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2021)}}>{fundamentalParameter.netProfit2021}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2022)}}>{fundamentalParameter.netProfit2022}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2023)}}>{fundamentalParameter.netProfit2023}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2024)}}>{fundamentalParameter.netProfit2024}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2025)}}>{fundamentalParameter.netProfit2025}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2026)}}>{fundamentalParameter.netProfit2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterNetProfitModal())
                                        }}><div className='edit-button-text'>NetProfit</div></button>                              
                            </div>
                            <div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2019)}}>{fundamentalParameter.dividendYield2019}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2020)}}>{fundamentalParameter.dividendYield2020}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2021)}}>{fundamentalParameter.dividendYield2021}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2022)}}>{fundamentalParameter.dividendYield2022}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2023)}}>{fundamentalParameter.dividendYield2023}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2024)}}>{fundamentalParameter.dividendYield2024}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2025)}}>{fundamentalParameter.dividendYield2025}</div>
                                <div className='border-style dividend-yield-cell' style={{backgroundColor: dividendYieldColor(fundamentalParameter.dividendYield2026)}}>{fundamentalParameter.dividendYield2026}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterDividendYieldModal())
                                        }}><div className='edit-button-text'>DividendYield</div></button>                              
                            </div>                            
                            <div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2019}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2020}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2021}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2022}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2023}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2024}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2025}</div>
                                <div className='border-style price-cell'>{fundamentalParameter.price2026}</div>
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