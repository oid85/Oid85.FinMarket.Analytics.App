import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaMomentumMonitor } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import './styles.css'

export const MomentumBacktest = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumMonitorData = useSelector(state => state.momentum.momentumMonitorData)
    
    useEffect(() => {

    }, [])

    return (
        <React.Fragment>
        {
            !momentumMonitorData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>
                                                                                                                                                                                                                                                          

                </div>                                            
            </div>
        }
        </React.Fragment>                
    )
}