import {
    SAGA_BOND_ANALYSE,
    FETCH_BOND_ANALYSE
} from '../types/bondAnalyseTypes'


export const sagaBondAnalyse = () => {
    return {
        type: SAGA_BOND_ANALYSE
    }
}

export const fetchBondAnalyse = (data) => {
    return {
        type: FETCH_BOND_ANALYSE,
        payload: data
    }
}
