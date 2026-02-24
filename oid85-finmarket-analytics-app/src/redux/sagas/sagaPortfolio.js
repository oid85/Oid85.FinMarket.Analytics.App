import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchPortfolioPositionList} from '../actions/portfolioActions'
import {
    SAGA_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_PORTFOLIO_POSITION
} from '../types/portfolioTypes'
import {
    getPortfolioPositionListFromApi,
    editPortfolioPositionFromApi
} from '../api/portfolioApi'

const currentPortfolioPosition = (state) => state.portfolio.currentPortfolioPosition

export function* sagaWatcherPortfolio() {
    yield takeEvery(SAGA_PORTFOLIO_POSITION_LIST, sagaWorkerPortfolioPositionList)
    yield takeEvery(SAGA_EDIT_PORTFOLIO_POSITION, sagaWorkerEditPortfolioPosition)
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
