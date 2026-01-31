import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalParameterList } from '../FundamentalParameterList/FundamentalParameterList'
import './styles.css'

export const FundamentalParameterScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FundamentalParameterList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
