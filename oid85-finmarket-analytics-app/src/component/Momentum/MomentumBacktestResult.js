import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumBacktestResult = ({backtestResult}) => {
    return (
        <React.Fragment>          
            <div className='horizontal-container'>
                <div className='momentum-backtest-result-number border-style'>{backtestResult.number}</div>
                <div className='momentum-backtest-result-strategy-name border-style'>{backtestResult.strategyName}</div>
                <div className='momentum-backtest-result-strategy-params border-style'>{backtestResult.strategyParams}</div>
                <div className='momentum-backtest-result-rf border-style'>{backtestResult.recoveryFactor}</div>
                <div className='momentum-backtest-result-np border-style'>{formatNumber(backtestResult.netProfit)}</div>
                <div className='momentum-backtest-result-ayr border-style'>{`${backtestResult.annualYieldReturn} %`}</div>
            </div>
        </React.Fragment>
    )
}