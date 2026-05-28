import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioPositionList,
    fetchPortfolioBacktest
} from '../actions/portfolioActions'
import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_EDIT_PORTFOLIO_POSITION,
    SAGA_EDIT_PORTFOLIO_TOTAL_SUM
} from '../types/portfolioTypes'
import {
    getPortfolioPositionListFromApi,
    getPortfolioBacktestFromApi,
    editPortfolioPositionFromApi
} from '../api/portfolioApi'

const currentPortfolioPosition = (state) => state.portfolio.currentPortfolioPosition

export function* sagaWatcherPortfolio() {
    yield takeEvery(SAGA_PORTFOLIO_POSITION_LIST, sagaWorkerPortfolioPositionList)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST, sagaWorkerPortfolioBacktest)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_POSITION, sagaWorkerEditPortfolioPosition)
}

function* sagaWorkerPortfolioPositionList() {
    let result = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(result))
}

function* sagaWorkerPortfolioBacktest() {
    let result = yield call(getPortfolioBacktestFromApi)    
    yield put(fetchPortfolioBacktest(result))
}

function* sagaWorkerEditPortfolioPosition() {
    let portfolioPosition = yield select(currentPortfolioPosition)    
    yield call(editPortfolioPositionFromApi, portfolioPosition.ticker, portfolioPosition.manualCoefficient, portfolioPosition.lifeSize)  
    let result = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(result))  
}
