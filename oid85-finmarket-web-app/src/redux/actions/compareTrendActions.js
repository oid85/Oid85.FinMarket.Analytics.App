import {
    SAGA_COMPARE_TREND,
    FETCH_COMPARE_TREND
} from '../types/compareTrendTypes'


export const sagaCompareTrend = () => {
    return {
        type: SAGA_COMPARE_TREND
    }
}

export const fetchCompareTrend = (data) => {
    return {
        type: FETCH_COMPARE_TREND,
        payload: data
    }
}
