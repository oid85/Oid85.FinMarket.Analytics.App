import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumBacktestResult } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import { MomentumBacktestResult } from './MomentumBacktestResult'
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
                <div>
                    <div>Результаты бектеста</div>                                                                                                                                                                                                                                         
                    <div className='horizontal-container'>  
                        <div className='momentum-backtest-result-strategy-name border-style'>Стратегия</div>
                        <div className='momentum-backtest-result-strategy-params border-style'>Параметры</div>
                        <div className='momentum-backtest-result-value border-style'>RF</div>
                        <div className='momentum-backtest-result-value border-style'>NP</div>
                        <div className='momentum-backtest-result-value border-style'>AYR</div>
                    </div>
                    {
                        momentumBacktestResultData.result.backtestResults.map((backtestResult) => (
                            <MomentumBacktestResult backtestResult={backtestResult}/>     
                        ))                        
                    }                     
                </div>                                            
            </div>
        }
        </React.Fragment>                
    )
}