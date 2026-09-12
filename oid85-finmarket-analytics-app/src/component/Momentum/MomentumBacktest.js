import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumBacktestResult } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { MomentumBacktestResult } from './MomentumBacktestResult'
import { MomentumBacktestResultEquityDiagram } from './MomentumBacktestResultEquityDiagram'
import './styles.css'

export const MomentumBacktest = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumBacktestResultData = useSelector(state => state.momentum.momentumBacktestResultData)
    
    useEffect(() => {
        dispatch(sagaMomentumBacktestResult())
    }, [])

    return (
        <React.Fragment>
        {
            !momentumBacktestResultData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>  
                    <div>
                        <div>Результаты бектеста</div>
                        <div className='horizontal-container'>  
                            <div className='momentum-backtest-result-number border-style'>№</div>
                            <div className='momentum-backtest-result-strategy-name border-style'>Стратегия</div>
                            <div className='momentum-backtest-result-strategy-params border-style'>Параметры</div>
                            <div className='momentum-backtest-result-rf border-style'>RF</div>
                            <div className='momentum-backtest-result-np border-style'>NP</div>
                            <div className='momentum-backtest-result-ayr border-style'>AYR</div>
                        </div>
                        {
                            momentumBacktestResultData.result.backtestResults.map((backtestResult) => (
                                <MomentumBacktestResult backtestResult={backtestResult}/>     
                            ))                        
                        }                     
                    </div>     
                    <div className='momentum-container'>
                        <MomentumBacktestResultEquityDiagram series={momentumBacktestResultData.result.equitySeries}/>
                    </div>                    
                </div>                                                          
            </div>
        }
        </React.Fragment>                
    )
}