import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaTrendDynamic } from '../../redux/actions/trendDynamicActions'
import { sagaInstrumentList, sagaInstrumentSelect, fetchCurrentInstrument } from '../../redux/actions/instrumentActions'
import { InstrumentList } from '../Instrument/InstrumentList'
import Loader from '../Loader/Loader'
import './styles.css'
import { TrendDynamicData } from './TrendDynamicData'
import { TrendDynamicDates } from './TrendDynamicDates'

export const TrendDynamic = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trendDynamicData = useSelector(state => state.trendDynamic.trendDynamicData)
    const instrumentListData = useSelector(state => state.instrument.instrumentListData)

    useEffect(() => {
        dispatch(sagaTrendDynamic())
    }, [])

    useEffect(() => {
        dispatch(sagaTrendDynamic())
    }, [instrumentListData])

    useEffect(() => {
        dispatch(sagaInstrumentList())
    }, [])

    return (
        <React.Fragment>
        {
            !trendDynamicData.result || !instrumentListData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>
                <div className='instrument-list-container border-style'>
                    <InstrumentList instruments = {instrumentListData.result.instruments} />
                </div>                
                <div className='trend-dynamic-container border-style'>
                    <TrendDynamicDates dates = {trendDynamicData.result.dates} />
                    <h6>Индексы</h6>
                    <TrendDynamicData data = {trendDynamicData.result.indexes} />
                    <h6>Акции</h6>
                    <TrendDynamicData data = {trendDynamicData.result.shares} />
                    <h6>Фьючерсы</h6>
                    <TrendDynamicData data = {trendDynamicData.result.futures} />
                    <h6>Облигации</h6>
                    <TrendDynamicData data = {trendDynamicData.result.bonds} />
                </div> 
            </div>         
        }
        </React.Fragment>                
    )
}