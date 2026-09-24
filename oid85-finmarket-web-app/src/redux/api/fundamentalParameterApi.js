import {sendAnalyticPostRequest} from './api'

const controller = 'fundamental-parameters'

export const getFundamentalParameterListFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/list`, {})
}

export const getFundamentalRatingListFromApi = async (filterType) => {
    return sendAnalyticPostRequest(`${controller}/rating/list`, {filterType})
}

export const getFundamentalBySectorFromApi = async (sector) => {
    return sendAnalyticPostRequest(`${controller}/sector`, {sector})
}

export const getFundamentalByCompanyFromApi = async (ticker) => {
    return sendAnalyticPostRequest(`${controller}/company`, {ticker})
}

export const editFundamentalParameterFromApi = async (ticker, type, period, value, extData) => {
    return sendAnalyticPostRequest(`${controller}/create-or-update`, {ticker, type, period, value, extData})
}

export const deleteFundamentalParameterFromApi = async (ticker, type, period) => {
    return sendAnalyticPostRequest(`${controller}/delete`, {ticker, type, period})
}
