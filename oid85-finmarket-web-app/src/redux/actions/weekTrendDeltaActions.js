import {
    SAGA_WEEK_TREND_DELTA,
    FETCH_WEEK_TREND_DELTA
} from '../types/weekTrendDeltaTypes'


export const sagaWeekTrendDelta = () => {
    return {
        type: SAGA_WEEK_TREND_DELTA
    }
}

export const fetchWeekTrendDelta = (data) => {
    return {
        type: FETCH_WEEK_TREND_DELTA,
        payload: data
    }
}
