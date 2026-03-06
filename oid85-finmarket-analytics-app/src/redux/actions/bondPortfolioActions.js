import {
    SAGA_BOND_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_BOND_PORTFOLIO_POSITION,
    SAGA_EDIT_BOND_PORTFOLIO_TOTAL_SUM,
    FETCH_BOND_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_BOND_PORTFOLIO_POSITION,
    FETCH_BOND_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_BOND_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_BOND_PORTFOLIO_POSITION_MODAL,
    SHOW_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/bondPortfolioTypes'


export const sagaBondPortfolioPositionList = () => {
    return {
        type: SAGA_BOND_PORTFOLIO_POSITION_LIST
    }
}

export const sagaEditBondPortfolioPosition = () => {
    return {
        type: SAGA_EDIT_BOND_PORTFOLIO_POSITION
    }
}

export const sagaEditBondPortfolioTotalSum = () => {
    return {
        type: SAGA_EDIT_BOND_PORTFOLIO_TOTAL_SUM
    }
}

export const fetchBondPortfolioPositionList = (data) => {
    return {
        type: FETCH_BOND_PORTFOLIO_POSITION_LIST,
        payload: data
    }
}

export const fetchCurrentBondPortfolioPosition = (data) => {
    return {
        type: FETCH_CURRENT_BOND_PORTFOLIO_POSITION,
        payload: data
    }
}

export const fetchBondPortfolioTotalSum = (data) => {
    return {
        type: FETCH_BOND_PORTFOLIO_TOTAL_SUM,
        payload: data
    }
}

export const showEditBondPortfolioPositionModal = () => {
    return {
        type: SHOW_EDIT_BOND_PORTFOLIO_POSITION_MODAL
    }
}

export const hideEditBondPortfolioPositionModal = () => {
    return {
        type: HIDE_EDIT_BOND_PORTFOLIO_POSITION_MODAL
    }
}

export const showEditBondPortfolioTotalSumModal = () => {
    return {
        type: SHOW_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL
    }
}

export const hideEditBondPortfolioTotalSumModal = () => {
    return {
        type: HIDE_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL
    }
}
