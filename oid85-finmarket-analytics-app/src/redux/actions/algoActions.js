import {
    SAGA_PORTFOLIO_LIST,
    SAGA_PORTFOLIO_STRATEGY_LIST,
    SAGA_PORTFOLIO_MONITOR,
    SAGA_PORTFOLIO_BACKTEST_RESULT_LIST,
    SAGA_PORTFOLIO_OPTIMIZATION,
    FETCH_PORTFOLIO_LIST,
    FETCH_PORTFOLIO_STRATEGY_LIST,
    FETCH_CURRENT_PORTFOLIO,
    FETCH_CURRENT_PORTFOLIO_STRATEGY,
    FETCH_PORTFOLIO_MONITOR,
    FETCH_PORTFOLIO_BACKTEST_RESULT_LIST,
    FETCH_PORTFOLIO_OPTIMIZATION
} from '../types/algoTypes'


export const sagaPortfolioList = () => {
    return {
        type: SAGA_PORTFOLIO_LIST
    }
}

export const fetchPortfolioList = (data) => {
    return {
        type: FETCH_PORTFOLIO_LIST,
        payload: data
    }
}

export const fetchCurrentPortfolio = (data) => {
    return {
        type: FETCH_CURRENT_PORTFOLIO,
        payload: data
    }
}

export const sagaPortfolioStrategyList = () => {
    return {
        type: SAGA_PORTFOLIO_STRATEGY_LIST
    }
}

export const fetchPortfolioStrategyList = (data) => {
    return {
        type: FETCH_PORTFOLIO_STRATEGY_LIST,
        payload: data
    }
}

export const fetchCurrentPortfolioStrategy = (data) => {
    return {
        type: FETCH_CURRENT_PORTFOLIO_STRATEGY,
        payload: data
    }
}

export const sagaPortfolioMonitor = () => {
    return {
        type: SAGA_PORTFOLIO_MONITOR
    }
}

export const fetchPortfolioMonitor = (data) => {
    return {
        type: FETCH_PORTFOLIO_MONITOR,
        payload: data
    }
}

export const sagaPortfolioBacktestResultList = () => {
    return {
        type: SAGA_PORTFOLIO_BACKTEST_RESULT_LIST
    }
}

export const fetchPortfolioBacktestResultList = (data) => {
    return {
        type: FETCH_PORTFOLIO_BACKTEST_RESULT_LIST,
        payload: data
    }
}

export const sagaPortfolioOptimization = () => {
    return {
        type: SAGA_PORTFOLIO_OPTIMIZATION
    }
}

export const fetchPortfolioOptimization = (data) => {
    return {
        type: FETCH_PORTFOLIO_OPTIMIZATION,
        payload: data
    }
}
