import {
    SAGA_INSTRUMENT_LIST,
    SAGA_INSTRUMENT_SELECT,
    FETCH_INSTRUMENT_LIST,
    FETCH_CURRENT_INSTRUMENT
} from '../types/instrumentTypes'


export const sagaInstrumentList = () => {
    return {
        type: SAGA_INSTRUMENT_LIST
    }
}

export const sagaInstrumentSelect = () => {
    return {
        type: SAGA_INSTRUMENT_SELECT
    }
}

export const fetchInstrumentList = (data) => {
    return {
        type: FETCH_INSTRUMENT_LIST,
        payload: data
    }
}

export const fetchCurrentInstrument = (data) => {
    return {
        type: FETCH_CURRENT_INSTRUMENT,
        payload: data
    }
}
