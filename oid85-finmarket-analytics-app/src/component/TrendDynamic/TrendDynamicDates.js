import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import './styles.css'

export const TrendDynamicDates = ({dates}) => {

    return (
        <React.Fragment>          
            <div className='horizontal-container border'>
                <div className='ticker-cell border'></div>
                {
                    dates.map((date, index) => (
                        <div className='cell border'>
                            <Calendar key = {index} date = {date} />
                        </div>
                    ))
                }
            </div>
        </React.Fragment>                
    )
}