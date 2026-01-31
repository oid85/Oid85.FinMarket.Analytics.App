import {sendPostRequest} from './api'

const controller = 'instruments'

export const getInstrumentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {lastDaysCount: 90})
}

export const selectInstrumentFromApi = async (id) => {
    return sendPostRequest(`${controller}/select`, {id})
}
