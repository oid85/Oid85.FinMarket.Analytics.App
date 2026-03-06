import {sendPostRequest} from './api'

const controller = 'bond-portfolio'

export const getBondPortfolioPositionListFromApi = async () => {
    return sendPostRequest(`${controller}/position/list`, {})
}

export const editBondPortfolioPositionFromApi = async (ticker, manualCoefficient) => {
    return sendPostRequest(`${controller}/position/edit`, { ticker, manualCoefficient })
}

export const editBondPortfolioTotalSumFromApi = async (totalSum) => {
    return sendPostRequest(`${controller}/total-sum/edit`, { totalSum })
}
