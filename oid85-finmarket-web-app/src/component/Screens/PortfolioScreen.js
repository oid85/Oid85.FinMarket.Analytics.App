import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { PortfolioPositionList } from '../PortfolioPositionList/PortfolioPositionList'
import './styles.css'

export const PortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <PortfolioPositionList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
