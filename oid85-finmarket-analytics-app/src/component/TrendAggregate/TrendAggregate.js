import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaTrendAggregateDiagram } from '../../redux/actions/trendAggregateDiagramActions'
import Loader from '../Loader/Loader'
import { TrendAggregateDiagramComponent } from './TrendAggregateDiagramComponent'
import './styles.css'

export const TrendAggregate = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trendAggregateDiagramData = useSelector(state => state.trendAggregateDiagram.trendAggregateDiagramData)

    useEffect(() => {
        dispatch(sagaTrendAggregateDiagram())
    }, [])

console.log(trendAggregateDiagramData)

    return (
        <React.Fragment>
        {
            !trendAggregateDiagramData.result || loading
            ? <Loader/>
            :
            <div className='trend-aggregate-container border-style'>
                <TrendAggregateDiagramComponent series={trendAggregateDiagramData.result.series}/>
            </div>        
        }
        </React.Fragment>                
    )
}