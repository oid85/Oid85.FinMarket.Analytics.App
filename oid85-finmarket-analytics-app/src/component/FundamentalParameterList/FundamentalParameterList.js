import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaFundamentalParameterList, fetchCurrentFundamentalParameter } from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

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
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2019}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2020}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2021}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2022}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2023}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2024}</div>
                                <div className='border-style pe-cell'>{fundamentalParameter.pe2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {

                                        }}></button>
                            </div>  
                            <div className=''>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2019}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2020}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2021}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2022}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2023}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2024}</div>
                                <div className='border-style revenue-cell'>{fundamentalParameter.revenue2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {

                                        }}></button>                               
                            </div>    
                            <div className=''>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2019}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2020}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2021}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2022}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2023}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2024}</div>
                                <div className='border-style netprofit-cell'>{fundamentalParameter.netprofit2025}</div>
                                <button className='btn btn-outline-dark edit-button'
                                    onClick={() => {

                                        }}></button>                              
                            </div>                                                                                                                                                               
                        </div>
                    ))
                }
            </div>
        }
        </React.Fragment>                
    )
}