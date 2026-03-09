import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import './styles.css'

export const WeekTrendDeltaHeaders = ({weeks}) => {

    return (
        <React.Fragment>          
            <div className='horizontal-container'>
                <div className='week-trend-delta-corner-cell'></div>
                {
                    weeks.map((week, index) => (
                        <div className='week-trend-delta-calendar-cell'>
                            <div>{week.weekNumber}</div>
                            <div className='horizontal-container'>
                                <div className='week-trend-border-style'>
                                    <Calendar key = {index} date = {week.weekStartDay} />
                                </div>
                                <div className='week-trend-border-style'>
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