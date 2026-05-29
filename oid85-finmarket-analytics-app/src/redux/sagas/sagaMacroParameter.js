import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchMacroParameterList, fetchMacroParameterDiagram} from '../actions/macroParameterActions'
import {
    SAGA_MACRO_PARAMETER_LIST,
    SAGA_MACRO_PARAMETER_DIAGRAM,
    SAGA_EDIT_MACRO_PARAMETER
} from '../types/macroParameterTypes'
import {
    getMacroParameterListFromApi,
    getMacroParameterDiagramFromApi,
    editMacroParameterFromApi
} from '../api/macroParameterApi'

const currentMacroParameter = (state) => state.macroParameter.currentMacroParameter

export function* sagaWatcherMacroParameter() {
    yield takeEvery(SAGA_MACRO_PARAMETER_LIST, sagaWorkerMacroParameterList)
    yield takeEvery(SAGA_MACRO_PARAMETER_DIAGRAM, sagaWorkerMacroParameterDiagram)
    yield takeEvery(SAGA_EDIT_MACRO_PARAMETER, sagaWorkerEditMacroParameter)
}

function* sagaWorkerMacroParameterList() {
    let result = yield call(getMacroParameterListFromApi)    
    yield put(fetchMacroParameterList(result))
}

function* sagaWorkerMacroParameterDiagram() {
    let result = yield call(getMacroParameterDiagramFromApi)    
    yield put(fetchMacroParameterDiagram(result))
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
    let result = yield call(getMacroParameterListFromApi)    
    yield put(fetchMacroParameterList(result))  
}
