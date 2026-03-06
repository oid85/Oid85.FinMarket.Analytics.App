import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { BondPortfolioPositionList } from '../BondPortfolioPositionList/BondPortfolioPositionList'
import './styles.css'

export const BondPortfolioScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <BondPortfolioPositionList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
