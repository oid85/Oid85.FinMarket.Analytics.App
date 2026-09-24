import {
    FETCH_TREND_DYNAMIC    
} from '../types/trendDynamicTypes'

const initialState = {
    trendDynamicData: {}
}

export const trendDynamicReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TREND_DYNAMIC:
            return {...state, trendDynamicData: {...action.payload}}

        default: return state
    }
}