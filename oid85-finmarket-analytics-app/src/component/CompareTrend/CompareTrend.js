import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaCompareTrend } from '../../redux/actions/compareTrendActions'
import { sagaInstrumentList, sagaInstrumentSelect, fetchCurrentInstrument } from '../../redux/actions/instrumentActions'
import { InstrumentList } from '../Instrument/InstrumentList'
import Loader from '../Loader/Loader'
import { CompareTrendDiagram } from './CompareTrendDiagram'
import './styles.css'

export const CompareTrend = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const compareTrendData = useSelector(state => state.compareTrend.compareTrendData)
    const instrumentListData = useSelector(state => state.instrument.instrumentListData)

    useEffect(() => {
        dispatch(sagaCompareTrend())
    }, [])

    useEffect(() => {
        dispatch(sagaCompareTrend())
    }, [instrumentListData])

    useEffect(() => {
        dispatch(sagaInstrumentList())
    }, [])

    return (
        <React.Fragment>
        {
            !compareTrendData.result || !instrumentListData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>
                <div className='instrument-list-container border-style'>
                    <InstrumentList instruments = {instrumentListData.result.instruments} />
                </div>                
                <div className='compare-trend-container border-style'>
                    <CompareTrendDiagram series={compareTrendData.result.series}/>
                </div> 
            </div>         
        }
        </React.Fragment>                
    )
}