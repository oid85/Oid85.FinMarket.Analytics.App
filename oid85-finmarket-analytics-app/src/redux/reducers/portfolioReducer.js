import {
    FETCH_PORTFOLIO_POSITION_LIST,
    FETCH_CURRENT_PORTFOLIO_POSITION,
    SHOW_EDIT_PORTFOLIO_POSITION_MODAL,
    HIDE_EDIT_PORTFOLIO_POSITION_MODAL
} from '../types/portfolioTypes'

const initialState = {
    portfolioPositionListData: {},
    currentPortfolioPosition: {},
    editPortfolioPositionModalIsOpened: false
}

export const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PORTFOLIO_POSITION_LIST:
            return {...state, portfolioPositionListData: {...action.payload}}

        case FETCH_CURRENT_PORTFOLIO_POSITION:
            return {...state, currentPortfolioPosition: {...action.payload}}

        case SHOW_EDIT_PORTFOLIO_POSITION_MODAL:
            return {...state, editPortfolioPositionModalIsOpened: true}
        
        case HIDE_EDIT_PORTFOLIO_POSITION_MODAL:
            return {...state, editPortfolioPositionModalIsOpened: false}

        default: return state
    }
}