import {CONSTANTS} from "../../constants"

export const sendAnalyticPostRequest = async (url, body) => {
    return sendPostRequest(CONSTANTS.FINMARKET_ANALYTICS_API, url, body)
}

export const sendAlgoPostRequest = async (url, body) => {
    return sendPostRequest(CONSTANTS.FINMARKET_ALGO_API, url, body)
}

export const sendMomentumPostRequest = async (url, body) => {
    return sendPostRequest(CONSTANTS.FINMARKET_MOMENTUM_API, url, body)
}

export const sendStatArbitragePostRequest = async (url, body) => {
    return sendPostRequest(CONSTANTS.FINMARKET_STAT_ARBITRAGE_API, url, body)
}

export const sendPostRequest = async (host, url, body) => {
    const response = await fetch(
        `${host}/api/${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

    if (response.ok) {
        return await response.json()
    }
}