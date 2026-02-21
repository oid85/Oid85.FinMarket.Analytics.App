import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaTrendDynamic } from '../../redux/actions/trendDynamicActions'
import Loader from '../Loader/Loader'
import './styles.css'
import { TrendDynamicData } from './TrendDynamicData'
import { TrendDynamicDates } from './TrendDynamicDates'

export const TrendDynamic = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trendDynamicData = useSelector(state => state.trendDynamic.trendDynamicData)

    useEffect(() => {
        dispatch(sagaTrendDynamic())
    }, [])

    return (
        <React.Fragment>
        {
            !trendDynamicData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>             
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