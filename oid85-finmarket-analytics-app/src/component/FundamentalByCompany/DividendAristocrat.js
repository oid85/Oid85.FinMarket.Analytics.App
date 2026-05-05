import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { CONSTANTS } from '../../constants'

export const DividendAristocrat = () => {

    const fundamentalByCompanyData = useSelector(state => state.fundamentalParameter.fundamentalByCompanyData)

    return (
        <div className='fundamental-by-sector-dividend-aristocrat fundamental-by-company-border-style' style={{backgroundColor: fundamentalByCompanyData.result.fundamentalScore.dividendAristocrat.colorFill}}>
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
