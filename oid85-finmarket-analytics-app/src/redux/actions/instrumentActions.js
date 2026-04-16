import {
    SAGA_INSTRUMENT_LIST,
    SAGA_INSTRUMENT_SELECT,
    SAGA_INSTRUMENT_PORTFOLIO,
    SAGA_SECTOR_LIST,
    FETCH_INSTRUMENT_LIST,
    FETCH_CURRENT_INSTRUMENT,
    FETCH_SECTOR_LIST
} from '../types/instrumentTypes'


export const sagaInstrumentList = () => {
    return {
        type: SAGA_INSTRUMENT_LIST
    }
}

export const sagaSectorList = () => {
    return {
        type: SAGA_SECTOR_LIST
    }
}

export const sagaInstrumentSelect = () => {
    return {
        type: SAGA_INSTRUMENT_SELECT
    }
}

export const sagaInstrumentPortfolio = () => {
    return {
        type: SAGA_INSTRUMENT_PORTFOLIO
    }
}

export const fetchInstrumentList = (data) => {
    return {
        type: FETCH_INSTRUMENT_LIST,
        payload: data
    }
}

export const fetchSectorList = (data) => {
    return {
        type: FETCH_SECTOR_LIST,
        payload: data
    }
}

export const fetchCurrentInstrument = (data) => {
    return {
        type: FETCH_CURRENT_INSTRUMENT,
        payload: data
    }
}
