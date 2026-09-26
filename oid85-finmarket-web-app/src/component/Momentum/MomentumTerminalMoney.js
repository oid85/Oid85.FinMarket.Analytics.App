import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const MomentumTerminalMoney = ({title, text, value, eunit}) => {

    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='momentum-money border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                >
                <div className='momentum-container momentum-money-description'>{text}</div> 
                <div className='momentum-container momentum-money-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}