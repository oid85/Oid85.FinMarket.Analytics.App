import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchMomentumMonitor
} from '../actions/momentumActions'
import {
    SAGA_MOMENTUM_MONITOR,
    SAGA_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM
} from '../types/momentumTypes'
import {
    getMomentumMonitorFromApi,
    editMomentumPortfolioTotalSumFromApi
} from '../api/momentumApi'

export function* sagaWatcherMomentum() {
    yield takeEvery(SAGA_MOMENTUM_MONITOR, sagaWorkerMomentumMonitor)
    yield takeEvery(SAGA_EDIT_MOMENTUM_PORTFOLIO_TOTAL_SUM, sagaWorkerEditMomentumPortfolioTotalSum)
}

const momentumPortfolioTotalSum = (state) => state.momentum.momentumPortfolioTotalSum
const momentumVersion = (state) => state.momentum.momentumVersion

function* sagaWorkerMomentumMonitor() {
    let version = yield select(momentumVersion)
    let result = yield call(getMomentumMonitorFromApi, version)
    yield put(fetchMomentumMonitor(result))
}

function* sagaWorkerEditMomentumPortfolioTotalSum() {
    let totalSum = yield select(momentumPortfolioTotalSum)
    let version = yield select(momentumVersion)
    yield call(editMomentumPortfolioTotalSumFromApi, totalSum)
    let result = yield call(getMomentumMonitorFromApi, version)
    yield put(fetchMomentumMonitor(result)) 
}