import {
    SAGA_MACRO_PARAMETER_LIST,
    SAGA_EDIT_MACRO_PARAMETER,
    FETCH_MACRO_PARAMETER_LIST,
    FETCH_CURRENT_MACRO_PARAMETER,
    SHOW_EDIT_MACRO_PARAMETER_MODAL,
    HIDE_EDIT_MACRO_PARAMETER_MODAL
} from '../types/macroParameterTypes'


export const sagaMacroParameterList = () => {
    return {
        type: SAGA_MACRO_PARAMETER_LIST
    }
}

export const sagaEditMacroParameter = () => {
    return {
        type: SAGA_EDIT_MACRO_PARAMETER
    }
}

export const fetchMacroParameterList = (data) => {
    return {
        type: FETCH_MACRO_PARAMETER_LIST,
        payload: data
    }
}

export const fetchCurrentMacroParameter = (data) => {
    return {
        type: FETCH_CURRENT_MACRO_PARAMETER,
        payload: data
    }
}

export const showEditMacroParameterModal = () => {
    return {
        type: SHOW_EDIT_MACRO_PARAMETER_MODAL
    }
}

export const hideEditMacroParameterModal = () => {
    return {
        type: HIDE_EDIT_MACRO_PARAMETER_MODAL
    }
}
