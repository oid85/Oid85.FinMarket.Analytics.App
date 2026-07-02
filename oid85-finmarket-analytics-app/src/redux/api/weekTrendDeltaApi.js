import {sendAnalyticPostRequest} from './api'

const controller = 'week-trends'

export const getWeekTrendDeltaFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/delta`, {lastWeeksCount: 3})
}

