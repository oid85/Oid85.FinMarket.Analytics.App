import React from 'react'
import './Calendar.css'

export const CalendarMin = ({date}) => {
    
    let dt = new Date(Date.parse(date))
    let month = dt.toLocaleString('default', { month: 'long' })
        .toUpperCase().substring(0, 3);
    let day = dt.toLocaleString('default', { day: '2-digit' });       
    
    return (
        <React.Fragment>
            <div className='calendar-min'>
                <div className='calendar-header-min calendar-month-min'>{month}</div>
                <div className='calendar-body'>
                    <div className='calendar-day-min'>{day}</div>
                </div>
            </div>
        </React.Fragment>
    )
}