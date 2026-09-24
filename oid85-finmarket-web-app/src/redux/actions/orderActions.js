import {
    FETCH_ORDER_FIELD
} from '../types/orderTypes'


export const fetchOrderField = (data) => {
    return {
        type: FETCH_ORDER_FIELD,
        payload: data
    }
}
