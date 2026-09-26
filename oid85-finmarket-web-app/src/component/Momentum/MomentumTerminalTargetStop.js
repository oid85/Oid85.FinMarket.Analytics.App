import React from 'react'
import './styles.css'

const formatNumber = (num) => {
    return new Intl.NumberFormat('ru-RU').format(num);
};

export const MomentumTerminalTargetStop = ({stop}) => {
    return (
        <React.Fragment>    
            {
                stop.doShow
                ?
                <div className='momentum-terminal-row-target-stop border-style' style={{backgroundColor: stop.colorFill}}>
                    <div className='momentum-container'>{`${formatNumber(stop.size)} шт.`}</div>
                </div>
                :
                <div className='momentum-terminal-row-target-stop border-style'></div>
            }      
        </React.Fragment>
    )
}