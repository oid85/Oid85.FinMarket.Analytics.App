import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaCompareTrend } from '../../redux/actions/compareTrendActions'
import Loader from '../Loader/Loader'
import { CompareTrendDiagram } from './CompareTrendDiagram'
import './styles.css'

export const CompareTrend = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const compareTrendData = useSelector(state => state.compareTrend.compareTrendData)

    useEffect(() => {
        dispatch(sagaCompareTrend())
    }, [])

    return (
        <React.Fragment>
        {
            !compareTrendData.result || loading
            ? <Loader/>
            :
            <div className='horizontal-container'>             
                <div className='compare-trend-container border-style'>
                    <CompareTrendDiagram series={compareTrendData.result.series}/>
                </div> 
            </div>         
        }
        </React.Fragment>                
    )
}