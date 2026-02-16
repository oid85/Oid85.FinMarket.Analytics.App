import {sendPostRequest} from './api'

const controller = 'macro-parameters'

export const getMacroParameterListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
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
    return sendPostRequest(`${controller}/create-or-update`, {
        date, 
        m0, 
        m1, 
        m2, 
        m2X, 
        consumerPriceIndexChange, 
        keyRate     
    })
}
