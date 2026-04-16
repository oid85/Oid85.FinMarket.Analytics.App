import {
    SAGA_FUNDAMENTAL_PARAMETER_LIST,
    SAGA_EDIT_FUNDAMENTAL_PARAMETER,
    SAGA_FUNDAMENTAL_BY_SECTOR,
    SAGA_FUNDAMENTAL_BY_COMPANY,
    FETCH_FUNDAMENTAL_PARAMETER_LIST,
    FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
    FETCH_FUNDAMENTAL_BY_SECTOR,
    FETCH_FUNDAMENTAL_BY_COMPANY,
    FETCH_CURRENT_SECTOR,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_MODAL
} from '../types/fundamentalParameterTypes'


export const sagaFundamentalBySector = () => {
    return {
        type: SAGA_FUNDAMENTAL_BY_SECTOR
    }
}

export const sagaFundamentalByCompany = () => {
    return {
        type: SAGA_FUNDAMENTAL_BY_COMPANY
    }
}

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

export const fetchFundamentalBySector = (data) => {
    return {
        type: FETCH_FUNDAMENTAL_BY_SECTOR,
        payload: data
    }
}

export const fetchFundamentalByCompany = (data) => {
    return {
        type: FETCH_FUNDAMENTAL_BY_COMPANY,
        payload: data
    }
}

export const fetchCurrentFundamentalParameter = (data) => {
    return {
        type: FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
        payload: data
    }
}

export const fetchCurrentSector = (data) => {
    return {
        type: FETCH_CURRENT_SECTOR,
        payload: data
    }
}

export const showEditFundamentalParameterModal = () => {
    return {
        type: SHOW_EDIT_FUNDAMENTAL_PARAMETER_MODAL
    }
}

export const hideEditFundamentalParameterModal = () => {
    return {
        type: HIDE_EDIT_FUNDAMENTAL_PARAMETER_MODAL
    }
}
