import {sendPostRequest} from './api'

const controller = 'fundamental-parameters'

export const getFundamentalParameterListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const getFundamentalBySectorFromApi = async (sector) => {
    return sendPostRequest(`${controller}/sector`, {sector})
}

export const editFundamentalParameterFromApi = async (ticker, type, period, value) => {
    return sendPostRequest(`${controller}/create-or-update`, {ticker, type, period, value})
}
