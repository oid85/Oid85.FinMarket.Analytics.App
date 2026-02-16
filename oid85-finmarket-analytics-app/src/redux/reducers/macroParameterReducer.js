import {
    FETCH_MACRO_PARAMETER_LIST,
    FETCH_CURRENT_MACRO_PARAMETER,
    SHOW_EDIT_MACRO_PARAMETER_MODAL,
    HIDE_EDIT_MACRO_PARAMETER_MODAL
} from '../types/macroParameterTypes'

const initialState = {
    macroParameterListData: {},
    currentMacroParameter: {},
    editMacroParameterModalIsOpened: false
}

export const macroParameterReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MACRO_PARAMETER_LIST:
            return {...state, macroParameterListData: {...action.payload}}

        case FETCH_CURRENT_MACRO_PARAMETER:
            return {...state, currentMacroParameter: {...action.payload}}

        case SHOW_EDIT_MACRO_PARAMETER_MODAL:
            return {...state, editMacroParameterModalIsOpened: true}
        
        case HIDE_EDIT_MACRO_PARAMETER_MODAL:
            return {...state, editMacroParameterModalIsOpened: false}

        default: return state
    }
}