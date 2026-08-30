import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { Ticker } from '../Ticker/Ticker'
import { MomentumDiagram } from './MomentumDiagram'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const Momentum = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumMonitorData = useSelector(state => state.momentum.momentumMonitorData)

    useEffect(() => {
        dispatch(sagaMomentumMonitor())
    }, [])

console.log(momentumMonitorData.result)

    return (
        <React.Fragment>
        {
            !momentumMonitorData.result || loading
            ? <Loader/>
            :
            <div>

            </div>
        }
        </React.Fragment>                
    )
}