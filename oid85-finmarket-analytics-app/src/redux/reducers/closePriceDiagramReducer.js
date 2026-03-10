import {
    FETCH_CLOSE_PRICE_DIAGRAM    
} from '../types/closePriceDiagramTypes'

const initialState = {
    closePriceDiagramData: {}
}

export const closePriceDiagramReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_CLOSE_PRICE_DIAGRAM:
            return {...state, closePriceDiagramData: {...action.payload}}

        default: return state
    }
}