import {
    FETCH_MOMENTUM_MONITOR,
    FETCH_MOMENTUM_TERMINAL,
    FETCH_MOMENTUM_BACKTEST_RESULT,
    FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM,
    FETCH_MOMENTUM_VERSION,
    SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/momentumTypes'

const initialState = {
    momentumMonitorData: {},
    momentumTerminalData: {},
    momentumBacktestResultData: {},
    momentumPortfolioTotalSum: 0,
    momentumVersion: 'Classic',
    editMomentumPortfolioTotalSumModalIsOpened: false
}

export const momentumReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MOMENTUM_MONITOR:
            return {...state, momentumMonitorData: {...action.payload}}
          
        case FETCH_MOMENTUM_TERMINAL:
            return {...state, momentumTerminalData: {...action.payload}}

        case FETCH_MOMENTUM_BACKTEST_RESULT:
            return {...state, momentumBacktestResultData: {...action.payload}}            

        case FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM:
            return {...state, momentumPortfolioTotalSum: action.payload}

        case FETCH_MOMENTUM_VERSION:
            return {...state, momentumVersion: action.payload}
            
        case SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editMomentumPortfolioTotalSumModalIsOpened: true}
        
        case HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editMomentumPortfolioTotalSumModalIsOpened: false}

        default: return state
    }
}