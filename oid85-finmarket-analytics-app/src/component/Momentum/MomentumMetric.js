import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const GetColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value < 0) { return CONSTANTS.COLOR_LIGHTRED }
    if (value > 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}

export const MomentumMetric = ({description, value, eunit}) => {
    return (
        <React.Fragment>          
            <div 
                className='momentum-metric border-style'
                style={{backgroundColor: GetColor(value)}}>
                <div className='momentum-metric-description'>{description}</div> 
                <div className='momentum-metric-value'>{`${value} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}