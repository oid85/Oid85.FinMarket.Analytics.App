import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalParameterList, 
    fetchCurrentFundamentalParameter, 
    showEditFundamentalParameterModal
} from '../../redux/actions/fundamentalParameterActions'
import { fetchCurrentInstrument, sagaInstrumentPortfolio, sagaInstrumentSelect } from '../../redux/actions/instrumentActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { 
    benchmarkChangeColor,
    netProfitColor, 
    peColor, 
    revenueColor, 
    ebitdaColor,
    evColor,
    pbvColor,
    roaColor,
    netDebtColor,
    marketCapColor,
    dividendColor,
    dividendYieldColor,
    evEbitdaColor,
    netDebtEbitdaColor,
    ebitdaRevenueColor,
    deltaMinMaxColor,
    fcfColor,
    epsColor,
    numberSharesColor
} from './colorHelper'
import { EditFundamentalParameterModal } from './EditFundamentalParameterModal'
import { CONSTANTS } from '../../constants'

const GetColorScoreValue = (scoreValue) => {
    if (!scoreValue) { return CONSTANTS.COLOR_WHITE }
    if (scoreValue >= 0.5) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

const GetColorScoreIndicator = (value) => {
    if (!value) { return CONSTANTS.COLOR_WHITE }
    if (value) { return CONSTANTS.COLOR_GREEN }

    return CONSTANTS.COLOR_WHITE
}

const GetColorEmitent = (fillData) => {
    if (!fillData) { return CONSTANTS.COLOR_WHITE }
    if (fillData) { return CONSTANTS.COLOR_LIGHTGREEN }    

    return CONSTANTS.COLOR_WHITE
}

export const FundamentalParameterList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalParameterListData = useSelector(state => state.fundamentalParameter.fundamentalParameterListData)

    useEffect(() => {
        dispatch(sagaFundamentalParameterList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalParameterListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-parameter-container'>                
                <div>Не заполнено {fundamentalParameterListData.result.noFillDataCount} из {fundamentalParameterListData.result.totalCount}:</div>
                <div>{fundamentalParameterListData.result.noFillDataTickers}</div>
                {
                    fundamentalParameterListData.result.fundamentalParameters.map((fundamentalParameter) => (
                        <div style={{backgroundColor: GetColorEmitent(fundamentalParameter.fillData)}}>
                            <div className='horizontal-container'>
                                <div className='ticker-header-cell fundamental-parameter-border-style'>Компания</div>
                                <div className='score-header-cell fundamental-parameter-border-style'>Score</div>
                                <div className='mcftr-change-header-cell fundamental-parameter-border-style'>MCFTR изм. (лучше/хуже индекса)</div>                                
                                <div className='year-header-cell fundamental-parameter-border-style'>Год</div>                    
                                <div className='number-shares-header-cell fundamental-parameter-border-style'>Кол-во акций, млн.</div>
                                <div className='pe-header-cell fundamental-parameter-border-style'>P / E</div>
                                <div className='pbv-header-cell fundamental-parameter-border-style'>P / BV</div>
                                <div className='roa-header-cell fundamental-parameter-border-style'>ROA, %</div>
                                <div className='ev-ebitda-header-cell fundamental-parameter-border-style'>EV / EBITDA</div>
                                <div className='netdebt-ebitda-header-cell fundamental-parameter-border-style'>ND / EBITDA</div>
                                <div className='ebitda-revenue-header-cell fundamental-parameter-border-style'>EBITDA / Выручка</div>
                                <div className='marketcap-header-cell fundamental-parameter-border-style'>Капит-ция, млрд. руб.</div>
                                <div className='ev-header-cell fundamental-parameter-border-style'>EV, млрд. руб.</div>
                                <div className='ebitda-header-cell fundamental-parameter-border-style'>EBITDA, млрд. руб.</div>
                                <div className='netdebt-header-cell fundamental-parameter-border-style'>Чистый долг, млрд. руб.</div>
                                <div className='revenue-header-cell fundamental-parameter-border-style'>Выручка, млрд. руб.</div>
                                <div title='Чистая прибыль (чист. опер. доход), млрд. руб.' className='netprofit-header-cell fundamental-parameter-border-style'>ЧП, млрд. руб.</div>
                                <div className='eps-header-cell fundamental-parameter-border-style'>EPS, руб.</div>
                                <div className='fcf-header-cell fundamental-parameter-border-style'>FCF, млрд. руб.</div>
                                <div className='dividend-header-cell fundamental-parameter-border-style'>ДД, руб</div>
                                <div className='dividend-yield-header-cell fundamental-parameter-border-style'>ДД, %</div>
                                <div className='price-header-cell fundamental-parameter-border-style'>Цена акции, руб.</div>
                                <div className='delta-min-max-header-cell fundamental-parameter-border-style'>Изм. мин-макс, %</div>                    
                            </div>                            
                            <div className='horizontal-container'>
                                <div title={fundamentalParameter.concept} className='fundamental-parameter-border-style emitent-cell'>
                                    <div className='number-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.number}</b></div> : <div>{fundamentalParameter.number}</div>}</div>
                                    <div className='ticker-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.ticker}</b></div> : <div>{fundamentalParameter.ticker}</div>}</div>
                                    <div className='name-cell'>{fundamentalParameter.inPortfolio ? <div><b>{fundamentalParameter.name}</b></div> : <div>{fundamentalParameter.name}</div>}</div>
                                    <div>
                                        <div>
                                            <button className='btn btn-outline-dark instrument-button'
                                                onClick={() => {
                                                    dispatch(fetchCurrentInstrument({ticker: fundamentalParameter.ticker}))
                                                    dispatch(sagaInstrumentSelect())                                                
                                                    dispatch(sagaFundamentalParameterList())
                                                }}><div className='instrument-button-text'>{fundamentalParameter.isSelected ? <div><b>Наблюдать</b></div> : <div><del>Наблюдать</del></div>}</div></button>
                                        </div>
                                        <div>
                                            <button className='btn btn-outline-dark instrument-button'
                                                onClick={() => {
                                                    dispatch(fetchCurrentInstrument({ticker: fundamentalParameter.ticker}))
                                                    dispatch(sagaInstrumentPortfolio()) 
                                                    dispatch(sagaFundamentalParameterList())
                                                }}><div className='instrument-button-text'>{fundamentalParameter.inPortfolio ? <div><b>Портфель</b></div> : <div><del>Портфель</del></div>}</div></button>
                                        </div>                                  
                                    </div>
                                </div>                             
                                <div>
                                    <div className='horizontal-container'>
                                        <div title='Рейтинг по фундаменталу' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreValue(fundamentalParameter.score.scoreValue)}}>{fundamentalParameter.inPortfolio ? <div><b>{`${fundamentalParameter.score.scoreValue}`}</b></div> : <div>{`${fundamentalParameter.score.scoreValue}`}</div>}</div>                                
                                        <div title='P/E <= 5' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.peOk)}}>{fundamentalParameter.inPortfolio ? <div><b>PE</b></div> : <div>PE</div>}</div>
                                    </div>
                                    <div className='horizontal-container'>
                                        <div title='EV/EBITDA <= 3.5' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.evOk)}}>{fundamentalParameter.inPortfolio ? <div><b>EV</b></div> : <div>EV</div>}</div>
                                        <div title='P/BV <= 1' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.pbvOk)}}>{fundamentalParameter.inPortfolio ? <div><b>BV</b></div> : <div>BV</div>}</div>
                                    </div>
                                    <div className='horizontal-container'>
                                        <div title='ДД >= 10.0' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.dividendYieldOk)}}>{fundamentalParameter.inPortfolio ? <div><b>ДД</b></div> : <div>ДД</div>}</div>
                                        <div title='Дивидендный аристократ' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.isDividendAristocrat)}}>{fundamentalParameter.inPortfolio ? <div><b>ДА</b></div> : <div>ДА</div>}</div>
                                    </div>
                                    <div className='horizontal-container'>
                                        <div title='Рост FCF' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.fcfOk)}}>{fundamentalParameter.inPortfolio ? <div><b>FCF</b></div> : <div>FCF</div>}</div>
                                        <div title='Рост EPS' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.epsOk)}}>{fundamentalParameter.inPortfolio ? <div><b>EPS</b></div> : <div>EPS</div>}</div>
                                    </div>                                    
                                    <div className='horizontal-container'>
                                        <div title='Рост чистой прибыли' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.netProfitOk)}}>{fundamentalParameter.inPortfolio ? <div><b>ЧП</b></div> : <div>ЧП</div>}</div>
                                        <div title='Долговая нагрузка' className='fundamental-parameter-border-style score-cell' style={{backgroundColor: GetColorScoreIndicator(fundamentalParameter.score.netDebtOk)}}>{fundamentalParameter.inPortfolio ? <div><b>Д</b></div> : <div>Д</div>}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='fundamental-parameter-border-style mcftr-change-cell' style={{backgroundColor: benchmarkChangeColor(fundamentalParameter.benchmarkChange)}}>{fundamentalParameter.inPortfolio ? <div><b>{`${fundamentalParameter.benchmarkChange} %`}</b></div> : <div>{`${fundamentalParameter.benchmarkChange} %`}</div>}</div>
                                </div>                                                                                   
                                <div>
                                    {
                                        fundamentalParameter.periods.map((item) => (
                                            <div className='fundamental-parameter-border-style year-cell'>{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>   
                                <div>
                                    {
                                        fundamentalParameter.numberShares.map((item, index) => (
                                            <div className='fundamental-parameter-border-style number-shares-cell' 
                                                style={{backgroundColor: numberSharesColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'NumberShares', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>                                                              
                                <div>
                                    {
                                        fundamentalParameter.pe.map((item, index) => (
                                            <div className='fundamental-parameter-border-style pe-cell' 
                                                style={{backgroundColor: peColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Pe', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.pbv.map((item, index) => (
                                            <div className='fundamental-parameter-border-style pbv-cell' 
                                                style={{backgroundColor: pbvColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Pbv', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>    
                                <div>
                                    {
                                        fundamentalParameter.roa.map((item, index) => (
                                            <div className='fundamental-parameter-border-style roa-cell' 
                                                style={{backgroundColor: roaColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Roa', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.evEbitda.map((item) => (
                                            <div className='fundamental-parameter-border-style ev-ebitda-cell' 
                                                style={{backgroundColor: evEbitdaColor(item)}}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.netDebtEbitda.map((item) => (
                                            <div className='fundamental-parameter-border-style netdebt-ebitda-cell' 
                                                style={{backgroundColor: netDebtEbitdaColor(item)}}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.ebitdaRevenue.map((item) => (
                                            <div className='fundamental-parameter-border-style ebitda-revenue-cell' 
                                                style={{backgroundColor: ebitdaRevenueColor(item)}}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>                                                                                    
                                <div>
                                    {
                                        fundamentalParameter.marketCap.map((item, index) => (
                                            <div className='fundamental-parameter-border-style marketcap-cell' 
                                                style={{backgroundColor: marketCapColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'MarketCap', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>                           
                                <div>
                                    {
                                        fundamentalParameter.ev.map((item, index) => (
                                            <div className='fundamental-parameter-border-style ev-cell' 
                                                style={{backgroundColor: evColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Ev', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.ebitda.map((item, index) => (
                                            <div className='fundamental-parameter-border-style ebitda-cell' 
                                                style={{backgroundColor: ebitdaColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Ebitda', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.netDebt.map((item, index) => (
                                            <div className='fundamental-parameter-border-style netdebt-cell' 
                                                style={{backgroundColor: netDebtColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'NetDebt', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.revenue.map((item, index) => (
                                            <div className='fundamental-parameter-border-style revenue-cell' 
                                                style={{backgroundColor: revenueColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Revenue', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>   
                                <div>
                                    {
                                        fundamentalParameter.netProfit.map((item, index) => (
                                            <div className='fundamental-parameter-border-style netprofit-cell' 
                                                style={{backgroundColor: netProfitColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'NetProfit', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.eps.map((item, index) => (
                                            <div className='fundamental-parameter-border-style eps-cell' 
                                                style={{backgroundColor: epsColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Eps', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>                                
                                <div>
                                    {
                                        fundamentalParameter.fcf.map((item, index) => (
                                            <div className='fundamental-parameter-border-style fcf-cell' 
                                                style={{backgroundColor: fcfColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Fcf', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>                                
                                <div>
                                    {
                                        fundamentalParameter.dividend.map((item, index) => (
                                            <div className='fundamental-parameter-border-style dividend-cell' 
                                                style={{backgroundColor: dividendColor(item)}}
                                                onDoubleClick={() => {
                                                    dispatch(fetchCurrentFundamentalParameter({ ticker: fundamentalParameter.ticker, type: 'Dividend', period: fundamentalParameter.periods[index], value: item }))
                                                    dispatch(showEditFundamentalParameterModal())
                                                }}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))
                                    }
                                </div>
                                <div>
                                    {
                                        fundamentalParameter.dividendYield.map((item) => (
                                            <div className='fundamental-parameter-border-style dividend-yield-cell' 
                                                style={{backgroundColor: dividendYieldColor(item)}}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }                                    
                                </div>                            
                                <div>
                                    {
                                        fundamentalParameter.price.map((item) => (
                                            <div className='fundamental-parameter-border-style price-cell'
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }                                    
                                </div> 
                                <div>
                                    {
                                        fundamentalParameter.deltaMinMax.map((item) => (
                                            <div className='fundamental-parameter-border-style delta-min-max-cell' 
                                                style={{backgroundColor: deltaMinMaxColor(item)}}
                                                >{fundamentalParameter.inPortfolio ? <div><b>{item}</b></div> : <div>{item}</div>}</div>
                                        ))                                        
                                    }
                                </div>                                                       
                            </div>                        
                        </div>
                    ))
                }
            </div>
        }
        <EditFundamentalParameterModal />
        </React.Fragment>                
    )
}