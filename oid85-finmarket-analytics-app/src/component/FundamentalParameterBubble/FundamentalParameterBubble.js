import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaFundamentalParameterBubble } from '../../redux/actions/fundamentalParameterBubbleActions'
import Loader from '../Loader/Loader'
import './styles.css'
import { FundamentalParameterBubbleDiagram } from './FundamentalParameterBubbleDiagram'

export const FundamentalParameterBubble = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const fundamentalParameterBubbleData = useSelector(state => state.fundamentalParameterBubble.fundamentalParameterBubbleData)

    useEffect(() => {
        dispatch(sagaFundamentalParameterBubble())
    }, [])    

    return (
        <React.Fragment>
        {
            !fundamentalParameterBubbleData.result || loading
            ? <Loader/>
            :
            <div className='fundamental-parameter-bubble-container border-style'>
                <FundamentalParameterBubbleDiagram data = {fundamentalParameterBubbleData.result.data} />
            </div>         
        }
        </React.Fragment>                
    )
}