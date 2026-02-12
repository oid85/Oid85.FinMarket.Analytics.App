import {
    FETCH_WEEK_TREND_DELTA    
} from '../types/weekTrendDeltaTypes'

const initialState = {
    weekTrendDeltaData: {}
}

export const weekTrendDeltaReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_WEEK_TREND_DELTA:
            return {...state, weekTrendDeltaData: {...action.payload}}

        default: return state
    }
}