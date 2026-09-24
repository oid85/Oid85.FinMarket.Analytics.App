import {sendAnalyticPostRequest} from './api'

const controller = 'instruments'

export const getInstrumentListFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/list`, {lastDaysCount: 90})
}

export const getSectorListFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/sectors/list`, {})
}

export const portfolioInstrumentFromApi = async (ticker) => {
    return sendAnalyticPostRequest(`${controller}/portfolio`, {ticker})
}
