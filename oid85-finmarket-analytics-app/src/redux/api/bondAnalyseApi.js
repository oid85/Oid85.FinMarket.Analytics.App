import {sendPostRequest} from './api'

const controller = 'bond'

export const getBondAnalyseFromApi = async () => {
    return sendPostRequest(`${controller}/analyse`, {})
}

