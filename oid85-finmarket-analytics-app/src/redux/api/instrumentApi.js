import {sendPostRequest} from './api'

const controller = 'instruments'

export const getInstrumentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const selectInstrumentFromApi = async () => {
    return sendPostRequest(`${controller}/select`, {})
}
