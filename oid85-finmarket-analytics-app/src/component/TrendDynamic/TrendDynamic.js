import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaTrendDynamic } from '../../redux/actions/trendDynamicActions'
import Loader from '../Loader/Loader'
import './styles.css'

export const TrendDynamic = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const trendDynamicData = useSelector(state => state.trendDynamic.trendDynamicData)

    useEffect(() => {
        dispatch(sagaTrendDynamic())
    }, [])

    return (
        <React.Fragment>
        {
            !trendDynamicData.result || loading
            ? <Loader/>
            :
            <div className='vertical-container'>
                {
                    console.log(trendDynamicData)
                }
            </div>          
        }
        </React.Fragment>                
    )
}