import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchMomentumMonitor
} from '../actions/momentumActions'
import {
    SAGA_MOMENTUM_MONITOR
} from '../types/momentumTypes'
import {
    getMomentumMonitorFromApi
} from '../api/momentumApi'

export function* sagaWatcherMomentum() {
    yield takeEvery(SAGA_MOMENTUM_MONITOR, sagaWorkerMomentumMonitor)
}

function* sagaWorkerMomentumMonitor() {
    let result = yield call(getMomentumMonitorFromApi)     
    yield put(fetchMomentumMonitor(result))     
}
