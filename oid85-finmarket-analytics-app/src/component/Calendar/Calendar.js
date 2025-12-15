import React from 'react'
import './Calendar.css'

export const Calendar = ({date}) => {
    
    let dt = new Date(Date.parse(date))
    let month = dt.toLocaleString('default', { month: 'long' })
        .toUpperCase().substring(0, 3);
    let day = dt.toLocaleString('default', { day: '2-digit' });
    let year = dt.toLocaleString('default', { year: 'numeric' });    
    
    return (
        <React.Fragment>
            <div className='calendar'>
                <div className='calendar-header calendar-month'>{month}</div>
                <div className='calendar-body'>
                    <div className='calendar-day'>{day}</div>
                    <div className='calendar-year'>{year}</div>
                </div>
            </div>
        </React.Fragment>
    )
}