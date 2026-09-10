import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchMomentumVersion, sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { EditMomentumPortfolioTotalSumModal } from './EditMomentumPortfolioTotalSumModal'
import { MomentumBacktestDiagram } from './MomentumBacktestDiagram'
import { MomentumMetric } from './MomentumMetric'
import { MomentumPosition } from './MomentumPosition'
import { MomentumPriceDynamicDiagram } from './MomentumPriceDynamicDiagram'
import { MomentumProtocolMessage } from './MomentumProtocolMessage'
import { MomentumTickerStatistic } from './MomentumTickerStatistic'
import { MomentumTotalSum } from './MomentumTotalSum'
import './styles.css'

export const MomentumMonitor = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumMonitorData = useSelector(state => state.momentum.momentumMonitorData)
    const momentumVersion = useSelector(state => state.momentum.momentumVersion)

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
                {
                    ['1'].map((version) => (
                        <div className='momentum-version-button-container'>
                            <button className='btn btn-outline-dark momentum-version-button'
                                onClick={() => {
                                    dispatch(fetchMomentumVersion(version)) 
                                }}><div className='momentum-version-button-text'>{version}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>                
                <div>{`Версия ${momentumVersion}`}</div> 
                <div>Статистика по доходности</div>
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
                <div className='horizontal-container'>
                    <div className='momentum-container'>
                        <MomentumBacktestDiagram series={momentumMonitorData.result.backtestSeries}/>
                    </div> 
                    <div className='momentum-container'>
                        <MomentumPriceDynamicDiagram series={momentumMonitorData.result.priceDynamicSeries}/>
                    </div>                                                                               
                </div>
                <div>Показатели за последний месяц</div>
                <div className='horizontal-container'>
                    <div className='momentum-container'>
                        <MomentumBacktestDiagram series={momentumMonitorData.result.shortBacktestSeries}/>
                    </div>               
                </div>                
                <div>Сообщения</div>
                <div>
                    {
                        momentumMonitorData.result.protocolMessages.map((protocolMessage) => (
                            <MomentumProtocolMessage protocolMessage={protocolMessage}/>     
                        ))                        
                    }
                </div>
                <div>Статистика по сигналам и выбитым стоп-лоссам</div>   
                <div>
                    {
                        momentumMonitorData.result.tickerStatistic.map((tickerStatisticItem) => (
                            <MomentumTickerStatistic tickerStatisticItem={tickerStatisticItem}/>     
                        ))                        
                    }
                </div>                                            
            </div>
        }
        <EditMomentumPortfolioTotalSumModal />
        </React.Fragment>                
    )
}