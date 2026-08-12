import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioList,
    sagaPortfolioMonitor,
    fetchCurrentPortfolio
} from '../../redux/actions/statArbitrageActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { StatArbitrageBacktestDiagram } from './StatArbitrageBacktestDiagram'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const StatArbitragePortfolioMonitor = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading) 
    const portfolioListData = useSelector(state => state.statArbitrage.portfolioListData) 
    const portfolioMonitorData = useSelector(state => state.statArbitrage.portfolioMonitorData) 
    const currentPortfolio = useSelector(state => state.statArbitrage.currentPortfolio)    

    useEffect(() => {
        dispatch(sagaPortfolioList())
        dispatch(sagaPortfolioMonitor())
    }, [])

    return (
        <React.Fragment>
        {
            !portfolioListData.result || !portfolioMonitorData.result || loading
            ? <Loader/>
            :
            <div className='stat-arbitrage-container'>
                <div className='horizontal-container'>
                {
                    portfolioListData.result.items.map((portfolioName) => (
                        <div className='stat-arbitrage-portfolio-name-button-container'>
                            <button className='btn btn-outline-dark stat-arbitrage-portfolio-name-button'
                                onClick={() => {
                                    dispatch(fetchCurrentPortfolio({name: portfolioName.name, description: portfolioName.description})) 
                                    dispatch(sagaPortfolioMonitor())                               
                                }}><div className='stat-arbitrage-portfolio-name-button-text'>{portfolioName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='stat-arbitrage-portfolio-description'>{currentPortfolio.description}</div>
                <div className='stat-arbitrage-backtest-container'>
                    <div className='horizontal-container'>
                        <div>
                            <StatArbitrageBacktestDiagram series={portfolioMonitorData.result.series}/>
                        </div>
                        <div>
                            <div className='stat-arbitrage-backtest-container'>{`Доходность годовых: ${portfolioMonitorData.result.yield} %`}</div>
                            <div className='stat-arbitrage-backtest-container'>{`Макс. просадка: ${portfolioMonitorData.result.maxDrawdown} %`}</div>
                            <div className='stat-arbitrage-backtest-container'>{`Текущ. просадка: ${portfolioMonitorData.result.currentDrawdown} %`}</div>
                        </div>
                    </div>
                </div>
                <div className='horizontal-container'>
                    <div>
                        {
                            portfolioMonitorData.result.positionWeightData.map((positionWeightDataItem) => (
                                <div className='horizontal-container'>                   
                                    <div className='stat-arbitrage-ticker stat-arbitrage-cell-border-style'>{positionWeightDataItem.ticker}</div>
                                    <div className='horizontal-container'>
                                    {
                                        positionWeightDataItem.positionWeightItems.map((positionWeightItem) => (
                                            <div 
                                                title={`${positionWeightItem.date} ${positionWeightDataItem.ticker} ${positionWeightItem.weight}`}
                                                className='stat-arbitrage-cell stat-arbitrage-cell-border-style' 
                                                style={{backgroundColor: positionWeightItem.colorFill}}></div>
                                        ))
                                    }                      
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='stat-arbitrage-separator'></div>
                    <div>
                        {
                            portfolioMonitorData.result.currentPositions.map((currentPosition) => (
                                <div className='horizontal-container'>                   
                                    <div title='Тикер' className='stat-arbitrage-ticker stat-arbitrage-cell-border-style'>{currentPosition.ticker}</div>
                                    <div title='Вес, юнит' className='stat-arbitrage-weight stat-arbitrage-cell-border-style'>{`${currentPosition.weight} юнит.`}</div>
                                    <div title='Размер позиции, шт.' className='stat-arbitrage-size stat-arbitrage-cell-border-style'>{`${formatNumber(currentPosition.size)} шт.`}</div>
                                    <div title='Стоимость позиции, руб.' className='stat-arbitrage-cost stat-arbitrage-cell-border-style'>{`${formatNumber(currentPosition.cost)} руб.`}</div>
                                </div>
                            ))
                        }
                    </div>                    
                </div>                             
            </div>
        }
        </React.Fragment>                
    )
}