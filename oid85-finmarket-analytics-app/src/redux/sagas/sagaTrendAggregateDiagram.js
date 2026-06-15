import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchTrendAggregateDiagram} from '../actions/trendAggregateDiagramActions'
import {
    SAGA_TREND_AGGREGATE_DIAGRAM
} from '../types/trendAggregateDiagramTypes'
import {
    getTrendAggregateDiagramFromApi
} from '../api/trendAggregateDiagramApi'

export function* sagaWatcherTrendAggregateDiagram() {
    yield takeEvery(SAGA_TREND_AGGREGATE_DIAGRAM, sagaWorkerTrendAggregateDiagram)
}

function* sagaWorkerTrendAggregateDiagram() {
    let result = yield call(getTrendAggregateDiagramFromApi)    
    yield put(fetchTrendAggregateDiagram(result))
}
