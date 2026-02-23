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
                    <div className='portfolio-position-ticker-header-cell border-style'>Тикер</div>
                    <div className='portfolio-position-name-header-cell border-style'>Наименование</div>
                    <div className='portfolio-position-dividend-coefficient-header-cell border-style'>Дивидендный коэф.</div>
                    <div className='portfolio-position-percentage-header-cell border-style'>Доля, %</div>
                    <div className='portfolio-position-price-header-cell border-style'>Текущая цена, руб</div>
                    <div className='portfolio-position-cost-header-cell border-style'>Стоимость, руб</div>
                    <div className='portfolio-position-edit-button-header-cell border-style'></div>
                </div>
                {
                    portfolioPositionListData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='portfolio-position-ticker-cell'>{portfolioPosition.ticker}</div>
                            <div className='portfolio-position-name-cell'>{portfolioPosition.name}</div>  
                            <div className='portfolio-position-dividend-coefficient-cell'>{portfolioPosition.dividendCoefficient}</div>
                            <div className='portfolio-position-percentage-celle'>{portfolioPosition.percentage}</div>
                            <div className='portfolio-position-price-celle'>{portfolioPosition.price}</div>
                            <div className='portfolio-position-cost-cell'>{portfolioPosition.cost}</div>                                                                               
                            <div className='portfolio-position-edit-button-cell'>

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