import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaBondPortfolioPositionList, 
    fetchCurrentBondPortfolioPosition, 
    showEditBondPortfolioPositionModal,
    showEditBondPortfolioTotalSumModal,
    fetchBondPortfolioTotalSum
} from '../../redux/actions/bondPortfolioActions'
import {EditBondPortfolioPositionModal} from './EditBondPortfolioPositionModal'
import {EditBondPortfolioTotalSumModal} from './EditBondPortfolioTotalSumModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { priceColor, sizeColor } from './colorHelper'

export const BondPortfolioPositionList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const bondPortfolioPositionListData = useSelector(state => state.bondPortfolio.bondPortfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaBondPortfolioPositionList())
    }, [])

    const formatNumber = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num);
      };

    const GetLifeSizeValue = (size, lifeSize) => {
        let delta = Math.abs(size - lifeSize)        
        if (size > lifeSize) { return `${formatNumber(lifeSize)} шт. (+${formatNumber(delta)})` }
        if (size < lifeSize) { return `${formatNumber(lifeSize)} шт. (-${formatNumber(delta)})` }
    
        return `${formatNumber(lifeSize)} шт.`
    }

    return (
        <React.Fragment>
        {
            !bondPortfolioPositionListData.result || loading
            ? <Loader/>
            :
            <div className='bond-portfolio-position-container'>
                <div className='horizontal-container'>
                    <div className='bond-portfolio-position-total-sum'>{`Сумма портфеля: ${formatNumber(bondPortfolioPositionListData.result.totalSum)} руб.`}</div>            
                        <button className='btn btn-outline-dark'
                                            onClick={() => {
                                                dispatch(fetchBondPortfolioTotalSum(bondPortfolioPositionListData.result.totalSum))
                                                dispatch(showEditBondPortfolioTotalSumModal())
                                                }}>...</button>
                </div>
                <div className='bond-portfolio-position-total-sum-long-ofz'>{`Сумма длинных ОФЗ: ${formatNumber(bondPortfolioPositionListData.result.totalSumLongOfz)} руб.`}</div>
                <div className='bond-portfolio-position-year-coupon-sum'>{`Сумма купонов за год: ${formatNumber(bondPortfolioPositionListData.result.yearCouponSum)} руб. (${formatNumber(bondPortfolioPositionListData.result.yearCouponPrc)} %)`}</div>
                <div className='bond-portfolio-position-month-coupon-sum'>{`Сумма купонов в месяц: ${formatNumber(bondPortfolioPositionListData.result.monthCouponSum)} руб.`}</div>                
                <div className='horizontal-container'>
                    <div className='bond-portfolio-position-number-header-cell bond-portfolio-position-border-style'>Номер</div>
                    <div className='bond-portfolio-position-ticker-header-cell bond-portfolio-position-border-style'>Тикер</div>
                    <div className='bond-portfolio-position-name-header-cell bond-portfolio-position-border-style'>Наименование</div>
                    <div className='bond-portfolio-position-coupon-coefficient-header-cell bond-portfolio-position-border-style'>Купон. коэф.</div>
                    <div className='bond-portfolio-position-time-coefficient-header-cell bond-portfolio-position-border-style'>Времен. коэф.</div>
                    <div className='bond-portfolio-position-manual-coefficient-header-cell bond-portfolio-position-border-style'>Ручной коэф.</div>
                    <div className='bond-portfolio-position-result-coefficient-header-cell bond-portfolio-position-border-style'>Итоговый коэф.</div>
                    <div className='bond-portfolio-position-percentage-header-cell bond-portfolio-position-border-style'>Доля, %</div>
                    <div className='bond-portfolio-position-year-coupon-header-cell bond-portfolio-position-border-style'>Купоны (год.)</div>
                    <div className='bond-portfolio-position-cost-header-cell bond-portfolio-position-border-style'>Стоимость, руб</div>                    
                    <div className='bond-portfolio-position-price-header-cell bond-portfolio-position-border-style'>Текущая цена, руб</div>
                    <div className='bond-portfolio-position-size-header-cell bond-portfolio-position-border-style'>Кол-во, шт</div>
                    <div className='bond-portfolio-position-life-size-header-cell bond-portfolio-position-border-style'>Кол-во (реал.), шт</div>                    
                    <div className='bond-portfolio-position-edit-button-header-cell bond-portfolio-position-border-style'></div>
                </div>
                {
                    bondPortfolioPositionListData.result.portfolioPositions.map((bondPortfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='bond-portfolio-position-number-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.number}</div>
                            <div className='bond-portfolio-position-ticker-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.ticker}</div>
                            <div className='bond-portfolio-position-name-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.name}</div>  
                            <div className='bond-portfolio-position-coupon-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.couponCoefficient}</div>
                            <div className='bond-portfolio-position-time-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.timeCoefficient}</div>
                            <div className='bond-portfolio-position-manual-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.manualCoefficient}</div>
                            <div className='bond-portfolio-position-result-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.resultCoefficient}</div>
                            <div className='bond-portfolio-position-percentage-cell bond-portfolio-position-border-style'>{`${bondPortfolioPosition.percent} %`}</div>
                            <div className='bond-portfolio-position-year-coupon-cell bond-portfolio-position-border-style'>{`${formatNumber(bondPortfolioPosition.yearCoupon)} р.`}</div>
                            <div className='bond-portfolio-position-cost-cell bond-portfolio-position-border-style'>{`${formatNumber(bondPortfolioPosition.cost)} р.`}</div>
                            <div className='bond-portfolio-position-price-cell bond-portfolio-position-border-style' style={{backgroundColor: priceColor(bondPortfolioPosition.price)}}>{`${formatNumber(bondPortfolioPosition.price)} р.`}</div>
                            <div className='bond-portfolio-position-size-cell bond-portfolio-position-border-style' style={{backgroundColor: sizeColor(bondPortfolioPosition.size, bondPortfolioPosition.lifeSize)}}>{`${formatNumber(bondPortfolioPosition.size)} шт.`}</div>
                            <div className='bond-portfolio-position-life-size-cell bond-portfolio-position-border-style' style={{backgroundColor: sizeColor(bondPortfolioPosition.size, bondPortfolioPosition.lifeSize)}}>{GetLifeSizeValue(bondPortfolioPosition.size, bondPortfolioPosition.lifeSize)}</div>
                            <div className='bond-portfolio-position-edit-button-cell bond-portfolio-position-border-style'>
                                <button className='btn btn-outline-link edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentBondPortfolioPosition({...bondPortfolioPosition}))
                                            dispatch(showEditBondPortfolioPositionModal())
                                            }}><div className='edit-button-text'>...</div></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        <EditBondPortfolioPositionModal />
        <EditBondPortfolioTotalSumModal />
        </React.Fragment>                
    )
}