import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalByCompany } from '../FundamentalByCompany/FundamentalByCompany'
import './styles.css'

export const FundamentalParameterCompanyScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FundamentalByCompany />
                </div>
            </div>            
        </React.Fragment>
    )    
}
