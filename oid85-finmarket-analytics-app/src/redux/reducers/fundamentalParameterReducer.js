import {
    FETCH_FUNDAMENTAL_PARAMETER_LIST,
    FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL
} from '../types/fundamentalParameterTypes'

const initialState = {
    fundamentalParameterListData: {},
    currentFundamentalParameter: {},
    editFundamentalParameterPeModalIsOpened: false,
    editFundamentalParameterRevenueModalIsOpened: false,
    editFundamentalParameterNetProfitModalIsOpened: false
}

export const fundamentalParameterReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_FUNDAMENTAL_PARAMETER_LIST:
            return {...state, fundamentalParameterListData: {...action.payload}}

        case FETCH_CURRENT_FUNDAMENTAL_PARAMETER:
            return {...state, currentFundamentalParameter: {...action.payload}}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL:
            return {...state, editFundamentalParameterPeModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL:
            return {...state, editFundamentalParameterPeModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL:
            return {...state, editFundamentalParameterRevenueModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL:
            return {...state, editFundamentalParameterRevenueModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL:
            return {...state, editFundamentalParameterNetProfitModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL:
            return {...state, editFundamentalParameterNetProfitModalIsOpened: false}

        default: return state
    }
}