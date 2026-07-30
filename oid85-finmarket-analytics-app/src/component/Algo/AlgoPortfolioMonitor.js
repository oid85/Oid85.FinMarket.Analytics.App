import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioList,
    sagaPortfolioMonitor,
    fetchCurrentPortfolio
} from '../../redux/actions/algoActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import {CalendarMin} from '../Calendar/CalendarMin'
import { Ticker } from '../Ticker/Ticker'
import { CONSTANTS } from '../../constants'
import { AlgoBacktestDiagram } from './AlgoBacktestDiagram'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const AlgoPortfolioMonitor = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading) 
    const portfolioListData = useSelector(state => state.algo.portfolioListData) 
    const portfolioMonitorData = useSelector(state => state.algo.portfolioMonitorData) 
    const currentPortfolio = useSelector(state => state.algo.currentPortfolio)    

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
            <div className='algo-container'>
                <div className='horizontal-container'>
                {
                    portfolioListData.result.items.map((portfolioName) => (
                        <div className='algo-portfolio-name-button-container'>
                            <button className='btn btn-outline-dark algo-portfolio-name-button'
                                onClick={() => {
                                    dispatch(fetchCurrentPortfolio({name: portfolioName.name, description: portfolioName.description})) 
                                    dispatch(sagaPortfolioMonitor())                               
                                }}><div className='algo-portfolio-name-button-text'>{portfolioName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='algo-portfolio-description'>{currentPortfolio.description}</div>
                <div className='algo-backtest-container'>
                    <div className='horizontal-container'>
                        <div>
                            <AlgoBacktestDiagram series={portfolioMonitorData.result.series}/>
                        </div>
                        <div>
                            <div className='algo-backtest-container'>{`Доходность годовых: ${portfolioMonitorData.result.yield} %`}</div>
                            <div className='algo-backtest-container'>{`Макс. просадка: ${portfolioMonitorData.result.maxDrawdown} %`}</div>
                            <div className='algo-backtest-container'>{`Текущ. просадка: ${portfolioMonitorData.result.currentDrawdown} %`}</div>
                        </div>
                    </div>
                </div>
                <div className='horizontal-container'>
                    <div>
                        {
                            portfolioMonitorData.result.positionWeightData.map((positionWeightDataItem) => (
                                <div className='horizontal-container'>                   
                                    <div className='algo-ticker algo-cell-border-style'>{positionWeightDataItem.ticker}</div>
                                    <div className='horizontal-container'>
                                    {
                                        positionWeightDataItem.positionWeightItems.map((positionWeightItem) => (
                                            <div 
                                                title={`${positionWeightItem.date} ${positionWeightDataItem.ticker} ${positionWeightItem.weight}`}
                                                className='algo-cell algo-cell-border-style' 
                                                style={{backgroundColor: positionWeightItem.colorFill}}></div>
                                        ))
                                    }                      
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='algo-separator'></div>
                    <div>
                        {
                            portfolioMonitorData.result.currentPositions.map((currentPosition) => (
                                <div className='horizontal-container'>                   
                                    <div title='Тикер' className='algo-ticker algo-cell-border-style'>{currentPosition.ticker}</div>
                                    <div title='Вес, юнит' className='algo-weight algo-cell-border-style'>{currentPosition.weight}</div>
                                    <div title='Размер позиции, шт.' className='algo-size algo-cell-border-style'>{`${formatNumber(currentPosition.size)} шт.`}</div>
                                    <div title='Стоимость позиции, руб.' className='algo-cost algo-cell-border-style'>{`${formatNumber(currentPosition.cost)} руб.`}</div>
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