import {
    SAGA_MOMENTUM_MONITOR,
    FETCH_MOMENTUM_MONITOR
} from '../types/momentumTypes'

export const sagaMomentumMonitor = () => {
    return {
        type: SAGA_MOMENTUM_MONITOR
    }
}

export const fetchMomentumMonitor = (data) => {
    return {
        type: FETCH_MOMENTUM_MONITOR,
        payload: data
    }
}
