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
import { fetchCurrentInstrument, sagaInstrumentPortfolio } from '../../redux/actions/instrumentActions'

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
                    <div className='bond-analyse-in-portfolio-button-header-cell bond-analyse-border-style'></div> 
                    <div className='bond-analyse-ticker-header-cell bond-analyse-border-style'>Тикер</div> 
                    <div className='bond-analyse-name-header-cell bond-analyse-border-style'>Наименование</div>
                    <div className='bond-analyse-nkd-header-cell bond-analyse-border-style'>НКД</div>
                    <div className='bond-analyse-price-header-cell bond-analyse-border-style'>Цена</div>
                    <div className='bond-analyse-yield-header-cell bond-analyse-border-style'>Дох-ть</div>
                    <div className='bond-analyse-days-to-maturity-header-cell bond-analyse-border-style'>Лет до погаш.</div>
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
                            <div className='bond-analyse-in-portfolio-button-cell bond-analyse-border-style'>
                                <button className='btn btn-outline-dark bond-analyse-in-portfolio-button'
                                    onClick={() => {
                                        dispatch(fetchCurrentInstrument({ticker: item.ticker}))
                                        dispatch(sagaInstrumentPortfolio()) 
                                        dispatch(sagaBondAnalyse())
                                    }}><div className='bond-analyse-in-portfolio-button-text'>{item.inPortfolio ? <div><b>Портфель</b></div> : <div><del>Портфель</del></div>}</div></button>                            
                            </div> 
                            <div className='bond-analyse-ticker-cell bond-analyse-border-style'>{item.inPortfolio ? <div><b>{item.ticker}</b></div> : <div>{item.ticker}</div>}</div> 
                            <div className='bond-analyse-name-cell bond-analyse-border-style'>{item.inPortfolio ? <div><b>{item.name}</b></div> : <div>{item.name}</div>}</div>
                            <div className='bond-analyse-nkd-cell bond-analyse-border-style'>{item.inPortfolio ? <div><b>{item.nkd}</b></div> : <div>{item.nkd}</div>}</div>
                            <div className='bond-analyse-price-cell bond-analyse-border-style' style={{backgroundColor: priceColor(item.price)}}>{item.inPortfolio ? <div><b>{item.price}</b></div> : <div>{item.price}</div>}</div>
                            <div className='bond-analyse-yield-cell bond-analyse-border-style' style={{backgroundColor: yieldColor(item.yield)}}>{item.inPortfolio ? <div><b>{`${item.yield} %`}</b></div> : <div>{`${item.yield} %`}</div>}</div>                            
                            <div className='bond-analyse-days-to-maturity-cell bond-analyse-border-style' style={{backgroundColor: daysToMaturityColor(item.daysToMaturity)}}>{item.inPortfolio ? <div><b>{`${(item.daysToMaturity / 365.0).toFixed(1)} г.`}</b></div> : <div>{`${(item.daysToMaturity / 365.0).toFixed(1)} г.`}</div>}</div> 
                            {
                                item.coupons.map((coupon, index) => (
                                    <div className='bond-analyse-coupon-cell bond-analyse-border-style' style={{backgroundColor: couponColor(coupon.couponSum)}}>{item.inPortfolio ? <div><b>{coupon.couponSum}</b></div> : <div>{coupon.couponSum}</div>}</div>                             
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