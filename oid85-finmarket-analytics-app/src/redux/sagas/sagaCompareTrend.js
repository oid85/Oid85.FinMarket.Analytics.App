import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchCompareTrend} from '../actions/compareTrendActions'
import {
    SAGA_COMPARE_TREND
} from '../types/compareTrendTypes'
import {
    getCompareTrendFromApi
} from '../api/compareTrendApi'

export function* sagaWatcherCompareTrend() {
    yield takeEvery(SAGA_COMPARE_TREND, sagaWorkerCompareTrend)
}

function* sagaWorkerCompareTrend() {
    let getCompareTrendResult = yield call(getCompareTrendFromApi)    
    yield put(fetchCompareTrend(getCompareTrendResult))
}
