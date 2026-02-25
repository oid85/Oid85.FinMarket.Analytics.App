import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchPortfolioPositionList} from '../actions/portfolioActions'
import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_PORTFOLIO_POSITION,
    SAGA_EDIT_PORTFOLIO_TOTAL_SUM
} from '../types/portfolioTypes'
import {
    getPortfolioPositionListFromApi,
    editPortfolioPositionFromApi,
    editPortfolioTotalSumFromApi
} from '../api/portfolioApi'

const currentPortfolioPosition = (state) => state.portfolio.currentPortfolioPosition
const portfolioTotalSum = (state) => state.portfolio.portfolioTotalSum

export function* sagaWatcherPortfolio() {
    yield takeEvery(SAGA_PORTFOLIO_POSITION_LIST, sagaWorkerPortfolioPositionList)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_POSITION, sagaWorkerEditPortfolioPosition)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_TOTAL_SUM, sagaWorkerEditPortfolioTotalSum)
}

function* sagaWorkerPortfolioPositionList() {
    let getPortfolioPositionListResult = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(getPortfolioPositionListResult))
}

function* sagaWorkerEditPortfolioPosition() {
    let portfolioPosition = yield select(currentPortfolioPosition)    
    yield call(editPortfolioPositionFromApi, portfolioPosition.ticker, portfolioPosition.dividendCoefficient, portfolioPosition.manualCoefficient)  
    let getPortfolioPositionListResult = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(getPortfolioPositionListResult))  
}

function* sagaWorkerEditPortfolioTotalSum() {
    let totalSum = yield select(portfolioTotalSum)    
    yield call(editPortfolioTotalSumFromApi, totalSum)  
    let getPortfolioPositionListResult = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(getPortfolioPositionListResult))  
}
