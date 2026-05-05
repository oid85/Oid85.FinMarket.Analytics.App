import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

export const FundamentalScore = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='fundamental-by-sector-fundamental-score fundamental-by-company-border-style' style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.score.colorFill}}>
        {
            !fundamentalByCompanyData.result.fundamentalScore
            ? <div></div>
            :
            <div>
                <div>Фунд. рейтинг</div>
                <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{fundamentalByCompanyData.result.fundamentalScore.score.value}</div>
            </div>            
        }
        </div>
    )
}
