import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import './styles.css'

export const TrendDynamicDates = ({dates}) => {

    return (
        <React.Fragment>          
            <div className='horizontal-container'>
                <div className='ticker-cell border-style'></div>
                {
                    dates.map((date, index) => (
                        <div className='calendar-cell border-style'>
                            <Calendar key = {index} date = {date} />
                        </div>
                    ))
                }
            </div>
        </React.Fragment>                
    )
}