import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchInstrumentList} from '../actions/instrumentActions'
import {
    SAGA_INSTRUMENT_LIST,
    SAGA_INSTRUMENT_SELECT,
    SAGA_INSTRUMENT_PORTFOLIO
} from '../types/instrumentTypes'
import {
    getInstrumentListFromApi,
    selectInstrumentFromApi,
    portfolioInstrumentFromApi
} from '../api/instrumentApi'

const currentInstrument = (state) => state.instrument.currentInstrument

export function* sagaWatcherInstrument() {
    yield takeEvery(SAGA_INSTRUMENT_LIST, sagaWorkerInstrumentList)
    yield takeEvery(SAGA_INSTRUMENT_SELECT, sagaWorkerInstrumentSelect)
    yield takeEvery(SAGA_INSTRUMENT_PORTFOLIO, sagaWorkerInstrumentPortfolio)
}

function* sagaWorkerInstrumentList() {
    let getInstrumentListResult = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(getInstrumentListResult))
}

function* sagaWorkerInstrumentSelect() {
    let instrument = yield select(currentInstrument)    
    yield call(selectInstrumentFromApi, instrument.ticker)  
    let getInstrumentListResult = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(getInstrumentListResult))     
}

function* sagaWorkerInstrumentPortfolio() {
    let instrument = yield select(currentInstrument)    
    yield call(portfolioInstrumentFromApi, instrument.ticker)  
    let getInstrumentListResult = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(getInstrumentListResult))     
}