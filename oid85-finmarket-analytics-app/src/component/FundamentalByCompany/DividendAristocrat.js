import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

const colorDividendAristocrat = (fundamentalScore) => {
    if (!fundamentalScore) { return CONSTANTS.COLOR_WHITE }
    if (fundamentalScore.isDividendAristocrat) { return CONSTANTS.COLOR_GREEN }
    return CONSTANTS.COLOR_WHITE
}

export const DividendAristocrat = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='fundamental-by-sector-dividend-aristocrat fundamental-by-company-border-style' style={{backgroundColor: colorDividendAristocrat(fundamentalByCompanyData.result.fundamentalScore)}}>
        {
            !fundamentalByCompanyData.result.fundamentalScore
            ? <div></div>
            :
            <div>
                <div>Дивидендный аристократ</div>
            </div>            
        }
        </div>
    )
}
