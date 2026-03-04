import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaBondAnalyse } from '../../redux/actions/bondAnalyseActions'
import { CalendarMonth } from '../Calendar/CalendarMonth'
import Loader from '../Loader/Loader'
import './styles.css'
import { 
    couponColor,
    yieldColor,
    priceColor,
    daysToMaturityColor
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
            <div>             
                <div className='horizontal-container'>
                    <div className='bond-analyse-ticker-header-cell bond-analyse-border-style'>Тикер</div> 
                    <div className='bond-analyse-name-header-cell bond-analyse-border-style'>Наименование</div>
                    <div className='bond-analyse-nkd-header-cell bond-analyse-border-style'>НКД</div>
                    <div className='bond-analyse-price-header-cell bond-analyse-border-style'>Цена</div>
                    <div className='bond-analyse-yield-header-cell bond-analyse-border-style'>Дох-ть</div>
                    <div className='bond-analyse-days-to-maturity-header-cell bond-analyse-border-style'>До погаш.</div>
                    {
                        bondAnalyseData.result.dates.map((date, index) => (
                            <div className='bond-analyse-date-header-cell bond-analyse-border-style'>
                                <CalendarMonth key = {index} date = {date} />
                            </div>                             
                        ))
                    } 
                </div>
                {
                    bondAnalyseData.result.items.map((item, index) => (
                        <div className='horizontal-container'>
                            <div className='bond-analyse-ticker-cell bond-analyse-border-style'>{item.ticker}</div> 
                            <div className='bond-analyse-name-cell bond-analyse-border-style'>{item.name}</div>
                            <div className='bond-analyse-nkd-cell bond-analyse-border-style'>{item.nkd}</div>
                            <div className='bond-analyse-price-cell bond-analyse-border-style' style={{backgroundColor: priceColor(item.price)}}>{item.price}</div>
                            <div className='bond-analyse-yield-cell bond-analyse-border-style' style={{backgroundColor: yieldColor(item.yield)}}>{`${item.yield} %`}</div>                            
                            <div className='bond-analyse-days-to-maturity-cell bond-analyse-border-style' style={{backgroundColor: daysToMaturityColor(item.daysToMaturity)}}>{item.daysToMaturity}</div> 
                            {
                                item.coupons.map((coupon, index) => (
                                    <div className='bond-analyse-coupon-cell bond-analyse-border-style' style={{backgroundColor: couponColor(coupon.couponSum)}}>{coupon.couponSum}</div>                             
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