import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { Ticker } from '../Ticker/Ticker'
import { EditMomentumPortfolioTotalSumModal } from './EditMomentumPortfolioTotalSumModal'
import { MomentumBacktestDiagram } from './MomentumBacktestDiagram'
import { MomentumMetric } from './MomentumMetric'
import { MomentumPosition } from './MomentumPosition'
import { MomentumPriceDynamicDiagram } from './MomentumPriceDynamicDiagram'
import { MomentumTotalSum } from './MomentumTotalSum'
import './styles.css'

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
                        <MomentumBacktestDiagram series={momentumMonitorData.result.backtestSeries}/>
                    </div>   
                    <div className='momentum-container'>
                        <MomentumPriceDynamicDiagram series={momentumMonitorData.result.priceDynamicSeries}/>
                    </div>                                                          
                </div>                                
                <div>Статистика</div> 
                <div>
                    <div className='horizontal-container'>
                        <MomentumTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={momentumMonitorData.result.totalSumLife} eunit={"руб."}/>
                        <MomentumMetric title={"Годовая процентная доходность средняя (Annual Percentage Yield)"} text={"APY ср."} value={momentumMonitorData.result.yield} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2021 год (Annual Percentage Yield)"} text={"APY 2021"} value={momentumMonitorData.result.yield2021} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2022 год (Annual Percentage Yield)"} text={"APY 2022"} value={momentumMonitorData.result.yield2022} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2023 год (Annual Percentage Yield)"} text={"APY 2023"} value={momentumMonitorData.result.yield2023} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2024 год (Annual Percentage Yield)"} text={"APY 2024"} value={momentumMonitorData.result.yield2024} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2025 год (Annual Percentage Yield)"} text={"APY 2025"} value={momentumMonitorData.result.yield2025} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2026 год (Annual Percentage Yield)"} text={"APY 2026"} value={momentumMonitorData.result.yield2026} eunit={"%"}/>
                        <MomentumMetric title={"Максимальная просадка (Drawdown Max)"} text={"DD max"} value={momentumMonitorData.result.maxDrawdown} eunit={"%"}/>
                        <MomentumMetric title={"Текущая просадка (Drawdown Current)"} text={"DD cur"} value={momentumMonitorData.result.currentDrawdown} eunit={"%"}/>
                    </div>                              
                </div>
                <div>Позиции</div> 
                <div className='horizontal-container'>
                    {
                        momentumMonitorData.result.currentPositions.map((position) => (
                            <MomentumPosition position={position}/>     
                        ))                        
                    }
                </div>                 
            </div>
        }
        <EditMomentumPortfolioTotalSumModal />
        </React.Fragment>                
    )
}