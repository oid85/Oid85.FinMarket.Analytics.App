import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaBondAnalyse } from '../../redux/actions/bondAnalyseActions'
import { CalendarMonth } from '../Calendar/CalendarMonth'
import Loader from '../Loader/Loader'
import { CONSTANTS } from "../../constants"
import './styles.css'
import { 
    couponColor
} from './colorHelper'

export const BondAnalyse = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const bondAnalyseData = useSelector(state => state.bondAnalyse.bondAnalyseData)

    useEffect(() => {
        dispatch(sagaBondAnalyse())
    }, [])

    return (
        <React.Fragment>
        {
            !bondAnalyseData.result || loading
            ? <Loader/>
            :
            <div className='border-style'>             
                <div className='horizontal-container'>
                    <div className='bond-analyse-ticker-header-cell border-style'>Тикер</div> 
                    <div className='bond-analyse-name-header-cell border-style'>Наименование</div>
                    <div className='bond-analyse-nkd-header-cell border-style'>НКД</div>
                    <div className='bond-analyse-price-header-cell border-style'>Цена</div>
                    <div className='bond-analyse-yield-header-cell border-style'>Дох-ть</div>
                    <div className='bond-analyse-days-to-maturity-header-cell border-style'>До погаш.</div>
                    {
                        bondAnalyseData.result.dates.map((date, index) => (
                            <div className='bond-analyse-date-header-cell border-style'>
                                <CalendarMonth key = {index} date = {date} />
                            </div> 
                            
                        ))
                    } 
                </div>
                {
                    bondAnalyseData.result.items.map((item, index) => (
                        <div className='horizontal-container'>
                            <div className='bond-analyse-ticker-cell border-style'>{item.ticker}</div> 
                            <div className='bond-analyse-name-cell border-style'>{item.name}</div>
                            <div className='bond-analyse-nkd-cell border-style'>{item.nkd}</div>
                            <div className='bond-analyse-price-cell border-style'>{item.price}</div>
                            <div className='bond-analyse-yield-cell border-style'>{item.yield}</div>                            
                            <div className='bond-analyse-days-to-maturity-cell border-style'>{item.daysToMaturity}</div> 
                            {
                                item.coupons.map((coupon, index) => (
                                    <div className='bond-analyse-coupon-cell border-style' style={{backgroundColor: couponColor(coupon.couponSum)}}>{coupon.couponSum}</div>                             
                                ))
                            }                                                       
                        </div>                         
                    ))                    
                }
            </div>         
        }
        </React.Fragment>                
    )
}