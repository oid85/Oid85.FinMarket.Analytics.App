import {sendAnalyticPostRequest} from './api'

const controller = 'portfolio'

export const getPortfolioPositionListFromApi = async (orderField) => {
    return sendAnalyticPostRequest(`${controller}/position/list`, {orderField})
}

export const getPortfolioBacktestFromApi = async (portfolioName) => {
    return sendAnalyticPostRequest(`${controller}/backtest`, {portfolioName})
}

export const editPortfolioPositionFromApi = async (ticker, manualCoefficient, lifeSize) => {
    return sendAnalyticPostRequest(`${controller}/position/edit`, { ticker, manualCoefficient, lifeSize })
}
