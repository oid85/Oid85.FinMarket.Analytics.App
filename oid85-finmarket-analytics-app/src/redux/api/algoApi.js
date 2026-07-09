import {sendAlgoPostRequest} from './api'

const controller = 'algo'

export const getPortfolioListFromApi = async () => {
    return sendAlgoPostRequest(`${controller}/portfolio/list`, {})
}

export const getPortfolioMonitorFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/monitor`, {portfolioName: name})
}

export const getPortfolioBacktestFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/backtest`, {portfolioName: name})
}

export const getPortfolioOptimizationFromApi = async (name) => {
    return sendAlgoPostRequest(`${controller}/portfolio/optimization`, {portfolioName: name})
}