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
        fundamentalParameter.pe2026,

        fundamentalParameter.pbv2019,
        fundamentalParameter.pbv2020,
        fundamentalParameter.pbv2021,
        fundamentalParameter.pbv2022,
        fundamentalParameter.pbv2023,
        fundamentalParameter.pbv2024,
        fundamentalParameter.pbv2025,
        fundamentalParameter.pbv2026, 

        fundamentalParameter.roa2019,
        fundamentalParameter.roa2020,
        fundamentalParameter.roa2021,
        fundamentalParameter.roa2022,
        fundamentalParameter.roa2023,
        fundamentalParameter.roa2024,
        fundamentalParameter.roa2025,
        fundamentalParameter.roa2026, 

        fundamentalParameter.ev2019,
        fundamentalParameter.ev2020,
        fundamentalParameter.ev2021,
        fundamentalParameter.ev2022,
        fundamentalParameter.ev2023,
        fundamentalParameter.ev2024,
        fundamentalParameter.ev2025,        
        fundamentalParameter.ev2026, 

        fundamentalParameter.ebitda2019,
        fundamentalParameter.ebitda2020,
        fundamentalParameter.ebitda2021,
        fundamentalParameter.ebitda2022,
        fundamentalParameter.ebitda2023,
        fundamentalParameter.ebitda2024,
        fundamentalParameter.ebitda2025,
        fundamentalParameter.ebitda2026, 

        fundamentalParameter.netDebt2019,
        fundamentalParameter.netDebt2020,
        fundamentalParameter.netDebt2021,
        fundamentalParameter.netDebt2022,
        fundamentalParameter.netDebt2023,
        fundamentalParameter.netDebt2024,
        fundamentalParameter.netDebt2025,
        fundamentalParameter.netDebt2026,        

        fundamentalParameter.revenue2019,
        fundamentalParameter.revenue2020,
        fundamentalParameter.revenue2021,
        fundamentalParameter.revenue2022,
        fundamentalParameter.revenue2023,
        fundamentalParameter.revenue2024,
        fundamentalParameter.revenue2025,
        fundamentalParameter.revenue2026,
        
        fundamentalParameter.netProfit2019,
        fundamentalParameter.netProfit2020,
        fundamentalParameter.netProfit2021,
        fundamentalParameter.netProfit2022,
        fundamentalParameter.netProfit2023,
        fundamentalParameter.netProfit2024,
        fundamentalParameter.netProfit2025,
        fundamentalParameter.netProfit2026
        )  
    let getFundamentalParameterListResult = yield call(getFundamentalParameterListFromApi)    
    yield put(fetchFundamentalParameterList(getFundamentalParameterListResult))  
}
