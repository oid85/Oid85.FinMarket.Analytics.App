import {
    FETCH_ETF_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_ETF_PORTFOLIO_POSITION,
    SHOW_EDIT_ETF_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_ETF_PORTFOLIO_POSITION_MODAL
} from '../types/etfPortfolioTypes'

const initialState = {
    etfPortfolioPositionListData: {},
    currentEtfPortfolioPosition: {},
    editEtfPortfolioPositionModalIsOpened: false
}

export const etfPortfolioReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ETF_PORTFOLIO_POSITION_LIST:
            return {...state, etfPortfolioPositionListData: {...action.payload}}

        case FETCH_CURRENT_ETF_PORTFOLIO_POSITION:
            return {...state, currentEtfPortfolioPosition: {...action.payload}}

        case SHOW_EDIT_ETF_PORTFOLIO_POSITION_MODAL:
            return {...state, editEtfPortfolioPositionModalIsOpened: true}
        
        case HIDE_EDIT_ETF_PORTFOLIO_POSITION_MODAL:
            return {...state, editEtfPortfolioPositionModalIsOpened: false}

        default: return state
    }
}