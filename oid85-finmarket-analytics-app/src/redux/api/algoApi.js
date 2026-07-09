import {sendAlgoPostRequest} from './api'

const controller = 'algo'

export const getPortfolioListFromApi = async () => {
    return sendAlgoPostRequest(`${controller}/portfolio/list`, {})
}

export const getPortfolioMonitorFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/monitor`, {name})
}

export const getPortfolioBacktestFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/backtest`, {name})
}

export const getPortfolioOptimizationFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/optimization`, {name})
}