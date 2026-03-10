import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ClosePriceDiagram } from '../ClosePriceDiagram/ClosePriceDiagram'
import './styles.css'

export const ClosePriceDiagramScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <ClosePriceDiagram />
                </div>
            </div>            
        </React.Fragment>
    )    
}
