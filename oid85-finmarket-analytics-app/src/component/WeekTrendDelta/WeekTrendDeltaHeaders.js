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
                <div className='week-trend-separator-header-cell'></div>
                <div className='week-trend-delta-trend-state-header-cell week-trend-border-style'>Тренд</div>
                <div className='week-trend-delta-falling-from-max-header-cell week-trend-border-style'>Пад. от макс., %</div>
                <div className='week-trend-delta-falling-from-max-header-cell week-trend-border-style'>ДД, %</div>
            </div>
        </React.Fragment>                
    )
}