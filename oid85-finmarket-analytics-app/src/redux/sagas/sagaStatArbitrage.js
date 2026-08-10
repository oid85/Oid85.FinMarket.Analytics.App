import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioList,
    fetchPortfolioRegressionTail,
    fetchPortfolioMonitor,
    fetchPortfolioBacktest,
    fetchPortfolioOptimization
} from '../actions/statArbitrageActions'
import {
    SAGA_PORTFOLIO_LIST,
    SAGA_PORTFOLIO_REGRESSION_TAIL,
    SAGA_PORTFOLIO_MONITOR,
    SAGA_PORTFOLIO_BACKTEST,
    SAGA_PORTFOLIO_OPTIMIZATION
} from '../types/statArbitrageTypes'
import {
    getPortfolioListFromApi,
    getPortfolioRegressionTailFromApi,
    getPortfolioMonitorFromApi,
    getPortfolioBacktestFromApi,
    getPortfolioOptimizationFromApi
} from '../api/statArbitrageApi'

const currentPortfolio = (state) => state.statArbitrage.currentPortfolio

export function* sagaWatcherStatArbitrage() {
    yield takeEvery(SAGA_PORTFOLIO_LIST, sagaWorkerPortfolioList)
    yield takeEvery(SAGA_PORTFOLIO_REGRESSION_TAIL, sagaWorkerPortfolioRegressionTail)
    yield takeEvery(SAGA_PORTFOLIO_MONITOR, sagaWorkerPortfolioMonitor)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST, sagaWorkerPortfolioBacktest)
    yield takeEvery(SAGA_PORTFOLIO_OPTIMIZATION, sagaWorkerPortfolioOptimization)
}

function* sagaWorkerPortfolioList() {
    let result = yield call(getPortfolioListFromApi)    
    yield put(fetchPortfolioList(result))
}

function* sagaWorkerPortfolioRegressionTail() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioRegressionTailFromApi, portfolio.name)     
    yield put(fetchPortfolioRegressionTail(result))     
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
