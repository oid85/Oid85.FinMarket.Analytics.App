import {sendAlgoPostRequest} from './api'

export const getPortfolioListFromApi = async () => {
    return sendAlgoPostRequest('algo/portfolio/list', {})
}

export const getPortfolioStrategyListFromApi = async (portfolioName) => {
    return sendAlgoPostRequest('algo/portfolio/strategy/list', {portfolioName: portfolioName})
}

export const getPortfolioMonitorFromApi = async (portfolioName) => {
    return sendAlgoPostRequest('algo/portfolio/monitor', {portfolioName: portfolioName})
}

export const getPortfolioBacktestResultListFromApi = async (portfolioName, strategyName) => {
    return sendAlgoPostRequest('backtest/portfolio/result/list', {portfolioName: portfolioName, strategyName: strategyName})
}

export const getPortfolioBacktestResultDiagramFromApi = async (portfolioName, strategyName, ticker, strategyParamsHash) => {
    return sendAlgoPostRequest('backtest/portfolio/result/diagram', {portfolioName: portfolioName, strategyName: strategyName, ticker: ticker, strategyParamsHash: strategyParamsHash})
}

export const getPortfolioOptimizationFromApi = async (portfolioName) => {
    return sendAlgoPostRequest('optimization/portfolio/get', {portfolioName: portfolioName})
}