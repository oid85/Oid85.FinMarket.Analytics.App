import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchWeekTrendDelta} from '../actions/weekTrendDeltaActions'
import {
    SAGA_WEEK_TREND_DELTA
} from '../types/weekTrendDeltaTypes'
import {
    getWeekTrendDeltaFromApi
} from '../api/weekTrendDeltaApi'

export function* sagaWatcherWeekTrendDelta() {
    yield takeEvery(SAGA_WEEK_TREND_DELTA, sagaWorkerWeekTrendDelta)
}

function* sagaWorkerWeekTrendDelta() {
    let result = yield call(getWeekTrendDeltaFromApi)    
    yield put(fetchWeekTrendDelta(result))
}
