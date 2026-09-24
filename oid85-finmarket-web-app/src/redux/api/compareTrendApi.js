import {sendAnalyticPostRequest} from './api'

const controller = 'trends'

export const getCompareTrendFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/compare`, {lastDaysCount: 90})
}
