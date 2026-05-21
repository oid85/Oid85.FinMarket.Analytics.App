import {sendPostRequest} from './api'

const controller = 'etf-portfolio'

export const getEtfPortfolioPositionListFromApi = async () => {
    return sendPostRequest(`${controller}/position/list`, {})
}

export const editEtfPortfolioPositionFromApi = async (ticker, manualCoefficient, lifeSize) => {
    return sendPostRequest(`${controller}/position/edit`, { ticker, manualCoefficient, lifeSize })
}
