import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchBondPortfolioPositionList} from '../actions/bondPortfolioActions'
import {
    SAGA_BOND_PORTFOLIO_POSITION_LIST,
    SAGA_EDIT_BOND_PORTFOLIO_POSITION,
    SAGA_EDIT_BOND_PORTFOLIO_TOTAL_SUM
} from '../types/bondPortfolioTypes'
import {
    getBondPortfolioPositionListFromApi,
    editBondPortfolioPositionFromApi,
    editBondPortfolioTotalSumFromApi
} from '../api/bondPortfolioApi'

const currentBondPortfolioPosition = (state) => state.bondPortfolio.currentBondPortfolioPosition
const bondPortfolioTotalSum = (state) => state.bondPortfolio.bondPortfolioTotalSum

export function* sagaWatcherBondPortfolio() {
    yield takeEvery(SAGA_BOND_PORTFOLIO_POSITION_LIST, sagaWorkerBondPortfolioPositionList)
    yield takeEvery(SAGA_EDIT_BOND_PORTFOLIO_POSITION, sagaWorkerEditBondPortfolioPosition)
    yield takeEvery(SAGA_EDIT_BOND_PORTFOLIO_TOTAL_SUM, sagaWorkerEditBondPortfolioTotalSum)
}

function* sagaWorkerBondPortfolioPositionList() {
    let result = yield call(getBondPortfolioPositionListFromApi)    
    yield put(fetchBondPortfolioPositionList(result))
}

function* sagaWorkerEditBondPortfolioPosition() {
    let bondPortfolioPosition = yield select(currentBondPortfolioPosition)    
    yield call(editBondPortfolioPositionFromApi, bondPortfolioPosition.ticker, bondPortfolioPosition.manualCoefficient, bondPortfolioPosition.lifeSize)  
    let result = yield call(getBondPortfolioPositionListFromApi)    
    yield put(fetchBondPortfolioPositionList(result))  
}

function* sagaWorkerEditBondPortfolioTotalSum() {
    let totalSum = yield select(bondPortfolioTotalSum)    
    yield call(editBondPortfolioTotalSumFromApi, totalSum)  
    let result = yield call(getBondPortfolioPositionListFromApi)    
    yield put(fetchBondPortfolioPositionList(result))  
}
