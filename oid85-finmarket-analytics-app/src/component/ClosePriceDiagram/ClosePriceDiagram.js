import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaClosePriceDiagram } from '../../redux/actions/closePriceDiagramActions'
import Loader from '../Loader/Loader'
import { ClosePriceDiagramComponent } from './ClosePriceDiagramComponent'
import './styles.css'

export const ClosePriceDiagram = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const closePriceDiagramData = useSelector(state => state.closePriceDiagram.closePriceDiagramData)

    useEffect(() => {
        dispatch(sagaClosePriceDiagram())
    }, [])

    return (
        <React.Fragment>
        {
            !closePriceDiagramData.result || loading
            ? <Loader/>
            :
            <div className='close-price-diagram-container'>             
                {
                    closePriceDiagramData.result.items.map((diagram, index) => (
                        <ClosePriceDiagramComponent
                            key={index}
                            ticker={diagram.ticker}
                            name={diagram.name} 
                            inPortfolio={diagram.inPortfolio} 
                            data={diagram.data} 
                            trendState={diagram.trendState}/>))
                }
            </div>         
        }
        </React.Fragment>                
    )
}