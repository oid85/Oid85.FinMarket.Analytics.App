import {sendPostRequest} from './api'

const controller = 'fundamental-parameters'

export const getFundamentalParameterBubbleFromApi = async () => {
    return sendPostRequest(`${controller}/bubble`, {year: 2024})
}
