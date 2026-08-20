import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioList,
    fetchPortfolioStrategyList,
    fetchPortfolioMonitor,
    fetchPortfolioBacktest,
    fetchPortfolioOptimization
} from '../actions/algoActions'
import {
    SAGA_PORTFOLIO_LIST,
    SAGA_PORTFOLIO_STRATEGY_LIST,
    SAGA_PORTFOLIO_MONITOR,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_PORTFOLIO_OPTIMIZATION
} from '../types/algoTypes'
import {
    getPortfolioListFromApi,
    getPortfolioStrategyListFromApi,
    getPortfolioMonitorFromApi,
    getPortfolioBacktestFromApi,
    getPortfolioOptimizationFromApi
} from '../api/algoApi'

const currentPortfolio = (state) => state.algo.currentPortfolio

export function* sagaWatcherAlgo() {
    yield takeEvery(SAGA_PORTFOLIO_LIST, sagaWorkerPortfolioList)
    yield takeEvery(SAGA_PORTFOLIO_STRATEGY_LIST, sagaWorkerPortfolioStrategyList)
    yield takeEvery(SAGA_PORTFOLIO_MONITOR, sagaWorkerPortfolioMonitor)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST, sagaWorkerPortfolioBacktest)
    yield takeEvery(SAGA_PORTFOLIO_OPTIMIZATION, sagaWorkerPortfolioOptimization)
}

function* sagaWorkerPortfolioList() {
    let result = yield call(getPortfolioListFromApi)    
    yield put(fetchPortfolioList(result))
}

function* sagaWorkerPortfolioStrategyList() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioStrategyListFromApi, portfolio.name)    
    yield put(fetchPortfolioStrategyList(result))
}

function* sagaWorkerPortfolioMonitor() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioMonitorFromApi, portfolio.name)     
    yield put(fetchPortfolioMonitor(result))     
}

function* sagaWorkerPortfolioBacktest() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioBacktestFromApi, portfolio.name)     
    yield put(fetchPortfolioBacktest(result))     
}

function* sagaWorkerPortfolioOptimization() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioOptimizationFromApi, portfolio.name)     
    yield put(fetchPortfolioOptimization(result))     
}
