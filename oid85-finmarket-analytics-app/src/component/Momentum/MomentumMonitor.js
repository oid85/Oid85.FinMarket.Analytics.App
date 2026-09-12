import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchMomentumVersion, sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { EditMomentumPortfolioTotalSumModal } from './EditMomentumPortfolioTotalSumModal'
import { MomentumBacktestDiagram } from './MomentumBacktestDiagram'
import { MomentumMetric } from './MomentumMetric'
import { MomentumPosition } from './MomentumPosition'
import { MomentumPriceDynamicDiagram } from './MomentumPriceDynamicDiagram'
import { MomentumPriceWithStopDiagram } from './MomentumPriceWithStopDiagram'
import { MomentumMessage } from './MomentumMessage'
import { MomentumTickerStatistic } from './MomentumTickerStatistic'
import { MomentumTotalSum } from './MomentumTotalSum'
import './styles.css'

export const MomentumMonitor = () => {
    
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
                <div>
                    {
                        momentumMonitorData.result.description.map((text) => (
                            <div className='momentum-description'>{text}</div> 
                        ))                        
                    }
                </div>
                <div>Статистика по доходности</div>
                <div>
                    <div className='horizontal-container'>
                        <MomentumTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={momentumMonitorData.result.totalSumLife} eunit={"руб."}/>
                        <MomentumMetric title={"Годовая процентная доходность средняя"} text={"Дох. ср."} value={momentumMonitorData.result.yield} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2021 год"} text={"Дох. 2021"} value={momentumMonitorData.result.yield2021} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2022 год"} text={"Дох. 2022"} value={momentumMonitorData.result.yield2022} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2023 год"} text={"Дох. 2023"} value={momentumMonitorData.result.yield2023} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2024 год"} text={"Дох. 2024"} value={momentumMonitorData.result.yield2024} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2025 год"} text={"Дох. 2025"} value={momentumMonitorData.result.yield2025} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за 2026 год"} text={"Дох. 2026 YTD"} value={momentumMonitorData.result.yield2026} eunit={"%"}/>
                        <MomentumMetric title={"Годовая процентная доходность за последний год"} text={"Дох. год"} value={momentumMonitorData.result.yieldYear} eunit={"%"}/>
                        <MomentumMetric title={"Процентная доходность за последний квартал"} text={"Дох. квартал"} value={momentumMonitorData.result.yieldQuarter} eunit={"%"}/>
                        <MomentumMetric title={"Процентная доходность за последний месяц"} text={"Дох. месяц"} value={momentumMonitorData.result.yieldMonth} eunit={"%"}/>
                        <MomentumMetric title={"Процентная доходность за последний период"} text={"Дох. период"} value={momentumMonitorData.result.yieldPeriod} eunit={"%"}/>
                        <MomentumMetric title={"Максимальная просадка, %"} text={"Просад. макс."} value={momentumMonitorData.result.maxDrawdownPercent} eunit={"%"}/>
                        <MomentumMetric title={"Текущая просадка, %"} text={"Просад. тек."} value={momentumMonitorData.result.currentDrawdownPercent} eunit={"%"}/>
                    </div>                              
                </div>
                <div>Открытые позиции</div>
                <div className='horizontal-container'>
                    {
                        momentumMonitorData.result.currentPositions.map((position) => (
                            <MomentumPosition position={position}/>     
                        ))                        
                    }
                </div>
                <div>График цены за 15 дней</div>
                <div className='horizontal-container'>
                    {
                        momentumMonitorData.result.priceWithStopSeries.map((seriesList) => (
                            <MomentumPriceWithStopDiagram series={seriesList}/>
                        ))                        
                    }
                </div>                
                <div>За все время</div>
                <div className='horizontal-container'>
                    <div className='momentum-container'>
                        <MomentumBacktestDiagram series={momentumMonitorData.result.backtestSeries}/>
                    </div> 
                    <div className='momentum-container'>
                        <MomentumPriceDynamicDiagram series={momentumMonitorData.result.priceDynamicSeries}/>
                    </div>                                                                               
                </div>
                <div>За последний квартал</div>
                <div className='horizontal-container'>
                    <div className='momentum-container'>
                        <MomentumBacktestDiagram series={momentumMonitorData.result.shortBacktestSeries}/>
                    </div>               
                </div>                
                <div>Сообщения</div>
                <div>
                    {
                        momentumMonitorData.result.messages.map((message) => (
                            <MomentumMessage message={message}/>     
                        ))                        
                    }
                </div>
                <div>Статистика по сигналам и выбитым стоп-лоссам</div>   
                <div>
                    <div className='horizontal-container'>  
                        <div className='momentum-ticker-statistic-number border-style'>№</div>              
                        <div className='border-style' style={{width: 32}}></div>
                        <div className='momentum-ticker-statistic-ticker border-style'>Тикер</div>
                        <div className='momentum-ticker-statistic-value border-style'>Сигналов, шт.</div>
                        <div className='momentum-ticker-statistic-value border-style'>Выбито СЛ, шт.</div>
                        <div className='momentum-ticker-statistic-value border-style'>Выбито СЛ, %</div>
                    </div>                    
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