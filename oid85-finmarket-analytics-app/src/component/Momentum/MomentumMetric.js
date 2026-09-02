import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const GetColor = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value < 0) { return CONSTANTS.COLOR_LIGHTRED }
    if (value > 0) { return CONSTANTS.COLOR_LIGHTGREEN }
    return CONSTANTS.COLOR_WHITE
}

export const MomentumMetric = ({title, text, value, eunit}) => {
    return (
        <React.Fragment>          
            <div title={title} className='momentum-metric border-style' style={{backgroundColor: GetColor(value)}}>
                <div className='momentum-container momentum-metric-description'>{text}</div> 
                <div className='momentum-container momentum-metric-value'>{`${value} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}