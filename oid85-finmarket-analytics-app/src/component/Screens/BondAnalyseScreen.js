import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { BondAnalyse } from '../BondAnalyse/BondAnalyse'
import './styles.css'

export const BondAnalyseScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <BondAnalyse />
                </div>
            </div>            
        </React.Fragment>
    )    
}
