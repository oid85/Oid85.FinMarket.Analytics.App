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

export const FundamentalBySector = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalBySectorData = useSelector(state => state.fundamentalParameter.fundamentalBySectorData)    
    const currentSector = useSelector(state => state.fundamentalParameter.currentSector)    

    useEffect(() => {
        dispatch(sagaFundamentalBySector())
    }, [])

    console.log(fundamentalBySectorData.result)

    return (
        <React.Fragment>
        {
            !fundamentalBySectorData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-by-sector-container'>
                <div className='horizontal-container'>
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Металлургия'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Металлургия</div></button>
                    </div>
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Добыча'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Добыча</div></button>
                    </div>       
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Нефтегаз'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Нефтегаз</div></button>
                    </div>       
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Банки'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Банки</div></button>
                    </div>    
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Ритейл'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Ритейл</div></button>
                    </div>      
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'ИТ'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>ИТ</div></button>
                    </div>  
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Телеком'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Телеком</div></button>
                    </div>  
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Финансы'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Финансы</div></button>
                    </div>    
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Строительство'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Строительство</div></button>
                    </div>  
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Агросектор'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Агросектор</div></button>
                    </div>  
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Химия'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Химия</div></button>
                    </div>      
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Биотех'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Биотех</div></button>
                    </div> 
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Транспорт'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Транспорт</div></button>
                    </div>   
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Здравоохранение'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Здравоохр.</div></button>
                    </div>    
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Энергетика'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Энергетика</div></button>
                    </div>   
                    <div className='sector-button-container'>
                        <button className='btn btn-outline-dark sector-button'
                            onClick={() => {
                                dispatch(fetchCurrentSector({name: 'Машиностроение'}))
                                dispatch(sagaFundamentalBySector())
                            }}><div className='sector-button-text'>Машиностр.</div></button>
                    </div>                                                                                                                                                                                                                                                               
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