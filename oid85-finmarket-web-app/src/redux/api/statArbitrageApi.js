import {sendStatArbitragePostRequest} from './api'

export const getPortfolioListFromApi = async () => {
    return sendStatArbitragePostRequest('stat-arbitrage/portfolio/list', {})
}

export const getPortfolioRegressionTailFromApi = async (name) => {
    return sendStatArbitragePostRequest('regression-tail/list', {portfolioName: name})
}

export const getPortfolioMonitorFromApi = async (name) => {
    return sendStatArbitragePostRequest('stat-arbitrage/portfolio/monitor', {portfolioName: name})
}

export const getPortfolioBacktestFromApi = async (name) => {
    return sendStatArbitragePostRequest('backtest/portfolio/get', {portfolioName: name})
}

export const getPortfolioOptimizationFromApi = async (name) => {
    return sendStatArbitragePostRequest('optimization/portfolio/get', {portfolioName: name})
}