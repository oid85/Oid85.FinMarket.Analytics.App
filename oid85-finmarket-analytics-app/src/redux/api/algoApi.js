import {sendAlgoPostRequest} from './api'

export const getPortfolioListFromApi = async () => {
    return sendAlgoPostRequest('algo/portfolio/list', {})
}

export const getPortfolioStrategyListFromApi = async (name) => {
    return sendAlgoPostRequest('algo/portfolio/strategy/list', {portfolioName: name})
}

export const getPortfolioMonitorFromApi = async (name) => {
    return sendAlgoPostRequest('algo/portfolio/monitor', {portfolioName: name})
}

export const getPortfolioBacktestResultListFromApi = async (portfolioName, portfolioStrategyName) => {
    return sendAlgoPostRequest('backtest/portfolio/result/list', {portfolioName: portfolioName, strategyName: portfolioStrategyName})
}

export const getPortfolioOptimizationFromApi = async (name) => {
    return sendAlgoPostRequest('optimization/portfolio/get', {portfolioName: name})
}