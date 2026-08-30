import {sendMomentumPostRequest} from './api'

export const getMomentumMonitorFromApi = async () => {
    return sendMomentumPostRequest('momentum/monitor', {})
}
