import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { CompareTrend } from '../CompareTrend/CompareTrend'
import './styles.css'

export const CompareTrendScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <CompareTrend />
                </div>
            </div>            
        </React.Fragment>
    )    
}
