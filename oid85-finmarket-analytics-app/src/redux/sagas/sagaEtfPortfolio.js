import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchEtfPortfolioPositionList} from '../actions/etfPortfolioActions'
import {
    SAGA_ETF_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_ETF_PORTFOLIO_POSITION
} from '../types/etfPortfolioTypes'
import {
    getEtfPortfolioPositionListFromApi,
    editEtfPortfolioPositionFromApi
} from '../api/etfPortfolioApi'

const currentEtfPortfolioPosition = (state) => state.etfPortfolio.currentEtfPortfolioPosition

export function* sagaWatcherEtfPortfolio() {
    yield takeEvery(SAGA_ETF_PORTFOLIO_POSITION_LIST, sagaWorkerEtfPortfolioPositionList)
    yield takeEvery(SAGA_EDIT_ETF_PORTFOLIO_POSITION, sagaWorkerEditEtfPortfolioPosition)    
}

function* sagaWorkerEtfPortfolioPositionList() {
    let result = yield call(getEtfPortfolioPositionListFromApi)    
    yield put(fetchEtfPortfolioPositionList(result))
}

function* sagaWorkerEditEtfPortfolioPosition() {
    let etfPortfolioPosition = yield select(currentEtfPortfolioPosition)    
    yield call(editEtfPortfolioPositionFromApi, etfPortfolioPosition.ticker, etfPortfolioPosition.manualCoefficient, etfPortfolioPosition.lifeSize)  
    let result = yield call(getEtfPortfolioPositionListFromApi)    
    yield put(fetchEtfPortfolioPositionList(result))  
}
