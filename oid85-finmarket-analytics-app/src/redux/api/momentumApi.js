import {sendMomentumPostRequest} from './api'

export const getMomentumMonitorFromApi = async () => {
    return sendMomentumPostRequest('momentum/monitor', {})
}

export const editMomentumPortfolioTotalSumFromApi = async (totalSum) => {
    return sendMomentumPostRequest('momentum/portfolio/total-sum/edit', {totalSum})
}
