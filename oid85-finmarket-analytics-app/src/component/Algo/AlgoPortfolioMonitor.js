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
                <div className='horizontal-container'>
                <div className='algo-corner-cell'></div>
                    {
                        portfolioMonitorData.result.dates.map((date, index) => (
                            <div className='algo-calendar-cell algo-border-style'>
                                <CalendarMin key = {index} date = {date} />
                            </div>
                        ))
                    }
                </div>                 
                <div>
                    {
                        portfolioMonitorData.result.positionLists.map((positionList) => (
                            <div className='horizontal-container'>                   
                                <div className='algo-ticker algo-border-style'>{positionList.ticker}</div>
                                <div className='horizontal-container'>
                                {
                                    positionList.positionListItems.map((position, index) => (
                                        <div 
                                            title={position.date}
                                            className='algo-cell algo-border-style' 
                                            style={{backgroundColor: position.colorFill}}>{position.units}</div>
                                    ))
                                }                      
                                </div>
                            </div>
                        ))
                    }
                </div>             
            </div>
        }
        </React.Fragment>                
    )
}