import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_PORTFOLIO_POSITION,
    SAGA_EDIT_PORTFOLIO_TOTAL_SUM,
    FETCH_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_PORTFOLIO_POSITION,
    FETCH_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_PORTFOLIO_POSITION_MODAL,
    SHOW_EDIT_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/portfolioTypes'


export const sagaPortfolioPositionList = () => {
    return {
        type: SAGA_PORTFOLIO_POSITION_LIST
    }
}

export const sagaEditPortfolioPosition = () => {
    return {
        type: SAGA_EDIT_PORTFOLIO_POSITION
    }
}

export const sagaEditPortfolioTotalSum = () => {
    return {
        type: SAGA_EDIT_PORTFOLIO_TOTAL_SUM
    }
}

export const fetchPortfolioPositionList = (data) => {
    return {
        type: FETCH_PORTFOLIO_POSITION_LIST,
        payload: data
    }
}

export const fetchCurrentPortfolioPosition = (data) => {
    return {
        type: FETCH_CURRENT_PORTFOLIO_POSITION,
        payload: data
    }
}

export const fetchPortfolioTotalSum = (data) => {
    return {
        type: FETCH_PORTFOLIO_TOTAL_SUM,
        payload: data
    }
}

export const showEditPortfolioPositionModal = () => {
    return {
        type: SHOW_EDIT_PORTFOLIO_POSITION_MODAL
    }
}

export const hideEditPortfolioPositionModal = () => {
    return {
        type: HIDE_EDIT_PORTFOLIO_POSITION_MODAL
    }
}

export const showEditPortfolioTotalSumModal = () => {
    return {
        type: SHOW_EDIT_PORTFOLIO_TOTAL_SUM_MODAL
    }
}

export const hideEditPortfolioTotalSumModal = () => {
    return {
        type: HIDE_EDIT_PORTFOLIO_TOTAL_SUM_MODAL
    }
}
