import {sendPostRequest} from './api'

const controller = 'fundamental-parameters'

export const getFundamentalParameterListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const editFundamentalParameterFromApi = async (
    ticker, 
    pe2019, 
    pe2020, 
    pe2021, 
    pe2022, 
    pe2023, 
    pe2024, 
    pe2025, 
    ebitda2019, 
    ebitda2020, 
    ebitda2021, 
    ebitda2022, 
    ebitda2023, 
    ebitda2024, 
    ebitda2025,     
    revenue2019, 
    revenue2020, 
    revenue2021, 
    revenue2022, 
    revenue2023, 
    revenue2024, 
    revenue2025, 
    netProfit2019, 
    netProfit2020, 
    netProfit2021, 
    netProfit2022, 
    netProfit2023, 
    netProfit2024, 
    netProfit2025
) => {
    return sendPostRequest(`${controller}/create-or-update`, {
        ticker, 
        pe2019, 
        pe2020, 
        pe2021, 
        pe2022, 
        pe2023, 
        pe2024, 
        pe2025, 
        ebitda2019, 
        ebitda2020, 
        ebitda2021, 
        ebitda2022, 
        ebitda2023, 
        ebitda2024, 
        ebitda2025,         
        revenue2019, 
        revenue2020, 
        revenue2021, 
        revenue2022, 
        revenue2023, 
        revenue2024, 
        revenue2025, 
        netProfit2019, 
        netProfit2020, 
        netProfit2021, 
        netProfit2022, 
        netProfit2023, 
        netProfit2024, 
        netProfit2025        
    })
}
