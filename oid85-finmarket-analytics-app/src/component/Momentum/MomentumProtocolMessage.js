import React from 'react'
import { Calendar } from '../Calendar/Calendar';
import { Ticker } from '../Ticker/Ticker';
import './styles.css'

export const MomentumProtocolMessage = ({protocolMessage}) => {
    return (
        <React.Fragment>
            <div className='horizontal-container'>
                <div className='border-style'><Calendar date = {protocolMessage.date} /></div>
                <div className='border-style'><Ticker value={protocolMessage.ticker} width={50} height={50} /></div>
                <div className='momentum-protocol-message-ticker border-style'>{`${protocolMessage.ticker}`}</div>                
                <div className='momentum-protocol-message-text border-style'>{`${protocolMessage.message}`}</div>                
            </div>
        </React.Fragment>
    )
}