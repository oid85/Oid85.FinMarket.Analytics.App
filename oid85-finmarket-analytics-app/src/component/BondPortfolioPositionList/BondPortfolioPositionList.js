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
                <div className='bond-portfolio-position-year-coupon-sum'>{`Сумма купонов за год: ${formatNumber(bondPortfolioPositionListData.result.yearCouponSum)} руб. (${formatNumber(bondPortfolioPositionListData.result.yearCouponPrc)} %)`}</div>
                <div className='bond-portfolio-position-month-coupon-sum'>{`Сумма купонов в месяц: ${formatNumber(bondPortfolioPositionListData.result.monthCouponSum)} руб.`}</div>                
                <div className='horizontal-container'>
                    <div className='bond-portfolio-position-number-header-cell bond-portfolio-position-border-style'>Номер</div>
                    <div className='bond-portfolio-position-ticker-header-cell bond-portfolio-position-border-style'>Тикер</div>
                    <div className='bond-portfolio-position-name-header-cell bond-portfolio-position-border-style'>Наименование</div>
                    <div className='bond-portfolio-position-manual-coefficient-header-cell bond-portfolio-position-border-style'>Ручной коэф.</div>
                    <div className='bond-portfolio-position-result-coefficient-header-cell bond-portfolio-position-border-style'>Итоговый коэф.</div>
                    <div className='bond-portfolio-position-percentage-header-cell bond-portfolio-position-border-style'>Доля, %</div>
                    <div className='bond-portfolio-position-year-coupon-header-cell bond-portfolio-position-border-style'>Купоны (год.)</div>
                    <div className='bond-portfolio-position-size-header-cell bond-portfolio-position-border-style'>Кол-во, шт</div>
                    <div className='bond-portfolio-position-cost-header-cell bond-portfolio-position-border-style'>Стоимость, руб</div>                    
                    <div className='bond-portfolio-position-price-header-cell bond-portfolio-position-border-style'>Текущая цена, руб</div>
                    <div className='bond-portfolio-position-message-header-cell bond-portfolio-position-border-style'>Комментарий</div>
                    <div className='bond-portfolio-position-edit-button-header-cell bond-portfolio-position-border-style'></div>
                </div>
                {
                    bondPortfolioPositionListData.result.portfolioPositions.map((bondPortfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='bond-portfolio-position-number-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.number}</div>
                            <div className='bond-portfolio-position-ticker-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.ticker}</div>
                            <div className='bond-portfolio-position-name-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.name}</div>  
                            <div className='bond-portfolio-position-manual-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.manualCoefficient}</div>
                            <div className='bond-portfolio-position-result-coefficient-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.resultCoefficient}</div>
                            <div className='bond-portfolio-position-percentage-cell bond-portfolio-position-border-style'>{`${bondPortfolioPosition.percent} %`}</div>
                            <div className='bond-portfolio-position-year-coupon-cell bond-portfolio-position-border-style'>{`${bondPortfolioPosition.yearCoupon}`}</div>
                            <div className='bond-portfolio-position-size-cell bond-portfolio-position-border-style'>{formatNumber(bondPortfolioPosition.size)}</div>
                            <div className='bond-portfolio-position-cost-cell bond-portfolio-position-border-style'>{formatNumber(bondPortfolioPosition.cost)}</div>
                            <div className='bond-portfolio-position-price-cell bond-portfolio-position-border-style'>{formatNumber(bondPortfolioPosition.price)}</div>
                            <div className='bond-portfolio-position-message-cell bond-portfolio-position-border-style'>{bondPortfolioPosition.message}</div>
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