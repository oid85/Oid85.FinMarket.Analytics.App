import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { PortfolioRebalance } from '../PortfolioRebalance/PortfolioRebalance'
import './styles.css'

export const PortfolioRebalanceScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <PortfolioRebalance />
                </div>
            </div>            
        </React.Fragment>
    )    
}
