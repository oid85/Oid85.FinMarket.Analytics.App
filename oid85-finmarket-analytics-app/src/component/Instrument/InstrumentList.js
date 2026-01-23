import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentInstrument, sagaInstrumentSelect } from '../../redux/actions/instrumentActions'
import './styles.css'

export const InstrumentList = ({instruments}) => {
    
    const dispatch = useDispatch()
    
    const displayText = (instrument) => {
        return `${instrument.ticker} (${instrument.benchmarkChange} %)`
    }

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
                        ? <b><div className='select-instrument-button-text'>{displayText(instrument)}</div></b>
                        : <del><div className='select-instrument-button-text'>{displayText(instrument)}</div></del>}
                </button> 
            ))
        }
        </React.Fragment>                
    )
}