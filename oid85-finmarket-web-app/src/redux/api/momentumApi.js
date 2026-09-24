import {sendMomentumPostRequest} from './api'

export const getMomentumMonitorFromApi = async (momentumVersion) => {
    return sendMomentumPostRequest('momentum/monitor/version', {momentumVersion})
}

export const getMomentumBacktestResultFromApi = async () => {
    return sendMomentumPostRequest('momentum/backtest/result', {})
}

export const editMomentumPortfolioTotalSumFromApi = async (totalSum) => {
    return sendMomentumPostRequest('momentum/portfolio/total-sum/edit', {totalSum})
}
