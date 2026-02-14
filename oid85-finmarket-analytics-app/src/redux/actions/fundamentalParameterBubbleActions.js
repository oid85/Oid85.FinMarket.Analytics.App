import {
    SAGA_FUNDAMENTAL_PARAMETER_BUBBLE,
    FETCH_FUNDAMENTAL_PARAMETER_BUBBLE
} from '../types/fundamentalParameterBubbleTypes'


export const sagaFundamentalParameterBubble = () => {
    return {
        type: SAGA_FUNDAMENTAL_PARAMETER_BUBBLE
    }
}

export const fetchFundamentalParameterBubble = (data) => {
    return {
        type: FETCH_FUNDAMENTAL_PARAMETER_BUBBLE,
        payload: data
    }
}
