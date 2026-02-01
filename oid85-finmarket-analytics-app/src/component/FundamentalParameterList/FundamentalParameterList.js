import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaFundamentalParameterList, fetchCurrentFundamentalParameter, showEditFundamentalParameterPeModal, showEditFundamentalParameterRevenueModal, showEditFundamentalParameterNetProfitModal } from '../../redux/actions/fundamentalParameterActions'
import {EditFundamentalParameterPeModal} from './EditFundamentalParameterPeModal'
import {EditFundamentalParameterRevenueModal} from './EditFundamentalParameterRevenueModal'
import {EditFundamentalParameterNetProfitModal} from './EditFundamentalParameterNetProfitModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { netProfitColor, peColor, revenueColor } from '../../colorHelper'

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
            <div className=''>
                <div className='horizontal-container'>
                    <div className='ticker-header-cell border-style'></div>
                    <div className='year-header-cell border-style'>Год</div>
                    <div className='pe-header-cell border-style'>P/E</div>
                    <div className='revenue-header-cell border-style'>Выручка, млрд. руб.</div>
                    <div className='netprofit-header-cell border-style'>Чистая прибыль, млрд. руб.</div>
                </div>
                {
                    fundamentalParameterListData.result.fundamentalParameters.map((fundamentalParameter) => (
                        <div className='horizontal-container'>
                            <div className='border-style emitent-cell'>
                                <div className='ticker-cell'>{fundamentalParameter.ticker}</div>
                                <div className='name-cell'>{fundamentalParameter.name}</div>
                            </div>                             
                            <div className=''>
                                <div className='border-style year-cell'>2019</div>
                                <div className='border-style year-cell'>2020</div>
                                <div className='border-style year-cell'>2021</div>
                                <div className='border-style year-cell'>2022</div>
                                <div className='border-style year-cell'>2023</div>
                                <div className='border-style year-cell'>2024</div>
                                <div className='border-style year-cell'>2025</div>
                            </div>     
                            <div className=''>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2019)}}>{fundamentalParameter.pe2019}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2020)}}>{fundamentalParameter.pe2020}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2021)}}>{fundamentalParameter.pe2021}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2022)}}>{fundamentalParameter.pe2022}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2023)}}>{fundamentalParameter.pe2023}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2024)}}>{fundamentalParameter.pe2024}</div>
                                <div className='border-style pe-cell' style={{backgroundColor: peColor(fundamentalParameter.pe2025)}}>{fundamentalParameter.pe2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterPeModal())
                                        }}></button>
                            </div>  
                            <div className=''>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2019)}}>{fundamentalParameter.revenue2019}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2020)}}>{fundamentalParameter.revenue2020}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2021)}}>{fundamentalParameter.revenue2021}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2022)}}>{fundamentalParameter.revenue2022}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2023)}}>{fundamentalParameter.revenue2023}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2024)}}>{fundamentalParameter.revenue2024}</div>
                                <div className='border-style revenue-cell' style={{backgroundColor: revenueColor(fundamentalParameter.revenue2025)}}>{fundamentalParameter.revenue2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterRevenueModal())
                                        }}></button>                               
                            </div>    
                            <div className=''>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2019)}}>{fundamentalParameter.netProfit2019}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2020)}}>{fundamentalParameter.netProfit2020}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2021)}}>{fundamentalParameter.netProfit2021}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2022)}}>{fundamentalParameter.netProfit2022}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2023)}}>{fundamentalParameter.netProfit2023}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2024)}}>{fundamentalParameter.netProfit2024}</div>
                                <div className='border-style netprofit-cell' style={{backgroundColor: netProfitColor(fundamentalParameter.netProfit2025)}}>{fundamentalParameter.netProfit2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentFundamentalParameter({...fundamentalParameter}))
                                        dispatch(showEditFundamentalParameterNetProfitModal())
                                        }}></button>                              
                            </div>                                                                                                                                                               
                        </div>
                    ))
                }
            </div>
        }
        <EditFundamentalParameterPeModal />
        <EditFundamentalParameterRevenueModal />
        <EditFundamentalParameterNetProfitModal />
        </React.Fragment>                
    )
}