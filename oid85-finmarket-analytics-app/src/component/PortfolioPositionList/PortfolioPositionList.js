import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioPositionList, 
    fetchCurrentPortfolioPosition, 
    showEditPortfolioPositionModal,
    showEditPortfolioTotalSumModal,
    fetchPortfolioTotalSum
} from '../../redux/actions/portfolioActions'
import {EditPortfolioPositionModal} from './EditPortfolioPositionModal'
import {EditPortfolioTotalSumModal} from './EditPortfolioTotalSumModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { 
    rowColor, sizeColor
} from './colorHelper'

export const PortfolioPositionList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioPositionListData = useSelector(state => state.portfolio.portfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaPortfolioPositionList())
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
            !portfolioPositionListData.result || loading
            ? <Loader/>
            :
            <div className='portfolio-position-container'>
                <div className='horizontal-container'>
                    <div className='portfolio-position-total-sum'>{`Сумма портфеля: ${formatNumber(portfolioPositionListData.result.totalSum)} руб.`}</div>
                    <button className='btn btn-outline-dark'
                                        onClick={() => {
                                            dispatch(fetchPortfolioTotalSum(portfolioPositionListData.result.totalSum))
                                            dispatch(showEditPortfolioTotalSumModal())
                                            }}>...</button>
                </div>
                <div className='horizontal-container'>
                    <div className='portfolio-position-number-header-cell portfolio-position-border-style'>Номер</div>
                    <div className='portfolio-position-ticker-header-cell portfolio-position-border-style'>Тикер</div>
                    <div className='portfolio-position-name-header-cell portfolio-position-border-style'>Наименование</div>
                    <div className='portfolio-position-trend-coefficient-header-cell portfolio-position-border-style'>Тренд. коэф.</div>
                    <div className='portfolio-position-dividend-coefficient-header-cell portfolio-position-border-style'>Дивиденд. коэф.</div>
                    <div className='portfolio-position-manual-coefficient-header-cell portfolio-position-border-style'>Ручной коэф.</div>
                    <div className='portfolio-position-result-coefficient-header-cell portfolio-position-border-style'>Итоговый коэф.</div>
                    <div className='portfolio-position-percentage-header-cell portfolio-position-border-style'>Доля, %</div>
                    <div className='portfolio-position-size-header-cell portfolio-position-border-style'>Кол-во, шт</div>
                    <div className='portfolio-position-life-size-header-cell portfolio-position-border-style'>Кол-во (реал.), шт</div>
                    <div className='portfolio-position-cost-header-cell portfolio-position-border-style'>Стоимость, руб</div>                    
                    <div className='portfolio-position-price-header-cell portfolio-position-border-style'>Текущая цена, руб</div>
                    <div className='portfolio-position-message-header-cell portfolio-position-border-style'>Комментарий</div>
                    <div className='portfolio-position-edit-button-header-cell portfolio-position-border-style'></div>
                </div>
                {
                    portfolioPositionListData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='portfolio-position-number-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.number}</div>
                            <div className='portfolio-position-ticker-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.ticker}</div>
                            <div className='portfolio-position-name-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.name}</div>  
                            <div className='portfolio-position-trend-coefficient-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.trendCoefficient}</div>
                            <div className='portfolio-position-dividend-coefficient-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.dividendCoefficient}</div>
                            <div className='portfolio-position-manual-coefficient-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.manualCoefficient}</div>
                            <div className='portfolio-position-result-coefficient-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.resultCoefficient}</div>
                            <div className='portfolio-position-percentage-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{`${portfolioPosition.percent} %`}</div>
                            <div className='portfolio-position-size-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{`${formatNumber(portfolioPosition.size)} шт.`}</div>
                            <div className='portfolio-position-life-size-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{GetLifeSizeValue(portfolioPosition.size, portfolioPosition.lifeSize)}</div>
                            <div className='portfolio-position-cost-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{formatNumber(portfolioPosition.cost)}</div>
                            <div className='portfolio-position-price-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{formatNumber(portfolioPosition.price)}</div>
                            <div className='portfolio-position-message-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>{portfolioPosition.message}</div>
                            <div className='portfolio-position-edit-button-cell portfolio-position-border-style' style={{backgroundColor: rowColor(portfolioPosition.message)}}>
                                <button className='btn btn-outline-link edit-button'
                                        onClick={() => {
                                            dispatch(fetchCurrentPortfolioPosition({...portfolioPosition}))
                                            dispatch(showEditPortfolioPositionModal())
                                            }}><div className='edit-button-text'>...</div></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        <EditPortfolioPositionModal />
        <EditPortfolioTotalSumModal />
        </React.Fragment>                
    )
}