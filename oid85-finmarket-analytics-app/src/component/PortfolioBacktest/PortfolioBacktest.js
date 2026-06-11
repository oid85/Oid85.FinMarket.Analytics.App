import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaPortfolioBacktest } from '../../redux/actions/portfolioActions'
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