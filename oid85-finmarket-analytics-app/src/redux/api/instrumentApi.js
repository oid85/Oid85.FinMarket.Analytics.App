import {sendPostRequest} from './api'

const controller = 'instruments'

export const getInstrumentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {lastDaysCount: 14})
}

export const selectInstrumentFromApi = async (id) => {
    return sendPostRequest(`${controller}/select`, {id})
}
