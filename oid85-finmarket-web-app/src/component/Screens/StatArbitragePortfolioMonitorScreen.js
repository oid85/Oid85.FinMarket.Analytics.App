import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { StatArbitragePortfolioMonitor } from '../StatArbitrage/StatArbitragePortfolioMonitor'
import './styles.css'

export const StatArbitragePortfolioMonitorScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <StatArbitragePortfolioMonitor />
                </div>
            </div>            
        </React.Fragment>
    )     
}
