import {
    FETCH_INSTRUMENT_LIST,
    FETCH_CURRENT_INSTRUMENT    
} from '../types/instrumentTypes'

const initialState = {
    instrumentListData: {},
    currentInstrument: {}
}

export const instrumentReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_INSTRUMENT_LIST:
            return {...state, instrumentListData: {...action.payload}}

        case FETCH_CURRENT_INSTRUMENT:
            return {...state, currentInstrument: {...action.payload}}

        default: return state
    }
}