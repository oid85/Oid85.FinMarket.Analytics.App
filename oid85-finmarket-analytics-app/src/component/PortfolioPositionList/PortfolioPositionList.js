import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioPositionList, 
    fetchCurrentPortfolioPosition, 
    showEditPortfolioPositionModal
} from '../../redux/actions/portfolioActions'
import {EditPortfolioPositionModal} from './EditPortfolioPositionModal'

import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PortfolioPositionList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioPositionListData = useSelector(state => state.portfolio.portfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaPortfolioPositionList())
    }, [])

    return (
        <React.Fragment>
        {
            !portfolioPositionListData.result || loading
            ? <Loader/>
            :
            <div className='portfolio-position-container border-style'>
                <div className='horizontal-container'>
                    <div className='portfolio-position-number-header-cell border-style'>Номер</div>
                    <div className='portfolio-position-ticker-header-cell border-style'>Тикер</div>
                    <div className='portfolio-position-name-header-cell border-style'>Наименование</div>
                    <div className='portfolio-position-dividend-coefficient-header-cell border-style'>Дивиденд. коэф.</div>
                    <div className='portfolio-position-manual-coefficient-header-cell border-style'>Ручной коэф.</div>
                    <div className='portfolio-position-result-coefficient-header-cell border-style'>Итоговый коэф.</div>
                    <div className='portfolio-position-percentage-header-cell border-style'>Доля, %</div>
                    <div className='portfolio-position-size-header-cell border-style'>Кол-во, шт</div>
                    <div className='portfolio-position-cost-header-cell border-style'>Стоимость, руб</div>                    
                    <div className='portfolio-position-price-header-cell border-style'>Текущая цена, руб</div>
                    <div className='portfolio-position-message-header-cell border-style'>Комментарий</div>
                    <div className='portfolio-position-edit-button-header-cell border-style'></div>
                </div>
                {
                    portfolioPositionListData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='portfolio-position-number-cell border-style'>{portfolioPosition.number}</div>
                            <div className='portfolio-position-ticker-cell border-style'>{portfolioPosition.ticker}</div>
                            <div className='portfolio-position-name-cell border-style'>{portfolioPosition.name}</div>  
                            <div className='portfolio-position-dividend-coefficient-cell border-style'>{portfolioPosition.dividendCoefficient}</div>
                            <div className='portfolio-position-manual-coefficient-cell border-style'>{portfolioPosition.manualCoefficient}</div>
                            <div className='portfolio-position-result-coefficient-cell border-style'>{portfolioPosition.resultCoefficient}</div>
                            <div className='portfolio-position-percentage-cell border-style'>{portfolioPosition.percent}</div>
                            <div className='portfolio-position-size-cell border-style'>{portfolioPosition.size}</div>
                            <div className='portfolio-position-cost-cell border-style'>{portfolioPosition.cost}</div>
                            <div className='portfolio-position-price-cell border-style'>{portfolioPosition.price}</div>
                            <div className='portfolio-position-message-cell border-style'>{portfolioPosition.message}</div>
                            <div className='portfolio-position-edit-button-cell border-style'>
                                <button className='btn btn-outline-dark edit-button'
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
        </React.Fragment>                
    )
}