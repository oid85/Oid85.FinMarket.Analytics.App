import {sendPostRequest} from './api'

const controller = 'portfolio'

export const getPortfolioPositionListFromApi = async () => {
    return sendPostRequest(`${controller}/position/list`, {})
}

export const editPortfolioPositionFromApi = async (ticker, dividendCoefficient, manualCoefficient, lifeSize) => {
    return sendPostRequest(`${controller}/position/edit`, { ticker, dividendCoefficient, manualCoefficient, lifeSize })
}

export const editPortfolioTotalSumFromApi = async (totalSum) => {
    return sendPostRequest(`${controller}/total-sum/edit`, { totalSum })
}
