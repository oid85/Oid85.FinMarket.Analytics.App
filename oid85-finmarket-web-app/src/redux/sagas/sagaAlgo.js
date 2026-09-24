import {call, put, select, takeEvery} from 'redux-saga/effects'
import {
    fetchPortfolioList,
    fetchPortfolioStrategyList,
    fetchPortfolioMonitor,
    fetchPortfolioBacktestResultList,
    fetchPortfolioBacktestResultDiagram,
    fetchPortfolioOptimization
} from '../actions/algoActions'
import {
    SAGA_PORTFOLIO_LIST,
    SAGA_PORTFOLIO_STRATEGY_LIST,
    SAGA_PORTFOLIO_MONITOR,
    SAGA_PORTFOLIO_BACKTEST_RESULT_LIST,
    SAGA_PORTFOLIO_BACKTEST_RESULT_DIAGRAM,
    SAGA_PORTFOLIO_OPTIMIZATION
} from '../types/algoTypes'
import {
    getPortfolioListFromApi,
    getPortfolioStrategyListFromApi,
    getPortfolioMonitorFromApi,
    getPortfolioBacktestResultListFromApi,
    getPortfolioBacktestResultDiagramFromApi,
    getPortfolioOptimizationFromApi
} from '../api/algoApi'

const currentPortfolio = (state) => state.algo.currentPortfolio
const currentPortfolioStrategy = (state) => state.algo.currentPortfolioStrategy
const currentPortfolioBacktestResult = (state) => state.algo.currentPortfolioBacktestResult

export function* sagaWatcherAlgo() {
    yield takeEvery(SAGA_PORTFOLIO_LIST, sagaWorkerPortfolioList)
    yield takeEvery(SAGA_PORTFOLIO_STRATEGY_LIST, sagaWorkerPortfolioStrategyList)
    yield takeEvery(SAGA_PORTFOLIO_MONITOR, sagaWorkerPortfolioMonitor)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST_RESULT_LIST, sagaWorkerPortfolioBacktestResultList)
    yield takeEvery(SAGA_PORTFOLIO_BACKTEST_RESULT_DIAGRAM, sagaWorkerPortfolioBacktestResultDiagram)
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

function* sagaWorkerPortfolioBacktestResultList() {
    let portfolio = yield select(currentPortfolio)
    let portfolioStrategy = yield select(currentPortfolioStrategy)
    let result = yield call(getPortfolioBacktestResultListFromApi, portfolio.name, portfolioStrategy.name)     
    yield put(fetchPortfolioBacktestResultList(result))     
}

function* sagaWorkerPortfolioBacktestResultDiagram() {
    let portfolio = yield select(currentPortfolio)
    let portfolioStrategy = yield select(currentPortfolioStrategy)
    let backtestResult = yield select(currentPortfolioBacktestResult)
    let result = yield call(getPortfolioBacktestResultDiagramFromApi, portfolio.name, portfolioStrategy.name, backtestResult.ticker, backtestResult.strategyParamsHash)     
    yield put(fetchPortfolioBacktestResultDiagram(result))     
}

function* sagaWorkerPortfolioOptimization() {
    let portfolio = yield select(currentPortfolio)
    let result = yield call(getPortfolioOptimizationFromApi, portfolio.name)     
    yield put(fetchPortfolioOptimization(result))     
}
