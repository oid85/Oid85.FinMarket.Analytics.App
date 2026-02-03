import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalParameterList, 
    fetchCurrentFundamentalParameter, 
    showEditFundamentalParameterPeModal, 
    showEditFundamentalParameterRevenueModal, 
    showEditFundamentalParameterNetProfitModal,
    showEditFundamentalParameterEbitdaModal,
    showEditFundamentalParameterEvModal 
} from '../../redux/actions/fundamentalParameterActions'
import {EditFundamentalParameterPeModal} from './EditFundamentalParameterPeModal'
import {EditFundamentalParameterRevenueModal} from './EditFundamentalParameterRevenueModal'
import {EditFundamentalParameterNetProfitModal} from './EditFundamentalParameterNetProfitModal'
import {EditFundamentalParameterEbitdaModal} from './EditFundamentalParameterEbitdaModal'
import {EditFundamentalParameterEvModal} from './EditFundamentalParameterEvModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { 
    netProfitColor, 
    peColor, 
    revenueColor, 
    ebitdaColor,
    evColor 
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
                    <div className='ticker-header-cell border-style'></div>
                    <div className='year-header-cell border-style'>Год</div>
                    <div className='pe-header-cell border-style'>P/E</div>
                    <div className='ev-header-cell border-style'>EV, млрд. руб.</div>
                    <div className='ebitda-header-cell border-style'>EBITDA, млрд. руб.</div>
                    <div className='revenue-header-cell border-style'>Выручка, млрд. руб.</div>
                    <div className='netprofit-header-cell border-style'>Чистая прибыль, млрд. руб.</div>
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
        <EditFundamentalParameterEvModal />
        <EditFundamentalParameterRevenueModal />
        <EditFundamentalParameterNetProfitModal />
        <EditFundamentalParameterEbitdaModal />
        </React.Fragment>                
    )
}