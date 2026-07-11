import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPortfolioName, sagaPortfolioBacktest } from '../../redux/actions/portfolioActions'
import Loader from '../Loader/Loader'
import { PortfolioBacktestDiagram } from './PortfolioBacktestDiagram'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const PortfolioBacktest = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioBacktestData = useSelector(state => state.portfolio.portfolioBacktestData)

    useEffect(() => {
        dispatch(sagaPortfolioBacktest())
    }, [])

console.log(portfolioBacktestData.result)

    return (
        <React.Fragment>
        {
            !portfolioBacktestData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>
                <div className='portfolio-backtest-container border-style'>
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('LifePortfolio'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Мой портфель</div></button>
                    </div>      
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('HighDividend'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП дивидендных фунд. рейт.</div></button>
                    </div>    
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('LowDebt'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП с низким долгом фунд. рейт.</div></button>
                    </div>            
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('GrowingNetProfit'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП с растущей ЧП фунд. рейт.</div></button>
                    </div>                                                                                                                                                                                                                 
                </div>                 
                <div className='portfolio-backtest-container border-style'>
                    <PortfolioBacktestDiagram series={portfolioBacktestData.result.series}/>
                </div> 
                <div className='portfolio-backtest-container portfolio-backtest-result'>
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-container'>Доходность годовых средн.:</div> 
                        <div className='portfolio-backtest-container'>{`${portfolioBacktestData.result.yield} %`}</div> 
                    </div> 
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-container'>Макс. просадка:</div> 
                        <div className='portfolio-backtest-container'>{`${portfolioBacktestData.result.maxDrawdown} %`}</div> 
                    </div>     
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-container'>Текущ. просадка:</div> 
                        <div className='portfolio-backtest-container'>{`${portfolioBacktestData.result.currentDrawdown} %`}</div> 
                    </div>                       
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-container'>Получено дивидендов:</div> 
                        <div className='portfolio-backtest-container'>{`${formatNumber(portfolioBacktestData.result.dividendSum)} руб.`}</div> 
                    </div> 
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-container'>Внесено:</div> 
                        <div className='portfolio-backtest-container'>{`${formatNumber(portfolioBacktestData.result.moneySum)} руб.`}</div> 
                    </div>                                                        
                </div>                
            </div>         
        }
        </React.Fragment>                
    )
}