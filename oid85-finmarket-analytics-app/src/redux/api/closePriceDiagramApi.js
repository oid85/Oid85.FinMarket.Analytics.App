import {sendPostRequest} from './api'

const controller = 'diagrams'

export const getClosePriceDiagramFromApi = async () => {
    return sendPostRequest(`${controller}/close-price`, {lastDaysCount: 90})
}

