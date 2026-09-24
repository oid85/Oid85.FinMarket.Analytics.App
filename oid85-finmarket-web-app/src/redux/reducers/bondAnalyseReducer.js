import {
    FETCH_BOND_ANALYSE    
} from '../types/bondAnalyseTypes'

const initialState = {
    bondAnalyseData: {}
}

export const bondAnalyseReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_BOND_ANALYSE:
            return {...state, bondAnalyseData: {...action.payload}}

        default: return state
    }
}