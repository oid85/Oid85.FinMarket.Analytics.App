import {
    FETCH_PORTFOLIO_LIST,
    FETCH_CURRENT_PORTFOLIO,
    FETCH_PORTFOLIO_MONITOR,
    FETCH_PORTFOLIO_BACKTEST,
    FETCH_PORTFOLIO_OPTIMIZATION    
} from '../types/algoTypes'

const initialState = {
    portfolioListData: {},
    portfolioMonitorData: {},
    portfolioBacktestData: {},
    portfolioOptimizationData: {},
    currentPortfolio: { name: 'PortfolioUltimateSmoother', description: 'Портфель UltimateSmoother' }    
}

export const algoReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PORTFOLIO_LIST:
            return {...state, portfolioListData: {...action.payload}}

        case FETCH_PORTFOLIO_MONITOR:
            return {...state, portfolioMonitorData: {...action.payload}}
                
        case FETCH_PORTFOLIO_BACKTEST:
            return {...state, portfolioBacktestData: {...action.payload}}
                    
        case FETCH_PORTFOLIO_OPTIMIZATION:
            return {...state, portfolioOptimizationData: {...action.payload}}                    

        case FETCH_CURRENT_PORTFOLIO:
            return {...state, currentPortfolio: {...action.payload}}

        default: return state
    }
}