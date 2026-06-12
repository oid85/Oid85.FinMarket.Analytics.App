import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

export const DividendAristocrat = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div>
        {
            !fundamentalByCompanyData.result.fundamentalScore
            ? <div></div>
            :
            <div className='fundamental-by-sector-dividend-aristocrat fundamental-by-company-border-style' style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.colorFill}}>
                <div>{fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.description}</div>
            </div>            
        }
        </div>
    )
}
