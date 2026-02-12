import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaWeekTrendDelta } from '../../redux/actions/weekTrendDeltaActions'
import Loader from '../Loader/Loader'
import './styles.css'
import { WeekTrendDeltaData } from './WeekTrendDeltaData'
import { WeekTrendDeltaHeaders } from './WeekTrendDeltaHeaders'

export const WeekTrendDelta = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const weekTrendDeltaData = useSelector(state => state.weekTrendDelta.weekTrendDeltaData)

    useEffect(() => {
        dispatch(sagaWeekTrendDelta())
    }, [])

    console.log(weekTrendDeltaData)

    return (
        <React.Fragment>
        {
            !weekTrendDeltaData.result || loading
            ? <Loader/>
            :
            <div className='week-trend-delta-container border-style'>
            <WeekTrendDeltaHeaders weeks = {weekTrendDeltaData.result.weeks} />
            <h6>Индексы</h6>
            <WeekTrendDeltaData data = {weekTrendDeltaData.result.indexes} />
            <h6>Акции</h6>
            <WeekTrendDeltaData data = {weekTrendDeltaData.result.shares} />
        </div>         
        }
        </React.Fragment>                
    )
}