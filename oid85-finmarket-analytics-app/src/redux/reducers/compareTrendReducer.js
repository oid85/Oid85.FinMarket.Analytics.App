import {
    FETCH_COMPARE_TREND    
} from '../types/compareTrendTypes'

const initialState = {
    compareTrendData: {}
}

export const compareTrendReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_COMPARE_TREND:
            return {...state, compareTrendData: {...action.payload}}

        default: return state
    }
}