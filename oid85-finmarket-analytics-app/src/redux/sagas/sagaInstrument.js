import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchInstrumentList} from '../actions/instrumentActions'
import {
    SAGA_INSTRUMENT_LIST,
    SAGA_INSTRUMENT_SELECT
} from '../types/instrumentTypes'
import {
    getInstrumentListFromApi,
    selectInstrumentFromApi
} from '../api/instrumentApi'

const currentInstrument = (state) => state.instrument.currentInstrument

export function* sagaWatcherInstrument() {
    yield takeEvery(SAGA_INSTRUMENT_LIST, sagaWorkerInstrumentList)
    yield takeEvery(SAGA_INSTRUMENT_SELECT, sagaWorkerInstrumentSelect)
}

function* sagaWorkerInstrumentList() {
    let sagaWorkerInstrumentList = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(sagaWorkerInstrumentList))
}

function* sagaWorkerInstrumentSelect() {
    let instrument = yield select(currentInstrument)
    yield call(selectInstrumentFromApi, instrument.id)    
    let sagaWorkerInstrumentList = yield call(getInstrumentListFromApi)    
    yield put(fetchInstrumentList(sagaWorkerInstrumentList))
}
