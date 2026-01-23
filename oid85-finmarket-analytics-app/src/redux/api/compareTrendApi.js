import {sendPostRequest} from './api'

const controller = 'trends'

export const getCompareTrendFromApi = async () => {
    return sendPostRequest(`${controller}/compare`, {lastDaysCount: 14})
}

