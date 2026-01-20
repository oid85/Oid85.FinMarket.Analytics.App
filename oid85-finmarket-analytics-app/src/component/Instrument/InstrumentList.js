import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentInstrument, sagaInstrumentSelect } from '../../redux/actions/instrumentActions'
import './styles.css'

export const InstrumentList = ({instruments}) => {
    
    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
        {
            instruments.map((instrument) => (                                                
                <button className='btn btn-outline-primary btn-sm select-instrument-button'
                    onClick={() => {                        
                        dispatch(fetchCurrentInstrument({...instrument}))
                        dispatch(sagaInstrumentSelect())
                    }                
                    }>{instrument.isSelected 
                        ? <div>{instrument.ticker}</div> 
                        : <del><div>{instrument.ticker}</div></del>}
                </button> 
            ))
        }
        </React.Fragment>                
    )
}