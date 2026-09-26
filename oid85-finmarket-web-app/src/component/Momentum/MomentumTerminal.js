import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchMomentumVersion, sagaMomentumTerminal } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { MomentumTerminalMoney } from './MomentumTerminalMoney'
import { MomentumTerminalTotalSum } from './MomentumTerminalTotalSum'
import { MomentumTerminalTotalDailyPnl } from './MomentumTerminalTotalDailyPnl'
import './styles.css'
import { Ticker } from '../Ticker/Ticker'
import { MomentumTerminalTargetPosition } from './MomentumTerminalTargetPosition'
import { MomentumTerminalLifePosition } from './MomentumTerminalLifePosition'
import { MomentumTerminalTargetStop } from './MomentumTerminalTargetStop'
import { MomentumTerminalLifeStop } from './MomentumTerminalLifeStop'
import { MomentumTerminalSyncPosition } from './MomentumTerminalSyncPosition'
import { MomentumTerminalSyncStop } from './MomentumTerminalSyncStop'
import { MomentumTerminalTaskSyncPosition } from './MomentumTerminalTaskSyncPosition'
import { MomentumTerminalTaskSyncStop } from './MomentumTerminalTaskSyncStop'

export const MomentumTerminal = () => {
    
    const strategyVersions = ['Classic']
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumTerminalData = useSelector(state => state.momentum.momentumTerminalData)
    
    useEffect(() => {
        dispatch(sagaMomentumTerminal())
    }, [])

    return (
        <React.Fragment>
        {
            !momentumTerminalData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>
                {
                    strategyVersions.map((version) => (
                        <div className='momentum-version-button-container'>
                            <button className='btn btn-outline-dark momentum-version-button'
                                onClick={() => {
                                    dispatch(fetchMomentumVersion(version))
                                    dispatch(sagaMomentumTerminal()) 
                                }}><div className='momentum-version-button-text'>{version}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div>Панель терминала</div>                                                       
                <div>
                    <div className='horizontal-container'>
                        <MomentumTerminalTotalSum title={"Сумма портфеля"} text={"Сумма портфеля"} value={momentumTerminalData.result.totalSum} eunit={"руб."}/>
                        <MomentumTerminalMoney title={"Деньги"} text={"Деньги"} value={momentumTerminalData.result.money} eunit={"руб."}/>
                        <MomentumTerminalTotalDailyPnl title={"Дневной PnL"} text={"Дневной PnL"} value={momentumTerminalData.result.totalDailyPnl} eunit={"руб."}/>
                    </div>                              
                </div>    
                <div>Позиции</div>  
                <div>
                    <div className='horizontal-container'>
                        <div className='momentum-terminal-row-number border-style'>№</div>              
                        <div className='border-style' style={{width: 52}}></div>
                        <div className='momentum-terminal-row-ticker border-style'>Тикер</div>
                        <div className='momentum-terminal-row-target-position border-style'>Позиция расч.</div>
                        <div className='momentum-terminal-row-life-position border-style'>Позиция Life</div>
                        <div className='momentum-terminal-row-sync-position border-style'>Синхр.</div>
                        <div className='momentum-terminal-row-target-stop border-style'>Стоп расч.</div>
                        <div className='momentum-terminal-row-life-stop border-style'>Стоп Life</div>
                        <div className='momentum-terminal-row-sync-stop border-style'>Синхр.</div>     
                        <div className='momentum-terminal-row-task-sync-position border-style'>Вып.</div>       
                        <div className='momentum-terminal-row-task-sync-stop border-style'>Вып.</div>                                         
                    </div>                    
                    {
                        momentumTerminalData.result.rows.map((row) => (
                            <div className='horizontal-container'>
                                <div className='momentum-terminal-row-number border-style'></div>                                
                                <div className='border-style'><Ticker value={row.ticker} width={50} height={50} /></div>
                                <div className='momentum-terminal-row-ticker border-style'>{row.ticker}</div>
                                <MomentumTerminalTargetPosition position={row.targetPosition}/>
                                <MomentumTerminalLifePosition position={row.lifePosition}/>
                                <MomentumTerminalSyncPosition button={row.syncSizeButton}/>
                                <MomentumTerminalTaskSyncPosition task={row.syncTickerSizeTask}/>
                                <MomentumTerminalTargetStop stop={row.targetStop}/>
                                <MomentumTerminalLifeStop stop={row.lifeStop}/>
                                <MomentumTerminalSyncStop button={row.syncStopButton}/>
                                <MomentumTerminalTaskSyncStop task={row.syncTickerStopTask}/>
                            </div>
                        ))                        
                    }
                </div>                          
            </div>
        }
        </React.Fragment>                
    )
}