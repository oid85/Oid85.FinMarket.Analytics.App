import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchFundamentalParameterBubble} from '../actions/fundamentalParameterBubbleActions'
import {
    SAGA_FUNDAMENTAL_PARAMETER_BUBBLE
} from '../types/fundamentalParameterBubbleTypes'
import {
    getFundamentalParameterBubbleFromApi
} from '../api/fundamentalParameterBubbleApi'

export function* sagaWatcherFundamentalParameterBubble() {
    yield takeEvery(SAGA_FUNDAMENTAL_PARAMETER_BUBBLE, sagaWorkerFundamentalParameterBubble)
}

function* sagaWorkerFundamentalParameterBubble() {
    let getFundamentalParameterBubbleResult = yield call(getFundamentalParameterBubbleFromApi)    
    yield put(fetchFundamentalParameterBubble(getFundamentalParameterBubbleResult))
}
