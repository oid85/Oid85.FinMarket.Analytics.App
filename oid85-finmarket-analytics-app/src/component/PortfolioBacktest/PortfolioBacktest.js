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
                                dispatch(fetchPortfolioName('Top5Moex'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-5 IMOEX</div></button>
                    </div>
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Top10Moex'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-10 IMOEX</div></button>
                    </div>                                                                       
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Top5FundamentalScore'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-5 фунд. рейтинга</div></button>
                    </div>   
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Top10FundamentalScore'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-10 фунд. рейтинга</div></button>
                    </div>        
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Top15FundamentalScore'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-15 фунд. рейтинга</div></button>
                    </div>   
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Top10DividendFundamentalScore'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>ТОП-10 дивидендных фунд. рейтинга</div></button>
                    </div>                                                                        
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Sber'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Сбер</div></button>
                    </div> 
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('SberGold'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Сбер + Золото</div></button>
                    </div>                     
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('GasOil'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Нефтегаз</div></button>
                    </div>    
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('GasOilGold'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Нефтегаз + Золото</div></button>
                    </div>                                       
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('Rosseti'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>Россети</div></button>
                    </div>     
                    <div className='portfolio-backtest-name-button-container'>
                        <button className='btn btn-outline-dark portfolio-backtest-name-button'
                            onClick={() => {
                                dispatch(fetchPortfolioName('OneFromEachSector'))
                                dispatch(sagaPortfolioBacktest())
                            }}><div className='portfolio-backtest-name-button-text'>По одной акции с каждого сектора</div></button>
                    </div>                                                                                                                
                </div>                 
                <div className='portfolio-backtest-container border-style'>
                    <PortfolioBacktestDiagram series={portfolioBacktestData.result.series}/>
                </div> 
                <div className='portfolio-backtest-container'>
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