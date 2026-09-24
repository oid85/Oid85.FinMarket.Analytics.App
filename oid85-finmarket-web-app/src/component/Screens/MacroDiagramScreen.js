import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MacroParameterDiagram } from '../MacroParameterDiagram/MacroParameterDiagram'
import './styles.css'

export const MacroDiagramScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <MacroParameterDiagram />
                </div>
            </div>            
        </React.Fragment>
    )    
}
