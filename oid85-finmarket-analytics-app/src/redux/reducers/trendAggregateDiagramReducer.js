import {
    FETCH_TREND_AGGREGATE_DIAGRAM    
} from '../types/trendAggregateDiagramTypes'

const initialState = {
    trendAggregateDiagramData: {}
}

export const trendAggregateDiagramReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_TREND_AGGREGATE_DIAGRAM:
            return {...state, trendAggregateDiagramData: {...action.payload}}

        default: return state
    }
}