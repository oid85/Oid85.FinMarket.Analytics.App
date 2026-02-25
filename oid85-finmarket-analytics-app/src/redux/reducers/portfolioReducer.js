import {
    FETCH_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_PORTFOLIO_POSITION,
    FETCH_PORTFOLIO_TOTAL_SUM,
    SHOW_EDIT_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_PORTFOLIO_POSITION_MODAL,
    SHOW_EDIT_PORTFOLIO_TOTAL_SUM_MODAL,
    HIDE_EDIT_PORTFOLIO_TOTAL_SUM_MODAL
} from '../types/portfolioTypes'

const initialState = {
    portfolioPositionListData: {},
    currentPortfolioPosition: {},
    portfolioTotalSum: 0,
    editPortfolioPositionModalIsOpened: false,
    editPortfolioTotalSumModalIsOpened: false
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PORTFOLIO_POSITION_LIST:
            return {...state, portfolioPositionListData: {...action.payload}}

        case FETCH_CURRENT_PORTFOLIO_POSITION:
            return {...state, currentPortfolioPosition: {...action.payload}}

        case FETCH_PORTFOLIO_TOTAL_SUM:
            return {...state, portfolioTotalSum: action.payload}

        case SHOW_EDIT_PORTFOLIO_POSITION_MODAL:
            return {...state, editPortfolioPositionModalIsOpened: true}
        
        case HIDE_EDIT_PORTFOLIO_POSITION_MODAL:
            return {...state, editPortfolioPositionModalIsOpened: false}

        case SHOW_EDIT_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editPortfolioTotalSumModalIsOpened: true}
        
        case HIDE_EDIT_PORTFOLIO_TOTAL_SUM_MODAL:
            return {...state, editPortfolioTotalSumModalIsOpened: false}

        default: return state
    }
}