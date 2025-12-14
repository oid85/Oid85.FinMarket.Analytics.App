import {sendPostRequest} from './api'

const controller = 'trends'

export const getTrendDynamicFromApi = async () => {
    return sendPostRequest(`${controller}/dynamic`, {})
}

