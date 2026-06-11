import { 
    FETCH_ORDER_FIELD
} from '../types/orderTypes'

const initialState = {
    orderField: null
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_ORDER_FIELD:
            return {...state, orderField: action.payload}
        
        default: return state
    }
}
