import {
    FETCH_INSTRUMENT_LIST    
} from '../types/instrumentTypes'

const initialState = {
    instrumentListData: {}
}

export const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_INSTRUMENT_LIST:
            return {...state, instrumentListData: {...action.payload}}

        default: return state
    }
}