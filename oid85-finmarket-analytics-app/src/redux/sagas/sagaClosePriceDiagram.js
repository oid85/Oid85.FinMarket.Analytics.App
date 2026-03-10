import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchClosePriceDiagram} from '../actions/closePriceDiagramActions'
import {
    SAGA_CLOSE_PRICE_DIAGRAM
} from '../types/closePriceDiagramTypes'
import {
    getClosePriceDiagramFromApi
} from '../api/closePriceDiagramApi'

export function* sagaWatcherClosePriceDiagram() {
    yield takeEvery(SAGA_CLOSE_PRICE_DIAGRAM, sagaWorkerClosePriceDiagram)
}

function* sagaWorkerClosePriceDiagram() {
    let result = yield call(getClosePriceDiagramFromApi)    
    yield put(fetchClosePriceDiagram(result))
}
