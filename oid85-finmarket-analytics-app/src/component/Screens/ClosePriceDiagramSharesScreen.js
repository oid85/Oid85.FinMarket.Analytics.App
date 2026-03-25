import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ClosePriceDiagramShares } from '../ClosePriceDiagram/ClosePriceDiagramShares'
import './styles.css'

export const ClosePriceDiagramSharesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <ClosePriceDiagramShares />
                </div>
            </div>            
        </React.Fragment>
    )    
}
