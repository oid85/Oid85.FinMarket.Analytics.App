import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalRatingList } from '../FundamentalRatingList/FundamentalRatingList'
import './styles.css'

export const FundamentalRatingScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FundamentalRatingList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
