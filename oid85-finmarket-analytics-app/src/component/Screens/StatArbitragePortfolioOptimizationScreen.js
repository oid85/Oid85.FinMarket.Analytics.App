import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import './styles.css'

export const StatArbitragePortfolioOptimizationScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    StatArbitragePortfolioOptimizationScreen
                </div>
            </div>            
        </React.Fragment>
    )     
}
