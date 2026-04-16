import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { 
    sagaFundamentalBySector, 
    fetchCurrentSector
} from '../../redux/actions/fundamentalParameterActions'
import Loader from '../Loader/Loader'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { LineDiagram } from './LineDiagram'
import { BarDiagram } from './BarDiagram'
import { BubbleDiagram } from './BubbleDiagram'
import { sagaSectorList } from '../../redux/actions/instrumentActions'

export const FundamentalBySector = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalBySectorData = useSelector(state => state.fundamentalParameter.fundamentalBySectorData)   
    const sectorListData = useSelector(state => state.instrument.sectorListData) 
    const currentSector = useSelector(state => state.fundamentalParameter.currentSector)    

    useEffect(() => {
        dispatch(sagaFundamentalBySector())
        dispatch(sagaSectorList())
    }, [])

    return (
        <React.Fragment>
        {
            !fundamentalBySectorData.result || !sectorListData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-by-sector-container'>
                <div className='horizontal-container'>
                {
                    sectorListData.result.sectors.map((sector) => (
                        <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: sector}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>{sector}</div></button>
                    </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div className='fundamental-by-sector-sector-title'>{currentSector.name}</div>
                <div className='fundamental-by-sector-diagram-title'>График цены</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.priceDiagram.map((diagram, index) => (
                        <LineDiagram
                            key={index}
                            ticker={diagram.ticker}
                            name={diagram.name} 
                            inPortfolio={diagram.inPortfolio} 
                            data={diagram.data} />))
                }                    
                </div>       
                <div className='fundamental-by-sector-diagram-title'>Выручка, млрд. руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.revenueDiagram.map((diagram, index) => (
                        <BarDiagram
                            key={index}
                            data={diagram.data} />))
                }                        
                </div>     
                <div className='fundamental-by-sector-diagram-title'>Чистая прибыль, млрд. руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.netProfitDiagram.map((diagram, index) => (
                        <BarDiagram
                            key={index}
                            data={diagram.data} />))
                }                        
                </div>                 
                <div className='fundamental-by-sector-diagram-title'>Дивиденды, руб</div>
                <div className='horizontal-container'>
                {
                    fundamentalBySectorData.result.dividendDiagram.map((diagram, index) => (
                        <BarDiagram
                            key={index}
                            data={diagram.data} />))
                }                        
                </div>
                <div className='fundamental-by-sector-diagram-title'>EV/EBITDA, NetDebt/EBITDA, MarketCap</div>
                <div className='horizontal-container'>
                    <BubbleDiagram data={fundamentalBySectorData.result.bubbleDiagram} />
                </div>                                                                                                          
            </div>
        }

        </React.Fragment>                
    )
}