import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { FundamentalParameterBubble } from '../FundamentalParameterBubble/FundamentalParameterBubble'
import './styles.css'

export const FundamentalParameterBubbleScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <FundamentalParameterBubble />
                </div>
            </div>            
        </React.Fragment>
    )    
}
