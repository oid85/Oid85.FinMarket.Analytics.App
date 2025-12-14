import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchTrendDynamic} from '../actions/trendDynamicActions'
import {
    SAGA_TREND_DYNAMIC
} from '../types/trendDynamicTypes'
import {
    getTrendDynamicFromApi
} from '../api/trendDynamicApi'

export function* sagaWatcherTrendDynamic() {
    yield takeEvery(SAGA_TREND_DYNAMIC, sagaWorkerTrendDynamic)
}

function* sagaWorkerTrendDynamic() {
    let getTrendDynamicResult = yield call(getTrendDynamicFromApi)    
    yield put(fetchTrendDynamic(getTrendDynamicResult))
}
