import {
    FETCH_FILTER_TYPE
} from '../types/filterTypes'


export const fetchFilterType = (data) => {
    return {
        type: FETCH_FILTER_TYPE,
        payload: data
    }
}
