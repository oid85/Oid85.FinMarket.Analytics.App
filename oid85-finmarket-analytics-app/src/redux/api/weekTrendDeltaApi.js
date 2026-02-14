import {sendPostRequest} from './api'

const controller = 'week-trends'

export const getWeekTrendDeltaFromApi = async () => {
    return sendPostRequest(`${controller}/delta`, {lastWeeksCount: 12})
}

