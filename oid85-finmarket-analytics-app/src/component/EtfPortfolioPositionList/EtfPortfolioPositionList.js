import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaEtfPortfolioPositionList, 
    fetchCurrentEtfPortfolioPosition, 
    showEditEtfPortfolioPositionModal
} from '../../redux/actions/etfPortfolioActions'
import {EditEtfPortfolioPositionModal} from './EditEtfPortfolioPositionModal'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { CONSTANTS } from '../../constants'

export const EtfPortfolioPositionList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioPositionListData = useSelector(state => state.etfPortfolio.etfPortfolioPositionListData)    

    useEffect(() => {
        dispatch(sagaEtfPortfolioPositionList())
    }, [])

    const formatNumber = (num) => {
        return new Intl.NumberFormat('ru-RU').format(num);
      };

    const sizeColor = (size, lifeSize) => {
        if (!size) { return CONSTANTS.COLOR_WHITE }
        if (!lifeSize) { return CONSTANTS.COLOR_WHITE }
        
        let delta = Math.abs(size - lifeSize)
        let deltaPercent = (delta / size * 100.0).toFixed(2)
        let limit = 10.0;    

        if (deltaPercent <= limit) { return CONSTANTS.COLOR_LIGHTGREEN }
        if (deltaPercent > limit) { return CONSTANTS.COLOR_LIGHTYELLOW }
    
        return CONSTANTS.COLOR_WHITE
    }

    const GetLifeSizeValue = (lifeSize) => {
        return `${formatNumber(lifeSize)} шт.`
    }

    const GetDeltaValue = (delta) => {
        if (delta > 0.0) { return `продать ${formatNumber(Math.abs(delta))} шт.` }
        if (delta < 0.0) { return `купить ${formatNumber(Math.abs(delta))} шт.` }
    
        return `${formatNumber(delta)} шт.`
    }

    const GetDeltaPercentValue = (deltaPercent) => {
        if (deltaPercent > 0.0) { return `(+) больше на ${formatNumber(Math.abs(deltaPercent))} %` }
        if (deltaPercent < 0.0) { return `(-) меньше на ${formatNumber(Math.abs(deltaPercent))} %` }
    
        return `${formatNumber(deltaPercent)} %`
    }    

    const GetDeltaPercentTitle = (deltaPercent) => {
        if (deltaPercent > 0.0) { return `Позиция в портфеле больше расчетной на ${formatNumber(Math.abs(deltaPercent))} %` }
        if (deltaPercent < 0.0) { return `Позиция в портфеле меньше расчетной на ${formatNumber(Math.abs(deltaPercent))} %` }
    
        return ''
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
                </div>
                <div className='horizontal-container'>
                    <div className='portfolio-position-number-header-cell portfolio-position-border-style'>Номер</div>
                    <div className='portfolio-position-ticker-header-cell portfolio-position-border-style'>Тикер</div>
                    <div className='portfolio-position-name-header-cell portfolio-position-border-style'>Наименование</div>                                                            
                    <div className='portfolio-position-manual-coefficient-header-cell portfolio-position-border-style'>Ручн. коэф.</div>
                    <div className='portfolio-position-result-coefficient-header-cell portfolio-position-border-style'>Рез. коэф.</div>
                    <div className='portfolio-position-percentage-header-cell portfolio-position-border-style'>Доля (расч.), %</div>
                    <div className='portfolio-position-size-header-cell portfolio-position-border-style'>Кол-во (расч.), шт</div>
                    <div className='portfolio-position-size-header-cell portfolio-position-border-style'>Кол-во (реал.), шт</div>
                    <div className='portfolio-position-delta-size-header-cell portfolio-position-border-style'>Изм., шт</div>
                    <div className='portfolio-position-delta-size-header-cell portfolio-position-border-style'>Изм., %</div>
                    <div className='portfolio-position-cost-header-cell portfolio-position-border-style'>Стоимость (расч.), руб</div>                                        
                </div>
                {
                    portfolioPositionListData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='portfolio-position-number-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{portfolioPosition.number}</div>
                            <div className='portfolio-position-ticker-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{portfolioPosition.ticker}</div>
                            <div className='portfolio-position-name-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{portfolioPosition.name}</div>                                                                                      
                            <div 
                                className='portfolio-position-manual-coefficient-cell portfolio-position-border-style' 
                                style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}
                                onDoubleClick={() => {
                                    dispatch(fetchCurrentEtfPortfolioPosition({...portfolioPosition}))
                                    dispatch(showEditEtfPortfolioPositionModal())
                                }}                                
                                >{portfolioPosition.manualCoefficient}</div>
                            <div className='portfolio-position-result-coefficient-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{portfolioPosition.resultCoefficient}</div>
                            <div className='portfolio-position-percentage-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{`${portfolioPosition.percent} %`}</div>
                            <div className='portfolio-position-size-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{`${formatNumber(portfolioPosition.size)} шт.`}</div>
                            <div 
                                className='portfolio-position-size-cell portfolio-position-border-style' 
                                style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}
                                onDoubleClick={() => {
                                    dispatch(fetchCurrentEtfPortfolioPosition({...portfolioPosition}))
                                    dispatch(showEditEtfPortfolioPositionModal())
                                }}                                   
                                >{GetLifeSizeValue(portfolioPosition.lifeSize)}</div>
                            <div className='portfolio-position-delta-size-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{GetDeltaValue(portfolioPosition.delta)}</div>
                            <div title={GetDeltaPercentTitle(portfolioPosition.deltaPercent)} className='portfolio-position-delta-size-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{GetDeltaPercentValue(portfolioPosition.deltaPercent)}</div>
                            <div className='portfolio-position-cost-cell portfolio-position-border-style' style={{backgroundColor: sizeColor(portfolioPosition.size, portfolioPosition.lifeSize)}}>{formatNumber(portfolioPosition.cost)}</div>                            
                        </div>
                    ))
                }
            </div>
        }
        <EditEtfPortfolioPositionModal />
        </React.Fragment>                
    )
}