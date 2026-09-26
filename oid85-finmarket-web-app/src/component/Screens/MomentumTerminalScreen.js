import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MomentumTerminal } from '../Momentum/MomentumTerminal'
import './styles.css'

export const MomentumTerminalScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <MomentumTerminal />
                </div>
            </div>            
        </React.Fragment>
    )    
}
