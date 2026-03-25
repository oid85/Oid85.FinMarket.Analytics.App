import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { ClosePriceDiagramIndexes } from '../ClosePriceDiagram/ClosePriceDiagramIndexes'
import './styles.css'

export const ClosePriceDiagramIndexesScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <ClosePriceDiagramIndexes />
                </div>
            </div>            
        </React.Fragment>
    )    
}
