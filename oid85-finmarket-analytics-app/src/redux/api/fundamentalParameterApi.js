import {sendPostRequest} from './api'

const controller = 'fundamental-parameters'

export const getFundamentalParameterListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const getFundamentalBySectorFromApi = async (sector) => {
    return sendPostRequest(`${controller}/sector`, {sector})
}

export const getFundamentalByCompanyFromApi = async (ticker) => {
    return sendPostRequest(`${controller}/company`, {ticker})
}

export const editFundamentalParameterFromApi = async (ticker, type, period, value, extData) => {
    return sendPostRequest(`${controller}/create-or-update`, {ticker, type, period, value, extData})
}

export const deleteFundamentalParameterFromApi = async (ticker, type, period) => {
    return sendPostRequest(`${controller}/delete`, {ticker, type, period})
}
