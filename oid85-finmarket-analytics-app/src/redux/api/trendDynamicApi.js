import {sendAnalyticPostRequest} from './api'

const controller = 'trends'

export const getTrendDynamicFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/dynamic`, {lastDaysCount: 15})
}

