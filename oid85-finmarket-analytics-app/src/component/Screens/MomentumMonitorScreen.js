import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MomentumMonitor } from '../Momentum/MomentumMonitor'
import './styles.css'

export const MomentumMonitorScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <MomentumMonitor />
                </div>
            </div>            
        </React.Fragment>
    )    
}
