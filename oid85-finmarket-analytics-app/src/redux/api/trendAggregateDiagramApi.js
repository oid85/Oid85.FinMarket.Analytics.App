import {sendAnalyticPostRequest} from './api'

const controller = 'diagrams'

export const getTrendAggregateDiagramFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/trend-aggregate`, {})
}

