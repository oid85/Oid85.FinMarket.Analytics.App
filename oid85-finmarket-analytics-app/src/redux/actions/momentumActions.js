import {
    SAGA_MOMENTUM_MONITOR,
    SAGA_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM,
    FETCH_MOMENTUM_MONITOR,
    FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/momentumTypes'

export const sagaMomentumMonitor = () => {
    return {
        type: SAGA_MOMENTUM_MONITOR
    }
}

export const sagaEditMomentumPortfolioTotalSum = () => {
    return {
        type: SAGA_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM
    }
}

export const fetchMomentumMonitor = (data) => {
    return {
        type: FETCH_MOMENTUM_MONITOR,
        payload: data
    }
}

export const fetchMomentumPortfolioTotalSum = (data) => {
    return {
        type: FETCH_MOMENTUM_PORTFOLIO_TOTAL_SUM,
        payload: data
    }
}

export const showEditMomentumPortfolioTotalSumModal = () => {
    return {
        type: SHOW_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL
    }
}

export const hideEditMomentumPortfolioTotalSumModal = () => {
    return {
        type: HIDE_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM_MODAL
    }
}
