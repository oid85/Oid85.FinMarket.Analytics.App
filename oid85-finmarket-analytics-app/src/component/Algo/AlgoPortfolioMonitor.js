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
import { Ticker } from '../Ticker/Ticker'
import { CONSTANTS } from '../../constants'

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
                                }}><div className='algo-portfolio-name-button-text'>{portfolioName.name}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='algo-portfolio-description'>{currentPortfolio.description}</div>
            </div>
        }
        </React.Fragment>                
    )
}