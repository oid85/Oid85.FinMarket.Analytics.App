import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPortfolioName, sagaPortfolioBacktest } from '../../redux/actions/portfolioActions'
import Loader from '../Loader/Loader'
import { Ticker } from '../Ticker/Ticker'
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
            <div>
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
                        <div className='portfolio-backtest-name-button-container'>
                            <button className='btn btn-outline-dark portfolio-backtest-name-button'
                                onClick={() => {
                                    dispatch(fetchPortfolioName('Bond'))
                                    dispatch(sagaPortfolioBacktest())
                                }}><div className='portfolio-backtest-name-button-text'>Форвард тест облигаций</div></button>
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
                        {
                            portfolioBacktestData.result.maxDrawdown
                            ?
                            <div className='horizontal-container'>
                                <div className='portfolio-backtest-container'>Макс. просадка:</div> 
                                <div className='portfolio-backtest-container'>{`${portfolioBacktestData.result.maxDrawdown} %`}</div> 
                            </div> 
                            : <div></div>
                        }   
                        {
                            portfolioBacktestData.result.currentDrawdown
                            ?
                            <div className='horizontal-container'>
                                <div className='portfolio-backtest-container'>Текущ. просадка:</div> 
                                <div className='portfolio-backtest-container'>{`${portfolioBacktestData.result.currentDrawdown} %`}</div> 
                            </div>
                            : <div></div>
                        }                    
                        {
                            portfolioBacktestData.result.dividendSum
                            ?
                            <div className='horizontal-container'>
                                <div className='portfolio-backtest-container'>Получено дивидендов:</div> 
                                <div className='portfolio-backtest-container'>{`${formatNumber(portfolioBacktestData.result.dividendSum)} руб.`}</div> 
                            </div> 
                            : <div></div>
                        }
                        {
                            portfolioBacktestData.result.couponSum
                            ?
                            <div className='horizontal-container'>
                                <div className='portfolio-backtest-container'>Получено купонов:</div> 
                                <div className='portfolio-backtest-container'>{`${formatNumber(portfolioBacktestData.result.couponSum)} руб.`}</div> 
                            </div> 
                            : <div></div>
                        }                   
                        <div className='horizontal-container'>
                            <div className='portfolio-backtest-container'>Внесено:</div> 
                            <div className='portfolio-backtest-container'>{`${formatNumber(portfolioBacktestData.result.moneySum)} руб.`}</div> 
                        </div>                                                        
                    </div>                
                </div>
                <div>
                    <div className='horizontal-container'>
                        <div className='portfolio-backtest-number-header-cell border-style'>№</div>
                        <div className='border-style' style={{width: 24}}></div>
                        <div className='portfolio-backtest-ticker-header-cell border-style'>Тикер</div>
                        <div className='portfolio-backtest-name-header-cell border-style'>Наименование</div>
                        <div className='portfolio-backtest-sector-header-cell border-style'>Сектор (доля, %)</div>
                        <div className='portfolio-backtest-current-dividend-yield-header-cell border-style'>ДД, %</div>
                        <div className='portfolio-backtest-percentage-header-cell border-style'>Доля, %</div>
                    </div>
                    {
                    portfolioBacktestData.result.portfolioPositions.map((portfolioPosition) => (
                        <div className='horizontal-container'>
                            <div className='portfolio-backtest-number-cell border-style'>{portfolioPosition.number}</div>
                            <div className='border-style'><Ticker value={portfolioPosition.ticker} width={22} height={22} /></div>
                            <div className='portfolio-backtest-ticker-cell border-style'>{portfolioPosition.ticker}</div>
                            <div className='portfolio-backtest-name-cell border-style'>{portfolioPosition.name}</div>
                            <div className='portfolio-backtest-sector-cell border-style'>{portfolioPosition.sector}</div>
                            <div className='portfolio-backtest-current-dividend-yield-cell border-style'>{portfolioPosition.currentDividendYield ? `${portfolioPosition.currentDividendYield} %` : ''}</div>
                            <div className='portfolio-backtest-percentage-cell border-style'>{`${portfolioPosition.percent} %`}</div>
                        </div>
                    ))
                }
                </div>
            </div>

        }
        </React.Fragment>                
    )
}