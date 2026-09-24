import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MacroParameterList } from '../MacroParameterList/MacroParameterList'
import './styles.css'

export const MacroParameterScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <MacroParameterList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
