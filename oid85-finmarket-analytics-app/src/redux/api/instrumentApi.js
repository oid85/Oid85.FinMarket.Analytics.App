import {sendPostRequest} from './api'

const controller = 'instruments'

export const getInstrumentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {lastDaysCount: 90})
}

export const selectInstrumentFromApi = async (ticker) => {
    return sendPostRequest(`${controller}/select`, {ticker})
}

export const portfolioInstrumentFromApi = async (ticker) => {
    return sendPostRequest(`${controller}/portfolio`, {ticker})
}
