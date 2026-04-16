import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorDividendYield = (dividend) => {
    if (!dividend) { return CONSTANTS.COLOR_WHITE }
    if (dividend.yield > 10) { return CONSTANTS.COLOR_GREEN }
    if (dividend.yield > 0) { return CONSTANTS.COLOR_YELLOW }
    return CONSTANTS.COLOR_WHITE
}

export const Dividend = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='fundamental-by-sector-dividend fundamental-by-company-border-style' style={{backgroundColor: colorDividendYield(fundamentalByCompanyData.result.dividend)}}>
        {
            !fundamentalByCompanyData.result.dividend
            ? <div></div>
            :
            <div>
                <div>ДД</div>            
                <div className='fundamental-by-sector-fundamental-metric-indicator-value'>{`${fundamentalByCompanyData.result.dividend.yield} %`}</div>
            </div>            
        }
        </div>
    )
}
