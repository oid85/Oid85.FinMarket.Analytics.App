import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { AlgoPortfolioMonitor } from '../Algo/AlgoPortfolioMonitor'
import './styles.css'

export const AlgoPortfolioMonitorScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <AlgoPortfolioMonitor />
                </div>
            </div>            
        </React.Fragment>
    )     
}
