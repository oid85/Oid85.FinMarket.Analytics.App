import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { TrendAggregate } from '../TrendAggregate/TrendAggregate'
import './styles.css'

export const TrendAggregateScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <TrendAggregate />
                </div>
            </div>            
        </React.Fragment>
    )    
}
