import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sagaInstrumentList } from '../../redux/actions/instrumentActions'
import Loader from '../Loader/Loader'
import './styles.css'

export const InstrumentList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const instrumentListData = useSelector(state => state.instrument.instrumentListData)

    useEffect(() => {
        dispatch(sagaInstrumentList())
    }, [])

    return (
        <React.Fragment>
        {
            !instrumentListData.result || loading
            ? <Loader/>
            :
            <div>
                {
                    instrumentListData.result.instruments.map((instrument) => (                                                
                        <button className='btn btn-outline-primary btn-sm select-instrument-button'
                            onClick={() => {
                            }                
                            }>{instrument.isSelected 
                                ? <div>{instrument.ticker}</div> 
                                : <del><div>{instrument.ticker}</div></del>}
                        </button> 
                    ))
                }
            </div>         
        }
        </React.Fragment>                
    )
}