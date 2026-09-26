import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalLifePosition = ({position}) => {
    return (
        <React.Fragment>    
            {
                position.doShow
                ?
                <div className='momentum-terminal-row-life-position border-style' style={{backgroundColor: position.colorFill}}>
                    <div className='momentum-container'>{`${formatNumber(position.size)} шт.`}</div>
                </div>
                :
                <div className='momentum-terminal-row-life-position border-style'></div>
            }      
        </React.Fragment>
    )
}