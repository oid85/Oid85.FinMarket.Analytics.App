import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioList,
    sagaPortfolioRegressionTail,
    fetchCurrentPortfolio
} from '../../redux/actions/statArbitrageActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { Calendar } from '../Calendar/Calendar'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const StatArbitragePortfolioRegressionTail = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading) 
    const portfolioListData = useSelector(state => state.statArbitrage.portfolioListData) 
    const portfolioRegressionTailData = useSelector(state => state.statArbitrage.portfolioRegressionTailData) 
    const currentPortfolio = useSelector(state => state.statArbitrage.currentPortfolio)    

    useEffect(() => {
        dispatch(sagaPortfolioList())
        dispatch(sagaPortfolioRegressionTail())
    }, [])

console.log(portfolioRegressionTailData.result)

    return (
        <React.Fragment>
        {
            !portfolioListData.result || !portfolioRegressionTailData.result || loading
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
                                    dispatch(sagaPortfolioRegressionTail())                               
                                }}><div className='stat-arbitrage-portfolio-name-button-text'>{portfolioName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='stat-arbitrage-portfolio-description'>{currentPortfolio.description}</div> 
                <div>
                <div className='horizontal-container'>
                    <div className='stat-arbitrage-corner-cell'></div>
                    {
                        portfolioRegressionTailData.result.dates.map((date, index) => (
                            <div className='calendar-cell stat-arbitrage-border-style'>
                                <Calendar key = {index} date = {date} />
                            </div>
                        ))
                    }                   
                </div>   
                {
                    portfolioRegressionTailData.result.items.map((item, index) => (
                        <div className='horizontal-container'>
                            <div className='stat-arbitrage-ticker-cell stat-arbitrage-border-style'>{item.tickerFirst}</div>
                            <div className='stat-arbitrage-ticker-cell stat-arbitrage-border-style'>{item.tickerSecond}</div>
                            {
                                item.tails.map((tail, index) => (
                                    <div 
                                        className='stat-arbitrage-tail-cell stat-arbitrage-border-style'
                                        style={{backgroundColor: tail.colorFill}}>{tail.value}</div>
                                ))
                            }                              
                        </div>
                    ))
                }                  
                </div>                            
            </div>
        }
        </React.Fragment>                
    )
}