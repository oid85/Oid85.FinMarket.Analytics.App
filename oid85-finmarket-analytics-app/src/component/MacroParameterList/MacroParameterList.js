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
                <div className='horizontal-container'>
                    <div className='macro-parameter-date-header-cell border-style'>Дата</div>
                    <div className='macro-parameter-header-cell border-style'>M0, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>M1, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>M2, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>M2X, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>Валюта, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>Вклады, млрд. руб.</div>
                    <div className='macro-parameter-header-cell border-style'>ИПЦ, %</div>
                    <div className='macro-parameter-header-cell border-style'>M1-ИПЦ, %</div>
                    <div className='macro-parameter-header-cell border-style'>Ключ. ставка, %</div>
                    <div className='macro-parameter-header-cell border-style'>IMOEX, руб.</div>
                    <div className='macro-parameter-edit-button-header-cell border-style'></div>
                </div>
                {
                    macroParameterListData.result.macroParameters.map((macroParameter, index) => (
                        <div className='horizontal-container'>
                            <div className='macro-parameter-date-cell border-style'>
                                <Calendar key = {index} date = {macroParameter.date} />
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.m0Change)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.m0}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.m0Change} %`}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.m1Change)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.m1}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.m1Change} %`}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.m2Change)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.m2}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.m2Change} %`}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.m2XChange)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.m2X}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.m2XChange} %`}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.currencyChange)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.currency}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.currencyChange} %`}</div>                                
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.depositsChange)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.deposits}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.depositsChange} %`}</div>                                
                            </div>                                                        
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.consumerPriceIndexChange} %`}</div>
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.m1ConsumerPriceIndexDifferenceChange)}}>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.m1ConsumerPriceIndexDifferenceChange} %`}</div>
                            </div>                            
                            <div className='macro-parameter-cell border-style'>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.keyRate} %`}</div>
                            </div>
                            <div className='macro-parameter-cell border-style' style={{backgroundColor: GetColorChange(macroParameter.moexIndexChange)}}>
                                <div className='macro-parameter-cell-value'>{macroParameter.moexIndex}</div>
                                <div className='macro-parameter-cell-change'>{`${macroParameter.moexIndexChange} %`}</div>                                  
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