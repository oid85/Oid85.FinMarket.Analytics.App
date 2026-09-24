import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { AlgoPortfolioOptimization } from '../Algo/AlgoPortfolioOptimization'
import './styles.css'

export const AlgoPortfolioOptimizationScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <AlgoPortfolioOptimization />
                </div>
            </div>            
        </React.Fragment>
    )     
}
