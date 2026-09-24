import { 
    FETCH_FILTER_TYPE
} from '../types/filterTypes'

const initialState = {
    filterType: null
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_FILTER_TYPE:
            return {...state, filterType: action.payload}
        
        default: return state
    }
}
