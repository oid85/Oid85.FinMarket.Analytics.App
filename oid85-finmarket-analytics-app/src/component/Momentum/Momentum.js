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

    return (
        <React.Fragment>
        {
            !momentumMonitorData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='momentum-container border-style'>
                    <MomentumDiagram series={momentumMonitorData.result.series}/>
                </div> 
                <div className='horizontal-container'>
                    {
                        momentumMonitorData.result.currentPositions.map((position) => (
                            <div className='momentum-current-position border-style'>
                                <div className='momentum-container horizontal-container'>
                                    <div className='border-style'><Ticker value={position.ticker} width={40} height={40} /></div>
                                    <div>{position.ticker}</div>                                
                                </div>                               
                                <div>{`${formatNumber(position.size)} шт.`}</div>
                                <div>{`${formatNumber(position.cost)} руб.`}</div>
                                <div>{`SL ${formatNumber(position.stopPrice)} руб.`}</div>
                            </div>     
                        ))                        
                    }
                </div>                 
            </div>
        }
        </React.Fragment>                
    )
}