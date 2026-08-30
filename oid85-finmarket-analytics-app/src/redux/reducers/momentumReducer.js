import {
    FETCH_MOMENTUM_MONITOR   
} from '../types/momentumTypes'

const initialState = {
    momentumMonitorData: {}
}

export const momentumReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MOMENTUM_MONITOR:
            return {...state, momentumMonitorData: {...action.payload}}
                
        default: return state
    }
}