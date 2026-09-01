import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { Ticker } from '../Ticker/Ticker'
import { MomentumDiagram } from './MomentumDiagram'
import { MomentumMetric } from './MomentumMetric'
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
                <div className='horizontal-container'>
                    <div className='momentum-container'>
                        <MomentumDiagram series={momentumMonitorData.result.series}/>
                    </div>                                        
                </div> 
                <div>
                    <div className='horizontal-container'>
                        <MomentumMetric description={"Дох-ть год. средн."} value={momentumMonitorData.result.yield} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2021"} value={momentumMonitorData.result.yield2021} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2022"} value={momentumMonitorData.result.yield2022} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2023"} value={momentumMonitorData.result.yield2023} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2024"} value={momentumMonitorData.result.yield2024} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2025"} value={momentumMonitorData.result.yield2025} eunit={"%"}/>
                        <MomentumMetric description={"Дох-ть год. 2026"} value={momentumMonitorData.result.yield2026} eunit={"%"}/>
                    </div>    
                    <div className='horizontal-container'>
                        <MomentumMetric description={"DDmax"} value={momentumMonitorData.result.maxDrawdown} eunit={"%"}/>
                        <MomentumMetric description={"DDcur"} value={momentumMonitorData.result.currentDrawdown} eunit={"%"}/>
                    </div>                              
                </div>                                
                <div className='horizontal-container'>
                    {
                        momentumMonitorData.result.currentPositions.map((position) => (
                            <div className='momentum-current-position'>
                                <div className='momentum-container horizontal-container'>
                                    <div className='border-style'><Ticker value={position.ticker} width={60} height={60} /></div>
                                    <div className='momentum-container momentum-ticker'>{position.ticker}</div>                                
                                </div>                               
                                <div className='momentum-container'>{`${formatNumber(position.size)} шт.`}</div>
                                <div className='momentum-container'>{`${formatNumber(position.cost)} руб.`}</div>
                                {
                                    position.stopPrice
                                    ? <div className='momentum-container'>{`SL ${formatNumber(position.stopPrice)} руб.`}</div>
                                    : <div></div>
                                }                                
                            </div>     
                        ))                        
                    }
                </div>                 
            </div>
        }
        </React.Fragment>                
    )
}