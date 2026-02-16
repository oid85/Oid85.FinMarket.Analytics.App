import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchMacroParameterList} from '../actions/macroParameterActions'
import {
    SAGA_MACRO_PARAMETER_LIST,
    SAGA_EDIT_MACRO_PARAMETER
} from '../types/macroParameterTypes'
import {
    getMacroParameterListFromApi,
    editMacroParameterFromApi
} from '../api/macroParameterApi'

const currentMacroParameter = (state) => state.macroParameter.currentMacroParameter

export function* sagaWatcherMacroParameter() {
    yield takeEvery(SAGA_MACRO_PARAMETER_LIST, sagaWorkerMacroParameterList)
    yield takeEvery(SAGA_EDIT_MACRO_PARAMETER, sagaWorkerEditMacroParameter)
}

function* sagaWorkerMacroParameterList() {
    let getMacroParameterListResult = yield call(getMacroParameterListFromApi)    
    yield put(fetchMacroParameterList(getMacroParameterListResult))
}

function* sagaWorkerEditMacroParameter() {
    let macroParameter = yield select(currentMacroParameter)    
    yield call(editMacroParameterFromApi, 
        macroParameter.date, 
        macroParameter.m0, 
        macroParameter.m1, 
        macroParameter.m2, 
        macroParameter.m2X, 
        macroParameter.consumerPriceIndexChange, 
        macroParameter.keyRate
        )  
    let getMacroParameterListResult = yield call(getMacroParameterListFromApi)    
    yield put(fetchMacroParameterList(getMacroParameterListResult))  
}
