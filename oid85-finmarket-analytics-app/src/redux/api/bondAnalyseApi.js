import {sendAnalyticPostRequest} from './api'

const controller = 'bond'

export const getBondAnalyseFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/analyse`, {})
}

