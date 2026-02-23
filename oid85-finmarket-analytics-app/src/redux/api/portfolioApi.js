import {sendPostRequest} from './api'

const controller = 'portfolio'

export const getPortfolioPositionListFromApi = async () => {
    return sendPostRequest(`${controller}/position/list`, {})
}

export const editPortfolioPositionFromApi = async (ticker, dividendCoefficient) => {
    return sendPostRequest(`${controller}/position/edit`, { ticker, dividendCoefficient })
}
