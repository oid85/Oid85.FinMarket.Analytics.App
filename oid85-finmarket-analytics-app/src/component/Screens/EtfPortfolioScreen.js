import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { EtfPortfolioPositionList } from '../EtfPortfolioPositionList/EtfPortfolioPositionList'
import './styles.css'

export const EtfPortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <EtfPortfolioPositionList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
