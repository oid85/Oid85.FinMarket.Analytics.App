import {
    FETCH_FUNDAMENTAL_PARAMETER_LIST,    
    FETCH_FUNDAMENTAL_RATING_LIST,    
    FETCH_CURRENT_FUNDAMENTAL_PARAMETER,
    FETCH_FUNDAMENTAL_BY_SECTOR,
    FETCH_FUNDAMENTAL_BY_COMPANY,
    FETCH_CURRENT_SECTOR,
    SHOW_EDIT_FUNDAMENTAL_PARAMETER_MODAL,
    HIDE_EDIT_FUNDAMENTAL_PARAMETER_MODAL
} from '../types/fundamentalParameterTypes'

const initialState = {
    fundamentalParameterListData: {},
    fundamentalRatingListData: {},
    fundamentalBySectorData: {},
    fundamentalByCompanyData: {},
    currentFundamentalParameter: {},    
    currentSector: { name: 'Металлургия' },
    editFundamentalParameterModalIsOpened: false
}

export const fundamentalParameterReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_FUNDAMENTAL_PARAMETER_LIST:
            return {...state, fundamentalParameterListData: {...action.payload}}

        case FETCH_FUNDAMENTAL_RATING_LIST:
            return {...state, fundamentalRatingListData: {...action.payload}}

        case FETCH_CURRENT_FUNDAMENTAL_PARAMETER:
            return {...state, currentFundamentalParameter: {...action.payload}}

        case FETCH_FUNDAMENTAL_BY_SECTOR:
            return {...state, fundamentalBySectorData: {...action.payload}}

        case FETCH_FUNDAMENTAL_BY_COMPANY:
            return {...state, fundamentalByCompanyData: {...action.payload}}

        case FETCH_CURRENT_SECTOR:
            return {...state, currentSector: {...action.payload}}

        case SHOW_EDIT_FUNDAMENTAL_PARAMETER_MODAL:
            return {...state, editFundamentalParameterModalIsOpened: true}
        
        case HIDE_EDIT_FUNDAMENTAL_PARAMETER_MODAL:
            return {...state, editFundamentalParameterModalIsOpened: false}

        default: return state
    }
}