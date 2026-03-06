import {
    FETCH_BOND_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_BOND_PORTFOLIO_POSITION,
    FETCH_BOND_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_BOND_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_BOND_PORTFOLIO_POSITION_MODAL,
    SHOW_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/bondPortfolioTypes'

const initialState = {
    bondPortfolioPositionListData: {},
    currentBondPortfolioPosition: {},
    bondPortfolioTotalSum: 0,
    editBondPortfolioPositionModalIsOpened: false,
    editBondPortfolioTotalSumModalIsOpened: false
}

export const bondPortfolioReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_BOND_PORTFOLIO_POSITION_LIST:
            return {...state, bondPortfolioPositionListData: {...action.payload}}

        case FETCH_CURRENT_BOND_PORTFOLIO_POSITION:
            return {...state, currentBondPortfolioPosition: {...action.payload}}

        case FETCH_BOND_PORTFOLIO_TOTAL_SUM:
            return {...state, bondPortfolioTotalSum: action.payload}

        case SHOW_EDIT_BOND_PORTFOLIO_POSITION_MODAL:
            return {...state, editBondPortfolioPositionModalIsOpened: true}
        
        case HIDE_EDIT_BOND_PORTFOLIO_POSITION_MODAL:
            return {...state, editBondPortfolioPositionModalIsOpened: false}

        case SHOW_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editBondPortfolioTotalSumModalIsOpened: true}
        
        case HIDE_EDIT_BOND_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editBondPortfolioTotalSumModalIsOpened: false}

        default: return state
    }
}