import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchBondAnalyse} from '../actions/bondAnalyseActions'
import {
    SAGA_BOND_ANALYSE
} from '../types/bondAnalyseTypes'
import {
    getBondAnalyseFromApi
} from '../api/bondAnalyseApi'

export function* sagaWatcherBondAnalyse() {
    yield takeEvery(SAGA_BOND_ANALYSE, sagaWorkerBondAnalyse)
}

function* sagaWorkerBondAnalyse() {
    let getBondAnalyseResult = yield call(getBondAnalyseFromApi)    
    yield put(fetchBondAnalyse(getBondAnalyseResult))
}
