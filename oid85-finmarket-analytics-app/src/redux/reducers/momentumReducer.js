import {
    FETCH_MOMENTUM_MONITOR,
    FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/momentumTypes'

const initialState = {
    momentumMonitorData: {},
    momentumPortfolioTotalSum: 0,
    editMomentumPortfolioTotalSumModalIsOpened: false
}

export const momentumReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MOMENTUM_MONITOR:
            return {...state, momentumMonitorData: {...action.payload}}
             
        case FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM:
            return {...state, momentumPortfolioTotalSum: action.payload}

        case SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editMomentumPortfolioTotalSumModalIsOpened: true}
        
        case HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editMomentumPortfolioTotalSumModalIsOpened: false}

        default: return state
    }
}