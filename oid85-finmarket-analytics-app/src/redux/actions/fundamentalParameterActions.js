import {
    SAGA_FUNDAMENTAL_PARAMETER_LIST,
    SAGA_EDIT_FUNDAMENTAL_PARAMETER,
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
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL
} from '../types/fundamentalParameterTypes'


export const sagaFundamentalParameterList = () => {
    return {
        type: SAGA_FUNDAMENTAL_PARAMETER_LIST
    }
}

export const sagaEditFundamentalParameter = () => {
    return {
        type: SAGA_EDIT_FUNDAMENTAL_PARAMETER
    }
}

export const fetchFundamentalParameterList = (data) => {
    return {
        type: FETCH_FUNDAMENTAL_PARAMETER_LIST,
        payload: data
    }
}

export const fetchCurrentFundamentalParameter = (data) => {
    return {
        type: FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
        payload: data
    }
}

export const showEditFundamentalParameterPeModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL
    }
}

export const hideEditFundamentalParameterPeModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_PE_MODAL
    }
}

export const showEditFundamentalParameterRevenueModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL
    }
}

export const hideEditFundamentalParameterRevenueModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_REVENUE_MODAL
    }
}

export const showEditFundamentalParameterNetProfitModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL
    }
}

export const hideEditFundamentalParameterNetProfitModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_NET_PROFIT_MODAL
    }
}

export const showEditFundamentalParameterEbitdaModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL
    }
}

export const hideEditFundamentalParameterEbitdaModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_EBITDA_MODAL
    }
}

export const showEditFundamentalParameterEvModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL
    }
}

export const hideEditFundamentalParameterEvModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_EV_MODAL
    }
}

export const showEditFundamentalParameterPbvModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL
    }
}

export const hideEditFundamentalParameterPbvModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_PBV_MODAL
    }
}

export const showEditFundamentalParameterRoaModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL
    }
}

export const hideEditFundamentalParameterRoaModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_ROA_MODAL
    }
}
