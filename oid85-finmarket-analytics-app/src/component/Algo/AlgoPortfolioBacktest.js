import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioList,
    sagaPortfolioStrategyList,
    sagaPortfolioBacktestResultList,
    fetchCurrentPortfolio,
    fetchCurrentPortfolioStrategy,
    fetchCurrentPortfolioBacktestResult
} from '../../redux/actions/algoActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { AlgoBacktestEquityDiagram } from './AlgoBacktestEquityDiagram'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const AlgoPortfolioBacktest = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading) 
    const portfolioListData = useSelector(state => state.algo.portfolioListData) 
    const portfolioStrategyListData = useSelector(state => state.algo.portfolioStrategyListData) 
    const portfolioBacktestResultListData = useSelector(state => state.algo.portfolioBacktestResultListData)    

    const currentPortfolio = useSelector(state => state.algo.currentPortfolio)    
    const currentPortfolioStrategy = useSelector(state => state.algo.currentPortfolioStrategy) 
    const currentPortfolioBacktestResult = useSelector(state => state.algo.currentPortfolioBacktestResult)    

    useEffect(() => {
        dispatch(sagaPortfolioList())
        dispatch(sagaPortfolioStrategyList())
        dispatch(sagaPortfolioBacktestResultList())
    }, [])

    return (
        <React.Fragment>
        {
            !portfolioListData.result || 
            !portfolioStrategyListData.result || 
            !portfolioBacktestResultListData.result || 
            loading
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
                                    dispatch(sagaPortfolioStrategyList())     
                                    dispatch(fetchCurrentPortfolioStrategy({name: portfolioStrategyListData.result.items[0].name}))                     
                                }}><div className='algo-portfolio-name-button-text'>{portfolioName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>                
                <div className='horizontal-container'>
                {
                    portfolioStrategyListData.result.items.map((portfolioStrategyName) => (
                        <div className='algo-strategy-name-button-container'>
                            <button className='btn btn-outline-link algo-strategy-name-button'
                                onClick={() => {
                                    dispatch(fetchCurrentPortfolioStrategy({name: portfolioStrategyName.name}))  
                                    dispatch(sagaPortfolioBacktestResultList())                         
                                }}><div className='algo-strategy-name-button-text'>{portfolioStrategyName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='algo-portfolio-description'>{currentPortfolio.description}</div> 
                <div className='algo-strategy-description'>{currentPortfolioStrategy.name}</div>         
                <div className='horizontal-container'>
                    <div className='algo-backtest-result-table-container'>
                        <div className='horizontal-container'>
                            <div className='algo-border-style algo-backtest-result-ticker'>Тикер</div>
                            <div className='algo-border-style algo-backtest-result-strategy-params'>Параметры</div>
                            <div className='algo-border-style algo-backtest-result-profit-factor'>PF</div>
                            <div className='algo-border-style algo-backtest-result-recovery-factor'>RF</div>
                            <div className='algo-border-style algo-backtest-result-average-net-profit-percent'>Avg. NP, %</div>
                            <div className='algo-border-style algo-backtest-result-annual-yield-return'>Дох. год., %</div>
                        </div>                        
                        {
                            portfolioBacktestResultListData.result.items.map((backtestResult) => (
                                <div className='horizontal-container'>
                                    <div 
                                        className='algo-border-style algo-backtest-result-ticker'
                                        onClick={() => {
                                            dispatch(fetchCurrentPortfolioBacktestResult({ticker: backtestResult.ticker, strategyParamsHash: backtestResult.strategyParamsHash})) 
                                        }}>{backtestResult.ticker}</div>
                                    <div className='algo-border-style algo-backtest-result-strategy-params'>{backtestResult.strategyParams}</div>
                                    <div className='algo-border-style algo-backtest-result-profit-factor' style={{backgroundColor: backtestResult.profitFactor.color}}>{backtestResult.profitFactor.value}</div>
                                    <div className='algo-border-style algo-backtest-result-recovery-factor' style={{backgroundColor: backtestResult.recoveryFactor.color}}>{backtestResult.recoveryFactor.value}</div>
                                    <div className='algo-border-style algo-backtest-result-average-net-profit-percent' style={{backgroundColor: backtestResult.averageNetProfitPercent.color}}>{backtestResult.averageNetProfitPercent.value}</div>
                                    <div className='algo-border-style algo-backtest-result-annual-yield-return' style={{backgroundColor: backtestResult.annualYieldReturn.color}}>{backtestResult.annualYieldReturn.value}</div>
                                </div>                        
                            ))                            
                        }
                    </div>     
                    <div className='algo-backtest-result-diagram-container'>
                        <div className='algo-backtest-result-diagram-price-container'>

                        </div>            
                        <div className='algo-backtest-result-diagram-equity-container'>
                            
                        </div>       
                        <div className='algo-backtest-result-diagram-drawdown-container'>

                        </div>                                                                                                                                                                                                                                                                                                               
                    </div>                                                                                                                                                                                                                                                                                   
                </div>                                                  
            </div>
        }
        </React.Fragment>                
    )
}