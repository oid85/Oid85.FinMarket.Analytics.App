import {
    SAGA_TREND_DYNAMIC,
    FETCH_TREND_DYNAMIC
} from '../types/trendDynamicTypes'


export const sagaTrendDynamic = () => {
    return {
        type: SAGA_TREND_DYNAMIC
    }
}

export const fetchTrendDynamic = (data) => {
    return {
        type: FETCH_TREND_DYNAMIC,
        payload: data
    }
}
