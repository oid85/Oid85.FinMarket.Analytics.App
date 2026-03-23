import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalBySector } from '../FundamentalBySector/FundamentalBySector'
import './styles.css'

export const FundamentalParameterSectorScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FundamentalBySector />
                </div>
            </div>            
        </React.Fragment>
    )    
}
