import {sendAnalyticPostRequest} from './api'

const controller = 'diagrams'

export const getClosePriceDiagramFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/close-price`, {lastDaysCount: 90})
}

