import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import './styles.css'

export const WeekTrendDeltaHeaders = ({weeks}) => {

    return (
        <React.Fragment>          
            <div className='horizontal-container'>
                <div className='corner-cell'></div>
                {
                    weeks.map((week, index) => (
                        <div className='calendar-cell border-style'>
                            <div className=''>{week.weekNumber}</div>
                            <div className='horizontal-container'>
                                <div className='border-style'>
                                    <Calendar key = {index} date = {week.weekStartDay} />
                                </div>
                                <div className='border-style'>
                                    <Calendar key = {index} date = {week.weekEndDay} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </React.Fragment>                
    )
}