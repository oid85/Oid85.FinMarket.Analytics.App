import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaPortfolioRebalance } from '../../redux/actions/portfolioActions'
import Loader from '../Loader/Loader'
import { PortfolioRebalanceDiagram } from './PortfolioRebalanceDiagram'
import './styles.css'

export const PortfolioRebalance = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const portfolioRebalanceData = useSelector(state => state.portfolio.portfolioRebalanceData)

    useEffect(() => {
        dispatch(sagaPortfolioRebalance())
    }, [])

    return (
        <React.Fragment>
        {
            !portfolioRebalanceData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>
                <div className='portfolio-rebalance-container border-style'>
                    <PortfolioRebalanceDiagram series={portfolioRebalanceData.result.series}/>
                </div> 
                <div className='portfolio-rebalance-container'>
                    <div>
                        {`Доходность годовых средн.: ${portfolioRebalanceData.result.yield} %`}                        
                    </div> 
                </div>                
            </div>         
        }
        </React.Fragment>                
    )
}