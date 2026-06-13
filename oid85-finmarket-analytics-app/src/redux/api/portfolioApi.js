import {sendPostRequest} from './api'

const controller = 'portfolio'

export const getPortfolioPositionListFromApi = async (orderField) => {
    return sendPostRequest(`${controller}/position/list`, {orderField})
}

export const getPortfolioBacktestFromApi = async (portfolioName) => {
    return sendPostRequest(`${controller}/backtest`, {portfolioName})
}

export const editPortfolioPositionFromApi = async (ticker, manualCoefficient, lifeSize) => {
    return sendPostRequest(`${controller}/position/edit`, { ticker, manualCoefficient, lifeSize })
}
