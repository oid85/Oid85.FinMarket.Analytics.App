import {
    FETCH_PORTFOLIO_LIST,
    FETCH_PORTFOLIO_STRATEGY_LIST,
    FETCH_CURRENT_PORTFOLIO,
    FETCH_CURRENT_PORTFOLIO_STRATEGY,
    FETCH_PORTFOLIO_MONITOR,
    FETCH_PORTFOLIO_BACKTEST_RESULT_LIST,
    FETCH_PORTFOLIO_OPTIMIZATION    
} from '../types/algoTypes'

const initialState = {
    portfolioListData: {},
    portfolioStrategyListData: {},
    portfolioMonitorData: {},
    portfolioBacktestResultListData: {},
    portfolioOptimizationData: {},
    currentPortfolio: { name: 'Trend_Life', description: 'Портфель Trend (Tinkoff Женя)' },
    currentPortfolioStrategy: { name: '' }
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PORTFOLIO_LIST:
            return {...state, portfolioListData: {...action.payload}}

        case FETCH_PORTFOLIO_STRATEGY_LIST:
            return {...state, portfolioStrategyListData: {...action.payload}}

        case FETCH_PORTFOLIO_MONITOR:
            return {...state, portfolioMonitorData: {...action.payload}}
                
        case FETCH_PORTFOLIO_BACKTEST_RESULT_LIST:
            return {...state, portfolioBacktestResultListData: {...action.payload}}
                    
        case FETCH_PORTFOLIO_OPTIMIZATION:
            return {...state, portfolioOptimizationData: {...action.payload}}                    

        case FETCH_CURRENT_PORTFOLIO:
            return {...state, currentPortfolio: {...action.payload}}

        case FETCH_CURRENT_PORTFOLIO_STRATEGY:
            return {...state, currentPortfolioStrategy: {...action.payload}}

        default: return state
    }
}