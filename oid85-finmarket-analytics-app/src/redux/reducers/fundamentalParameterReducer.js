import {
    FETCH_FUNDAMENTAL_PARAMETER_LIST,
    FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_DEBT_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_DEBT_MODAL
} from '../types/fundamentalParameterTypes'

const initialState = {
    fundamentalParameterListData: {},
    currentFundamentalParameter: {},
    editFundamentalParameterPeModalIsOpened: false,
    editFundamentalParameterRevenueModalIsOpened: false,
    editFundamentalParameterNetProfitModalIsOpened: false,
    editFundamentalParameterEbitdaModalIsOpened: false,
    editFundamentalParameterEvModalIsOpened: false,
    editFundamentalParameterPbvModalIsOpened: false,
    editFundamentalParameterRoaModalIsOpened: false,
    editFundamentalParameterNetDebtModalIsOpened: false
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

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL:
            return {...state, editFundamentalParameterEbitdaModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL:
            return {...state, editFundamentalParameterEbitdaModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL:
            return {...state, editFundamentalParameterEvModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL:
            return {...state, editFundamentalParameterEvModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL:
            return {...state, editFundamentalParameterPbvModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL:
            return {...state, editFundamentalParameterPbvModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL:
            return {...state, editFundamentalParameterRoaModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL:
            return {...state, editFundamentalParameterRoaModalIsOpened: false}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_DEBT_MODAL:
            return {...state, editFundamentalParameterNetDebtModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_DEBT_MODAL:
            return {...state, editFundamentalParameterNetDebtModalIsOpened: false}

        default: return state
    }
}