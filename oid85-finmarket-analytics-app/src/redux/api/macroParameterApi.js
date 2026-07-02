import {sendAnalyticPostRequest} from './api'

const controller = 'macro-parameters'

export const getMacroParameterListFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/list`, {})
}

export const getMacroParameterDiagramFromApi = async () => {
    return sendAnalyticPostRequest(`${controller}/diagram`, {})
}

export const editMacroParameterFromApi = async (
    date, 
    m0, 
    m1, 
    m2, 
    m2X, 
    consumerPriceIndexChange, 
    keyRate
) => {
    return sendAnalyticPostRequest(`${controller}/create-or-update`, {
        date, 
        m0, 
        m1, 
        m2, 
        m2X, 
        consumerPriceIndexChange, 
        keyRate     
    })
}
