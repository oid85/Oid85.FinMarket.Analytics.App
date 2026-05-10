import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchFundamentalParameterList, 
    fetchFundamentalRatingList, 
    fetchFundamentalBySector, 
    fetchFundamentalByCompany
} from '../actions/fundamentalParameterActions'
import {
    SAGA_FUNDAMENTAL_PARAMETER_LIST,
    SAGA_FUNDAMENTAL_RATING_LIST,
    SAGA_FUNDAMENTAL_BY_SECTOR,
    SAGA_FUNDAMENTAL_BY_COMPANY,
    SAGA_EDIT_FUNDAMENTAL_PARAMETER,
    SAGA_DELETE_FUNDAMENTAL_PARAMETER
} from '../types/fundamentalParameterTypes'
import {
    getFundamentalParameterListFromApi,
    getFundamentalRatingListFromApi,
    getFundamentalBySectorFromApi,
    getFundamentalByCompanyFromApi,
    editFundamentalParameterFromApi,
    deleteFundamentalParameterFromApi
} from '../api/fundamentalParameterApi'

const currentFundamentalParameter = (state) => state.fundamentalParameter.currentFundamentalParameter
const currentSector = (state) => state.fundamentalParameter.currentSector
const currentInstrument = (state) => state.instrument.currentInstrument

export function* sagaWatcherFundamentalParameter() {
    yield takeEvery(SAGA_FUNDAMENTAL_PARAMETER_LIST, sagaWorkerFundamentalParameterList)
    yield takeEvery(SAGA_FUNDAMENTAL_RATING_LIST, sagaWorkerFundamentalRatingList)
    yield takeEvery(SAGA_FUNDAMENTAL_BY_SECTOR, sagaWorkerFundamentalBySector)
    yield takeEvery(SAGA_FUNDAMENTAL_BY_COMPANY, sagaWorkerFundamentalByCompany)
    yield takeEvery(SAGA_EDIT_FUNDAMENTAL_PARAMETER, sagaWorkerEditFundamentalParameter)
    yield takeEvery(SAGA_DELETE_FUNDAMENTAL_PARAMETER, sagaWorkerDeleteFundamentalParameter)
}

function* sagaWorkerFundamentalParameterList() {
    let result = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(result))
}

function* sagaWorkerFundamentalRatingList() {
    let result = yield call(getFundamentalRatingListFromApi)    
    yield put(fetchFundamentalRatingList(result))
}

function* sagaWorkerFundamentalBySector() {
    let sector = yield select(currentSector)
    let result = yield call(getFundamentalBySectorFromApi, sector.name)    
    yield put(fetchFundamentalBySector(result))
}

function* sagaWorkerFundamentalByCompany() {
    let instrument = yield select(currentInstrument)
    let result = yield call(getFundamentalByCompanyFromApi, instrument.ticker)    
    yield put(fetchFundamentalByCompany(result))
}

function* sagaWorkerEditFundamentalParameter() {
    let fundamentalParameter = yield select(currentFundamentalParameter)    
    yield call(editFundamentalParameterFromApi, fundamentalParameter.ticker, fundamentalParameter.type, fundamentalParameter.period, fundamentalParameter.value, fundamentalParameter.extData)
    let result = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(result))  
}

function* sagaWorkerDeleteFundamentalParameter() {
    let fundamentalParameter = yield select(currentFundamentalParameter)    
    yield call(deleteFundamentalParameterFromApi, fundamentalParameter.ticker, fundamentalParameter.type, fundamentalParameter.period)
    let result = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(result))  
}
