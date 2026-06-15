import {sendPostRequest} from './api'

const controller = 'diagrams'

export const getTrendAggregateDiagramFromApi = async () => {
    return sendPostRequest(`${controller}/trend-aggregate`, {})
}

