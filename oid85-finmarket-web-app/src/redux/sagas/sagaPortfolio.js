import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioPositionList,
    fetchPortfolioBacktest
} from '../actions/portfolioActions'
import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_EDIT_PORTFOLIO_POSITION
} from '../types/portfolioTypes'
import {
    getPortfolioPositionListFromApi,
    getPortfolioBacktestFromApi,
    editPortfolioPositionFromApi
} from '../api/portfolioApi'

const currentPortfolioPosition = (state) => state.portfolio.currentPortfolioPosition
const currentPortfolioName = (state) => state.portfolio.portfolioName
const currentOrderField = (state) => state.order.orderField

export function* sagaWatcherPortfolio() {
    yield takeEvery(SAGA_PORTFOLIO_POSITION_LIST, sagaWorkerPortfolioPositionList)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST, sagaWorkerPortfolioBacktest)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_POSITION, sagaWorkerEditPortfolioPosition)
}

function* sagaWorkerPortfolioPositionList() {
    let orderField = yield select(currentOrderField)
    let result = yield call(getPortfolioPositionListFromApi, orderField)    
    yield put(fetchPortfolioPositionList(result))
}

function* sagaWorkerPortfolioBacktest() {
    let portfolioName = yield select(currentPortfolioName)
    let result = yield call(getPortfolioBacktestFromApi, portfolioName)    
    yield put(fetchPortfolioBacktest(result))
}

function* sagaWorkerEditPortfolioPosition() {
    let portfolioPosition = yield select(currentPortfolioPosition)
    yield call(editPortfolioPositionFromApi, portfolioPosition.ticker, portfolioPosition.manualCoefficient, portfolioPosition.lifeSize)  
    let result = yield call(getPortfolioPositionListFromApi)    
    yield put(fetchPortfolioPositionList(result))  
}
