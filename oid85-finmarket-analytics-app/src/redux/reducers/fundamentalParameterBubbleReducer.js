import {
    FETCH_FUNDAMENTAL_PARAMETER_BUBBLE
} from '../types/fundamentalParameterBubbleTypes'

const initialState = {
    fundamentalParameterBubbleData: {}
}

export const fundamentalParameterBubbleReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_FUNDAMENTAL_PARAMETER_BUBBLE:
            return {...state, fundamentalParameterBubbleData: {...action.payload}}

        default: return state
    }
}