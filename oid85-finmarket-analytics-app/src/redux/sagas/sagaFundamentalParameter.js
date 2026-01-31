import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchFundamentalParameterList} from '../actions/fundamentalParameterActions'
import {
    SAGA_FUNDAMENTAL_PARAMETER_LIST,
    SAGA_EDIT_FUNDAMENTAL_PARAMETER
} from '../types/fundamentalParameterTypes'
import {
    getFundamentalParameterListFromApi,
    editFundamentalParameterFromApi
} from '../api/fundamentalParameterApi'

const currentFundamentalParameter = (state) => state.fundamentalParameter.currentFundamentalParameter

export function* sagaWatcherFundamentalParameter() {
    yield takeEvery(SAGA_FUNDAMENTAL_PARAMETER_LIST, sagaWorkerFundamentalParameterList)
    yield takeEvery(SAGA_EDIT_FUNDAMENTAL_PARAMETER, sagaWorkerEditFundamentalParameter)
}

function* sagaWorkerFundamentalParameterList() {
    let getFundamentalParameterListResult = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(getFundamentalParameterListResult))
}

function* sagaWorkerEditFundamentalParameter() {
    let fundamentalParameter = yield select(currentFundamentalParameter)    
    yield call(editFundamentalParameterFromApi, 
        fundamentalParameter.ticker,
        fundamentalParameter.pe2019,
        fundamentalParameter.pe2020,
        fundamentalParameter.pe2021,
        fundamentalParameter.pe2022,
        fundamentalParameter.pe2023,
        fundamentalParameter.pe2024,
        fundamentalParameter.pe2025,
        fundamentalParameter.revenue2019,
        fundamentalParameter.revenue2020,
        fundamentalParameter.revenue2021,
        fundamentalParameter.revenue2022,
        fundamentalParameter.revenue2023,
        fundamentalParameter.revenue2024,
        fundamentalParameter.revenue2025,
        fundamentalParameter.netProfit2019,
        fundamentalParameter.netProfit2020,
        fundamentalParameter.netProfit2021,
        fundamentalParameter.netProfit2022,
        fundamentalParameter.netProfit2023,
        fundamentalParameter.netProfit2024,
        fundamentalParameter.netProfit2025
        )  
    let getFundamentalParameterListResult = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(getFundamentalParameterListResult))  
}
