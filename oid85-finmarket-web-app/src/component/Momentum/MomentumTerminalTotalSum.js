import React from 'react'
import { CONSTANTS } from '../../constants'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

export const MomentumTerminalTotalSum = ({title, text, value, eunit}) => {

    return (
        <React.Fragment>          
            <div 
                title={title} 
                className='momentum-total-sum border-style' 
                style={{backgroundColor: CONSTANTS.COLOR_LIGHTGREEN}}
                >
                <div className='momentum-container momentum-total-summ-description'>{text}</div> 
                <div className='momentum-container momentum-total-summ-value'>{`${formatNumber(value)} ${eunit}`}</div>                 
            </div> 
        </React.Fragment>                
    )
}