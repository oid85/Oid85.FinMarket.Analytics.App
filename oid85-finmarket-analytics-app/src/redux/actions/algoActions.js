import {
    SAGA_PORTFOLIO_LIST,
    SAGA_PORTFOLIO_MONITOR,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_PORTFOLIO_OPTIMIZATION,
    FETCH_PORTFOLIO_LIST,
    FETCH_CURRENT_PORTFOLIO,
    FETCH_PORTFOLIO_MONITOR,
    FETCH_PORTFOLIO_BACKTEST,
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

export const sagaPortfolioBacktest = () => {
    return {
        type: SAGA_PORTFOLIO_BACKTEST
    }
}

export const fetchPortfolioBacktest = (data) => {
    return {
        type: FETCH_PORTFOLIO_BACKTEST,
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
