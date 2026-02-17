import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaMacroParameterList, 
    fetchCurrentMacroParameter, 
    showEditMacroParameterModal
} from '../../redux/actions/macroParameterActions'
import {EditMacroParameterModal} from './EditMacroParameterModal'
import Loader from '../Loader/Loader'
import {Calendar} from '../Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import {CONSTANTS} from '../../constants'

const GetColorChange = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value > 0) { return CONSTANTS.COLOR_GREEN }
    if (value <= 0) { return CONSTANTS.COLOR_RED }    

    return CONSTANTS.COLOR_WHITE
}

const GetValue = (value) => {
    if (!value) { return "" }
    return value
}

const GetMonthValueChange = (valueChange) => {
    if (!valueChange) { return "" }
    return "мес " + valueChange + " %"
}

const GetYearValueChange = (valueChange) => {
    if (!valueChange) { return "" }
    return "год " + valueChange + " %"
}

export const MacroParameterList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const macroParameterListData = useSelector(state => state.macroParameter.macroParameterListData)    

    useEffect(() => {
        dispatch(sagaMacroParameterList())
    }, [])

    return (
        <React.Fragment>
        {
            !macroParameterListData.result || loading
            ? <Loader/>
            :
            <div>
                <div>
                    <div>М0: Наличные деньги в обращении (банкноты и монеты) — самая высокая ликвидность</div>
                    <div>М1: М0 + чеки, вклады до востребования (текущие счета)</div>
                    <div>М2: М1 + небольшие срочные вклады (денежная масса). В России М2 — основной показатель, включающий наличные и безналичные средства</div>
                    <div>ИПЦ: Индекс потребительских цен</div>
                </div>
                <div className='horizontal-container'>
                    <div className='macro-parameter-date-header-cell border-style'>Дата</div>
                    <div className='macro-parameter-header-cell border-style'>M0 (наличные)</div>
                    <div className='macro-parameter-header-cell border-style'>M1 (М0 + текущие счета)</div>
                    <div className='macro-parameter-header-cell border-style'>M2 (денежная масса: М1 + срочные вклады)</div>
                    <div className='macro-parameter-header-cell border-style'>M2X (M2 + валюта)</div>
                    <div className='macro-parameter-header-cell border-style'>Валюта (M2X - M2)</div>
                    <div className='macro-parameter-header-cell border-style'>Вклады (M2 - M1)</div>
                    <div className='macro-parameter-header-cell border-style'>ИПЦ</div>
                    <div className='macro-parameter-header-cell border-style'>M1-ИПЦ</div>
                    <div className='macro-parameter-header-cell border-style'>Ключевая ставка</div>
                    <div className='macro-parameter-header-cell border-style'>IMOEX</div>
                    <div className='macro-parameter-edit-button-header-cell border-style'></div>
                </div>
                {
                    macroParameterListData.result.macroParameters.map((macroParameter, index) => (
                        <div className='horizontal-container'>
                            <div className='macro-parameter-date-cell border-style'>
                                <Calendar key = {index} date = {macroParameter.date} />
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.m0)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.m0Change)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.m0Change)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.m1)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.m1Change)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.m1Change)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.m2)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.m2Change)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.m2Change)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.m2X)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.m2XChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.m2XChange)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.currency)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.currencyChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.currencyChange)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.deposits)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.depositsChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.depositsChange)}</div>
                            </div>                                                        
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.consumerPriceIndexChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.consumerPriceIndexChange)}</div>
                            </div>
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.m1ConsumerPriceIndexDifferenceChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.m1ConsumerPriceIndexDifferenceChange)}</div>
                            </div>                            
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-month-change'>{GetValue(macroParameter.keyRate)}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.moexIndexChange)}}>
                                <div className='macro-parameter-cell-value'>{GetValue(macroParameter.moexIndex)}</div>
                                <div className='macro-parameter-cell-month-change'>{GetMonthValueChange(macroParameter.moexIndexChange)}</div>
                                <div className='macro-parameter-cell-year-change'>{GetYearValueChange(macroParameter.moexIndexChange)}</div>
                            </div>
                            <div className='macro-parameter-edit-button-cell border-style'>

                            </div>
                        </div>
                    ))
                }
            </div>
        }
        <EditMacroParameterModal />
        </React.Fragment>                
    )
}