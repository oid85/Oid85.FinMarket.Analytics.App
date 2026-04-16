import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorScore = (fundamentalScore) => {
    if (!fundamentalScore) { return CONSTANTS.COLOR_WHITE }
    if (fundamentalScore.scoreValue > 0.7) { return CONSTANTS.COLOR_GREEN }
    if (fundamentalScore.scoreValue > 0.5) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

export const FundamentalScore = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style' style={{backgroundColor: colorScore(fundamentalByCompanyData.result.fundamentalScore)}}>
        {
            !fundamentalByCompanyData.result.fundamentalScore
            ? <div></div>
            :
            <div>
                <div>Фунд. рейтинг</div>
                <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.scoreValue}</div>
            </div>            
        }
        </div>
    )
}
