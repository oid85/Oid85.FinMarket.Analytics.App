import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { Momentum } from '../Momentum/Momentum'
import './styles.css'

export const MomentumScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <Momentum />
                </div>
            </div>            
        </React.Fragment>
    )    
}
