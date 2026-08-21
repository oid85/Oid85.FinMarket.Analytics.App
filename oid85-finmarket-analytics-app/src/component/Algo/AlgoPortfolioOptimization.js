import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaPortfolioList,
    sagaPortfolioStrategyList,
    fetchCurrentPortfolio,
    fetchCurrentPortfolioStrategy
} from '../../redux/actions/algoActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const AlgoPortfolioOptimization = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading) 
    const portfolioListData = useSelector(state => state.algo.portfolioListData) 
    const portfolioStrategyListData = useSelector(state => state.algo.portfolioStrategyListData) 
    const currentPortfolio = useSelector(state => state.algo.currentPortfolio)    
    const currentPortfolioStrategy = useSelector(state => state.algo.currentPortfolioStrategy)    

    useEffect(() => {
        dispatch(sagaPortfolioList())
        dispatch(sagaPortfolioStrategyList())
    }, [])

    return (
        <React.Fragment>
        {
            !portfolioListData.result || !portfolioStrategyListData.result || loading
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
                                }}><div className='algo-strategy-name-button-text'>{portfolioStrategyName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>  
                <div className='algo-portfolio-description'>{currentPortfolio.description}</div> 
                <div className='algo-strategy-description'>{currentPortfolioStrategy.name}</div>                                                          
            </div>
        }
        </React.Fragment>                
    )
}