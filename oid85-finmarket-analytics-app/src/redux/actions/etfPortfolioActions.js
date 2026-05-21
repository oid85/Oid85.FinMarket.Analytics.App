import {
    SAGA_ETF_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_ETF_PORTFOLIO_POSITION,
    FETCH_ETF_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_ETF_PORTFOLIO_POSITION,
    SHOW_EDIT_ETF_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_ETF_PORTFOLIO_POSITION_MODAL
} from '../types/etfPortfolioTypes'


export const sagaEtfPortfolioPositionList = () => {
    return {
        type: SAGA_ETF_PORTFOLIO_POSITION_LIST
    }
}

export const sagaEditEtfPortfolioPosition = () => {
    return {
        type: SAGA_EDIT_ETF_PORTFOLIO_POSITION
    }
}

export const fetchEtfPortfolioPositionList = (data) => {
    return {
        type: FETCH_ETF_PORTFOLIO_POSITION_LIST,
        payload: data
    }
}

export const fetchCurrentEtfPortfolioPosition = (data) => {
    return {
        type: FETCH_CURRENT_ETF_PORTFOLIO_POSITION,
        payload: data
    }
}

export const showEditEtfPortfolioPositionModal = () => {
    return {
        type: SHOW_EDIT_ETF_PORTFOLIO_POSITION_MODAL
    }
}

export const hideEditEtfPortfolioPositionModal = () => {
    return {
        type: HIDE_EDIT_ETF_PORTFOLIO_POSITION_MODAL
    }
}
