import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalLifeStop = ({stop}) => {
    return (
        <React.Fragment>    
            {
                stop.doShow
                ?
                <div className='momentum-terminal-row-life-stop border-style' style={{backgroundColor: stop.colorFill}}>
                    <div className='momentum-container'>{`${formatNumber(stop.size)} шт.`}</div>
                </div>
                :
                <div className='momentum-terminal-row-life-stop border-style'></div>
            }      
        </React.Fragment>
    )
}