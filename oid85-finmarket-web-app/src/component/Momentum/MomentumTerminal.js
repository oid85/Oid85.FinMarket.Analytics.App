import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchMomentumVersion, sagaMomentumTerminal } from '../../redux/actions/momentumActions'
import Loader from '../Loader/Loader'
import './styles.css'

export const MomentumTerminal = () => {
    
    const strategyVersions = ['Classic']
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const momentumTerminalData = useSelector(state => state.momentum.momentumTerminalData)
    
    useEffect(() => {
        dispatch(sagaMomentumTerminal())
    }, [])

    return (
        <React.Fragment>
        {
            !momentumTerminalData.result || loading
            ? <Loader/>
            :
            <div>
                <div className='horizontal-container'>
                {
                    strategyVersions.map((version) => (
                        <div className='momentum-version-button-container'>
                            <button className='btn btn-outline-dark momentum-version-button'
                                onClick={() => {
                                    dispatch(fetchMomentumVersion(version))
                                    dispatch(sagaMomentumTerminal()) 
                                }}><div className='momentum-version-button-text'>{version}</div></button>
                        </div>                        
                    ))
                }                                                                                                                                                                                                                                                              
                </div>
                <div>Панель терминала</div>                                                       
            </div>
        }
        </React.Fragment>                
    )
}