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

function* sagaWorkerMomentumMonitor() {
    let result = yield call(getMomentumMonitorFromApi)
    yield put(fetchMomentumMonitor(result))
}

function* sagaWorkerEditMomentumPortfolioTotalSum() {
    let totalSum = yield select(momentumPortfolioTotalSum)    
    yield call(editMomentumPortfolioTotalSumFromApi, totalSum)
    let result = yield call(getMomentumMonitorFromApi)
    yield put(fetchMomentumMonitor(result)) 
}